<template>
  <div>
    <button
      v-if="page !== pages.length && pages.length > 0"
      @click="loadMore"
      class="btn-more"
    >
      <div class="btn-more-title">показать еще</div>
    </button>

    <div v-if="pages.length > 0" class="pagination-wrap">
      <div class="pagination">
        <button
          v-if="page !== 1"
          @click="page !== 1 ? page-- : null"
          class="pagination-back"
        >
          <svg
            width="8"
            height="8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5.5L2 4l3.5 3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>Назад</div>
        </button>
        <div class="pagination-list">
          <button
            v-for="(number, idx) of pages"
            :key="idx"
            href="#"
            @click="page = number"
            :class="page == number ? 'active' : ''"
            class="pagination-item"
          >
            {{ number }}
          </button>
        </div>
        <button
          v-if="page !== pages.length"
          @click="page !== pages.length ? page++ : null"
          class="pagination-next"
        >
          <div>Вперед</div>
          <svg
            width="8"
            height="9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 7.611l3.5-3.5-3.5-3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="pagination-watched">
        Вы посмотрели {{ viewed }} из {{ list.length }} разделов
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 60,
    },
    list: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isLoadMore: false,
      pages: [],
      page: 1,
    };
  },

  mounted() {
    this.setPages();
  },

  methods: {
    setPages() {
      const numberOfPages = Math.ceil(this.list.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(list) {
      const page = this.page;
      const perPage = this.perPage;
      const from = this.isLoadMore ? 1 : page * perPage - perPage;
      const to = this.isLoadMore ? page * perPage : page * perPage + from;
      this.isLoadMore = false;
      return list.slice(from, to);
    },

    loadMore() {
      this.isLoadMore = true;
      this.page++;
    },
  },

  computed: {
    displayedList() {
      return this.paginate(this.list);
    },

    viewed() {
      const res = (this.page + 1) * this.perPage - this.perPage;
      return res >= this.list.length ? this.list.length : res;
    },
  },

  watch: {
    page() {
      this.$store.dispatch('list/updateDisplayedList', this.displayedList);
    },
  },
};
</script>
