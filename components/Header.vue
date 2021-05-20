<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <nav class="header-menu">
          <ul>
            <li>
              <nuxt-link to="/about" active-class="active"
                >о компании</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/delivery" active-class="active"
                >доставка и оплата</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/contacts" active-class="active"
                >контакты</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <div class="header-contacts">
          <a
            href="mailto:info@anturium.net"
            target="_blank"
            rel="noopener noreferrer"
            >info@anturium.net</a
          >
          <a href="tel:+79200988778">8 920 098-87-78</a>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="container">
        <nuxt-link no-prefetch to="/" class="logo">
          <LogoSvg />
        </nuxt-link>

        <button
          ref="headerBtn"
          @click="toggleMenu"
          class="btn-transparent header-btn"
        >
          <MenuSvg id="svg-menu" />
          <CloseSvg id="svg-close" />
          Весь каталог
        </button>
        <form action="/search/index.php" class="search">
          <div class="search-input">
            <label for="search">
              <SearchSvg />
              <div
                ref="searchPlaceholder"
                v-if="!searchValue.length"
                class="search-input-placeholder"
              >
                Поиск на сайте
              </div>
            </label>
            <input
              @focus="isSearchFocus = true"
              @blur="isSearchFocus = false"
              v-model="searchValue"
              type="text"
              name="search"
              id="search"
            />
            <button class="search-clear">
              <img src="@/assets/img/icons/close-24.svg" alt="close" />
            </button>

            <div class="fast-search">
              <ul class="fast-search__list">
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240+2х1,5-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240+2х1,5-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240+2х1,5-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240-1</a>
                </li>
                <li class="fast-search__item">
                  <a href="" class="fast-search__link">ААБ2Л 1х240+2х1,5-1</a>
                </li>
              </ul>
              <div class="fast-search__btn">
                <a href="">Все результаты</a>
              </div>
            </div>
          </div>
          <button type="submit" class="btn-onplate search-btn">найти</button>
        </form>
      </div>

      <transition name="fade">
        <div v-if="isShowMenu" class="header-catalog">
          <ul class="container">
            <li v-for="item of catalog" :key="item" class="header-catalog-item">
              <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import MenuSvg from "@/assets/img/icons/menu.svg";
import CloseSvg from "@/assets/img/icons/close-12.svg";
import SearchSvg from "@/assets/img/icons/search-24.svg";
import LogoSvg from "@/assets/img/logo.svg";

export default {
  components: {
    MenuSvg,
    SearchSvg,
    LogoSvg,
    CloseSvg,
  },

  async fetch() {
    const data = await fetch('http://localhost:3000/api/catalog');
    this.catalog = await data.json();
  },

  data() {
    return {
      isShowMenu: false,
      isSearchFocus: false,
      searchValue: "",
      catalog: []
    };
  },

  mounted() {
    document.addEventListener("keydown", (evt) => {
      if (evt.keyCode !== 27 && !this.isShowMenu) return;
      this.closeMenu();
    });

    document.addEventListener("click", (evt) => {
      if (evt.target.closest([".header-btn", ".header-catalog"])) return;
      this.closeMenu();
    });
  },

  methods: {
    toggleMenu(evt) {
      evt.target.classList.toggle("active");
      evt.target.classList.contains("active")
        ? (this.isShowMenu = true)
        : (this.isShowMenu = false);
    },

    closeMenu() {
      this.isShowMenu = false;
      this.$refs.headerBtn.classList.remove("active");
    },

    changeInputPlaceholder() {
      (this.isSearchFocus)
        ? (this.$refs.searchPlaceholder.style.opacity = 0.5)
        : (this.$refs.searchPlaceholder.style.opacity = "");
    }
  },

  watch: {
    isSearchFocus() {
      this.$nextTick().then(this.changeInputPlaceholder);
    },

    searchValue() {
      this.$nextTick().then(this.changeInputPlaceholder);
    }
  },
};
</script>
