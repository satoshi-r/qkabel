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
            <li class="header-catalog-item">
              <a href="">Силовые с бумажной изоляцией</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Силовые с пластмассовой изоляцией</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Силовые с резиновой изоляцией</a>
            </li>
            <li class="header-catalog-item"><a href="">Антивибрационные</a></li>
            <li class="header-catalog-item">
              <a href="">Высоковольтные малой мощности</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Городские телефонные</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для аэродромных огней</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для компьютерных сетей</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для сигнализации и блокировки</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для промышленной автоматизациии систем управления</a>
            </li>
            <li class="header-catalog-item"><a href="">Коаксиальные</a></li>
            <li class="header-catalog-item"><a href="">Контрольные</a></li>
            <li class="header-catalog-item"><a href="">Магистральные</a></li>
            <li class="header-catalog-item">
              <a href="">Кабели связи телефонные шахтные</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Шахтные и экскаваторные</a>
            </li>
            <li class="header-catalog-item"><a href="">Судовые</a></li>
            <li class="header-catalog-item"><a href="">Управления</a></li>
            <li class="header-catalog-item">
              <a href="">Кабели связи станционные</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Проводного вещания</a>
            </li>
            <li class="header-catalog-item"><a href="">Нефтепогружные</a></li>
            <li class="header-catalog-item">
              <a href="">Местной связи высокочастотные</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для систем пожарной и охранной сигнализации</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Оптический кабель</a>
            </li>
            <li class="header-catalog-item"><a href="">Пневмокабель</a></li>
            <li class="header-catalog-item">
              <a href="">Радиочастотный кабель</a>
            </li>
            <li class="header-catalog-item"><a href="">Провода</a></li>
            <li class="header-catalog-item"><a href="">Обмоточные</a></li>
            <li class="header-catalog-item"><a href="">Бортовые</a></li>
            <li class="header-catalog-item"><a href="">Геофизические</a></li>
            <li class="header-catalog-item">
              <a href="">Для медицинских приборов</a>
            </li>
            <li class="header-catalog-item">
              <a href="">Для подвижного состава</a>
            </li>
            <li class="header-catalog-item"><a href="">Монтажные</a></li>
            <li class="header-catalog-item"><a href="">Термостойкие</a></li>
            <li class="header-catalog-item">
              <a href="">Кабели нагревательные и провода термопарные</a>
            </li>
            <li class="header-catalog-item"><a href="">Шнуры связи</a></li>
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

  data() {
    return {
      isShowMenu: false,
      isSearchFocus: false,
      searchValue: "",
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
