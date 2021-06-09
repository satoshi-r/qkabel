<template>
  <div class="catalog container content-items">
    <h1 class="content-title">{{ title }}</h1>
    <div class="main-wrapper">
      <div class="table table-1">
       <GroupFilter />

        <!-- таблица -->
        <div class="table-container">
          <a
            href="#"
            v-for="(group, idx) of displayedGroups"
            :key="idx"
            class="table-item"
          >
            <div class="item-name">{{ group.name }}</div>
            <div class="item-core">{{ group.values.core }}</div>
            <div class="item-isolation">{{ group.values.insulation }}</div>
            <div class="item-execution">{{ group.values.execution }}</div>
            <div class="item-cover">{{ group.values.protect }}</div>
          </a>
          <div v-if="searchResultLength == 0" class="search-notfound">Ничего не найдено</div>
        </div>
      </div>

      <Pagination :list="groups" />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import GroupFilter from "@/components/GroupFilter";

/* TODO
 * [ ] 1. поехала верстка таблицы на больших экранах
 */
export default {
  components: {
    Pagination,
    GroupFilter
  },

  async fetch({ store, params }) {
    await store.dispatch("list/fetch", params);
  },

  data() {
    return {
      searchResultLength: null
    }
  },

  mounted() {
    this.$bus.on("onGroupFilter", this.setSearchResultLength);
  },

  methods: {
    setSearchResultLength(list) {
      this.searchResultLength = list.length;
    }
  },

  computed: {
    groups() {
      return this.$store.getters["list/getList"];
    },

    title() {
      return this.$store.getters["list/getTitle"];
    },

    displayedGroups() {
      return this.$store.getters["list/getDisplayedList"];
    }
  }

};
</script>
