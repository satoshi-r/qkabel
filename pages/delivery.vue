<template>
  <div class="page delivery-page">
    <div class="container main-container">
      <div class="content-container">
        <h1 class="content-title">Доставка и оплата</h1>
        <p>
          Наша компания заключила договор на доставку с двумя лучшими
          транспортными компаниями: Деловые Линии или ПЭК. Благодаря этому,
          доставка происходит в кратчайшие сроки по всей России.
        </p>
        <strong>
          Стоимость доставки по Москве и МО: <br />
          курьером (до 50 кг): от 1 000 рублей. <br />
          отдельной машиной: от 3 500 рублей.
        </strong>
        <p>
          Стоимость доставки в другой регион рассчитывается индивидуально, в
          зависимости от массы и габаритов груза.
        </p>
        <strong>
          Для получения груза необходимо предоставить доверенность и паспорт.
        </strong>

        <h2>оплата</h2>

        <p>
          Наша компания заключила договор на доставку с двумя лучшими
          транспортными компаниями: Деловые Линии или ПЭК. Благодаря этому,
          доставка происходит в кратчайшие сроки по всей России.
        </p>
      </div>

      <SideBar :images="sidebarImages" />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import img1 from "@/assets/img/partner1.jpg";
import img2 from "@/assets/img/partner2.png";

export default {
  components: {
    SideBar,
  },

  data() {
    return {
      sidebarImages: [img1, img2]
    }
  }
};
</script>