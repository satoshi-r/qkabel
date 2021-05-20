const cherio = require('cherio');
const unirest = require('unirest');

class Parser {
    constructor() {
        this.url = 'http://test-qkabel.ru/';
    }

    _request(url, cb) {
        return new Promise(async (resolve, reject) => {
            await unirest.get(url).end(({
                body,
                error
            }) => {
                const $ = cherio.load(body);

                if (error) {
                    console.log(error);
                    reject(error);
                }

                const result = [];
                cb($, result);
                resolve(result);
            });
        });
    }

    async getPagination(url) {
        return await this._request(url, ($, res) => {
            res.push($('.pagination-item').length);
        });
    }

    async getCatalog() {
        try {
            return await this._request(this.url, ($, res) => {
                $('.catalog-item a').each((i, item) => {
                    res.push({
                        id: i,
                        title: $(item).text(),
                        link: $(item).attr('href')
                    });
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getPopular() {
        try {
            return await this._request(this.url, ($, res) => {
                $('.popular-section').each((i, item) => {
                    const elems = [];
                    $(item).find('.section-group a').each((i, item) => {
                        elems.push({
                            title: $(item).text(),
                            link: $(item).attr('href')
                        });
                    });

                    res.push({
                        title: $(item).find('.section-title').text(),
                        elems
                    });
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getGroups(id) {
        const catalog = await this.getCatalog();
        const group = catalog.filter(item => item.id == id);
        const links = (id !== undefined) ? group.map(elem => elem.link) : catalog.map(elem => elem.link);
        const result = [];

        const getData = async (index, pagination) => {
            const link = this.url.slice(0, -1) + links[index] + ((pagination) ? pagination : "");
            return await this._request(link, ($, res) => {
                $('.table-item').each((i, item) => {
                    res.push({
                        id: i,
                        link: $(item).attr('href'),
                        name: $(item).find('.item-name').text(),
                        values: {
                            core: $(item).find('.item-value').eq(0).text(),
                            insulation: $(item).find('.item-value').eq(1).text(),
                            execution: $(item).find('.item-value').eq(2).text(),
                            protect: $(item).find('.item-value').eq(3).text(),
                        }
                    });
                });
            });
        }

        for (let i = 0; i < links.length; i++) {
            const paginationLength = await this.getPagination(this.url.slice(0, -1) + links[i]);

            for (let index = 0; index < paginationLength[0]; index++) {
                if (index == 0) {
                    try {
                        result.push(...await getData(i));
                    } catch (error) {
                        console.log(error); 
                    }
                } else {
                    try {
                        result.push(...await getData(i, `filter/clear/apply/?PAGEN_1=${index + 1}`));
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }

        return result;
    }

    async getProducts(id, groupID = 0) {
        const group = await this.getGroups(groupID);
        const product = group.filter(item => item.id == id);
        const links = (id !== undefined) ? product.map(elem => elem.link) : group.map(elem => elem.link);
        const result = [];

        const getInfo = async (url) => {
            return await this._request(url, ($, res) => {
                res.push({
                    characteristics: {
                        core_length: +$('.company_product').find('h4').siblings('ul').find('li').eq(0).text().match(/\d+/g),
                        veins_section: +$('.company_product').find('h4').siblings('ul').find('li').eq(1).text().match(/\d+/g),
                        voltage: +$('.company_product').find('h4').siblings('ul').find('li').eq(2).text().match(/\d+/g),
                        screen_section: +$('.company_product').find('h4').siblings('ul').find('li').eq(3).text().match(/\d+/g),
                    },

                    description: $('.company_product').find('div[itemprop=description]').html().trim()
                });
            });
        }

        const getData = async (index, pagination) => {
            const link = this.url.slice(0, -1) + links[index] + ((pagination) ? pagination : "");
            return await this._request(link, ($, res) => {
                
                $('.table-item').each(async (i, item) => {
                    const link = $(item).attr('href');

                    res.push({
                        id: i,
                        link,
                        name: $(item).find('.item-name').text(),
                        exist: $(item).find('.exist-item.fill').length,
                        price: $(item).find('.item-price span').text().trim(),
                    });

                });
            });
        }
        
        for (let i = 0; i < links.length; i++) {
            const paginationLength = await this.getPagination(this.url.slice(0, -1) + links[i]);
            for (let index = 0; index < paginationLength[0]; index++) {
                if (index == 0) {
                    try {
                        result.push(...await getData(i));
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    try {
                        result.push(...await getData(i, `filter/clear/apply/?PAGEN_1=${index + 1}`));
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }

        for (let i = 0; i < result.length; i++) {
            const link = this.url.slice(0, -1) + result[i].link;
            const info = await getInfo(link);
            result[i].info = info;
        }

        return result;
    }
}

const parser = new Parser();
module.exports = parser;