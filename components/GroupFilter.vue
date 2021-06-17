<template>
  <div class="filter-nav">
    <div class="filter-search" :class="filtration ? 'disabled' : ''">
      <input v-model="searchValue"
             @focusin="searchFocused = true"
             @focusout="searchFocused = false"
             type="text"
             name="filter-search" id="filter-search"
      />

      <label for="filter-search" class="filter-search-label">
        <span :style="{opacity: (!searchFocused && !searchValue.length) ? 1 : 0}" class="filter-search-placeholder">Наименование</span>
        <svg
          :style="{opacity: (!searchFocused && !searchValue.length) ? 1 : 0}"
          class="filter-search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.2928 6.19239C20.216 9.11557 20.216 13.855 17.2928 16.7782C14.3696 19.7014 9.63022 19.7014 6.70704 16.7782C3.78385 13.855 3.78385 9.11557 6.70704 6.19239C9.63022 3.2692 14.3696 3.2692 17.2928 6.19239ZM18.3428 17.122C21.3094 13.7898 21.1951 8.68045 17.9999 5.48528C14.6862 2.17157 9.31364 2.17157 5.99993 5.48528C2.68622 8.79899 2.68622 14.1716 5.99993 17.4853C9.19522 20.6806 14.3049 20.7948 17.637 17.8279L17.6484 17.8393L20.2784 20.4692L20.308 20.4989C20.5029 20.6938 20.819 20.6938 21.0139 20.4989C21.2088 20.304 21.2088 19.9879 21.0139 19.793L20.9842 19.7634L18.3543 17.1334L18.3428 17.122Z"
          />
        </svg>
      </label>
      <transition name="fade">
        <button v-show="searchFocused || searchValue.length" class="filter-search-clear" @click="clearSearch">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.71421 5.05256C5.5315 4.86985 5.23527 4.86985 5.05256 5.05256C4.86985 5.23527 4.86985 5.5315 5.05256 5.71421L11.3383 11.9999L5.05256 18.2856C4.86985 18.4683 4.86985 18.7645 5.05256 18.9473C5.23527 19.13 5.5315 19.13 5.71421 18.9473L11.9999 12.6616L18.2856 18.9473C18.4683 19.13 18.7645 19.13 18.9473 18.9473C19.13 18.7645 19.13 18.4683 18.9473 18.2856L12.6616 11.9999L18.9473 5.71421C19.13 5.5315 19.13 5.23527 18.9473 5.05256C18.7645 4.86985 18.4683 4.86985 18.2856 5.05256L11.9999 11.3383L5.71421 5.05256Z"
            />
          </svg>
        </button>
      </transition>


    </div>

    <div v-for="(filter, idx) of filters" :key="idx" :class="filter.class" class="dropdown-default">
      <button :class="filter.list.length == 1 || searchValue.length ? 'disabled' : ''" class="dropdown-btn"
              @click="toggleDropdown(idx)">
        <div class="dropdown-btn-title">{{ filter.currentTitle }}</div>
        <div class="dropdown-btn-arrow">
          <svg
            :class="filter.isShown ? 'active' : ''"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9l-7 6.5L5 9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>

      <transition name="fade">
        <div v-show="filter.isShown" class="dropdown-list">
          <div v-for="(value, index) of filter.list" :key="index" class="checkbox-default">
            <input
              ref="checkbox"
              @input="onSelectFilter($event, idx, filter.list[index])"
              type="checkbox"
              :name="`checkbox[${idx}][${index}]`"
              :id="`checkbox[${idx}][${index}]`"
              class="checkbox-default-input"
            />
            <label class="checkbox-default-label" :for="`checkbox[${idx}][${index}]`">
                  <span class="checkbox-icon">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 4L3 6.5L7.5 1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
              <span class="checkbox-title">{{ value }}</span>
            </label>
          </div>
        </div>
      </transition>
    </div>

    <button @click="filterClear" :class="searchValue.length || !filtration ? 'disabled' : ''" class="btn-delete">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6113 3.46094H15.9199V2.8457C15.9199 1.82798 15.0919 1 14.0742 1H10.3828C9.36509 1 8.53711 1.82798 8.53711 2.8457V3.46094H4.8457C3.82798 3.46094 3 4.28892 3 5.30664V6.53711C3 6.87688 3.27546 7.15234 3.61523 7.15234H4.27899L5.36127 20.3161C5.36139 20.3179 5.36156 20.3196 5.36172 20.3214C5.44876 21.2784 6.239 22 7.19984 22H17.2572C18.218 22 19.0082 21.2784 19.0953 20.3214C19.0954 20.3196 19.0956 20.3179 19.0957 20.3161L20.178 7.15234H20.8418C21.1816 7.15234 21.457 6.87688 21.457 6.53711V5.30664C21.457 4.28892 20.629 3.46094 19.6113 3.46094ZM9.76758 2.8457C9.76758 2.50646 10.0436 2.23047 10.3828 2.23047H14.0742C14.4135 2.23047 14.6895 2.50646 14.6895 2.8457V3.46094H9.76758V2.8457ZM17.8697 20.212C17.8398 20.53 17.5767 20.7695 17.2572 20.7695H7.19984C6.88024 20.7695 6.61725 20.53 6.58731 20.212L5.5136 7.15234H18.9434L17.8697 20.212ZM20.2266 5.92188H19.6113H4.8457H4.23047V5.30664C4.23047 4.9674 4.50646 4.69141 4.8457 4.69141H9.15234H15.3047H19.6113C19.9506 4.69141 20.2266 4.9674 20.2266 5.30664V5.92188Z"
        />
      </svg>
    </button>
  </div>
</template>


<script>
/*TODO
 [x] 1. если ввести в поиск ааб, то остаётся пагинатор с одной страницей
 [x] 2. обновлять viewed отфильтрованного списка
 [x] 3. если очистить все чекбоксы, то некорректно отображается список
 [ ] 4. настроить title для дропдауна — если выбран один, то отображать какой,
        если несколько, то в таком виде `Выбрано: ${checked.length}`
 [x] 5. если очищать фильтр при открытом дропдауне, то галочка остаётся
 [x] 6. переименовать событие onFilterSearch
 */
export default {
  name: "GroupFilter",

  data() {
    return {
      filters: {
        core: { title: "Тип жилы", currentTitle: "", class: "filter-nav-core", isShown: false, list: [] },
        insulation: { title: "Изоляция", currentTitle: "", class: "filter-nav-isolation", isShown: false, list: [] },
        execution: { title: "Исполнение", currentTitle: "", class: "filter-nav-execution", isShown: false, list: [] },
        protect: { title: "Защитный покров", currentTitle: "", class: "filter-nav-cover", isShown: false, list: [] }
      },
      searchValue: "",
      searchFocused: false,
      filtration: false,
      inputsChecked: []
    };
  },

  created() {
    for (const filter in this.filters) {
      this.filters[filter].currentTitle = this.filters[filter].title;
    }
  },

  mounted() {
    for (const group of this.groups) {
      if (!this.filters.core.list.includes(group.values.core)) {
        this.filters.core.list.push(group.values.core);
      }
      if (!this.filters.insulation.list.includes(group.values.insulation)) {
        this.filters.insulation.list.push(group.values.insulation);
      }
      if (!this.filters.execution.list.includes(group.values.execution)) {
        this.filters.execution.list.push(group.values.execution);
      }
      if (!this.filters.protect.list.includes(group.values.protect)) {
        this.filters.protect.list.push(group.values.protect);
      }
    }

    document.addEventListener("click", (evt) => {
      if (evt.target.closest([".dropdown-default"])) return;
      this.closeDropdowns();
    });
  },

  methods: {
    onSelectFilter(evt, idx, value) {
      const filteredList = [];
      const groupsValues = this.groups.map(item => Object.values(item.values));

      if (evt.target.checked) {
        this.inputsChecked.push(value);
      } else {
        this.inputsChecked.forEach((item, i) => {
          if (item == value) {
            this.inputsChecked.splice(i, 1);
          }
        });
      }

      this.setTitle();

      if (this.inputsChecked.length) {
        this.filtration = true;
      } else {
        this.filtration = false;
      }

      groupsValues.forEach((values, i) => {
        this.inputsChecked.forEach(input => {
          if (values.includes(input)) {
            filteredList.push(this.groups[i]);
          }
        });
      });

      this.$bus.emit("onGroupFilter", (filteredList.length ? filteredList : this.groups));
    },

    setTitle() {
      const checked = {
        core: [],
        insulation: [],
        execution: [],
        protect: []
      };

      for (const filter in this.filters) {
        this.inputsChecked.forEach(item => {
          if (this.filters[filter].list.includes(item)) {
            checked[filter].push(item);
          }
        });
      }

      for (const filter in checked) {
        if (checked[filter].length == 0) {
          this.filters[filter].currentTitle = this.filters[filter].title;
        } else if (checked[filter].length == 1) {
          this.filters[filter].currentTitle = checked[filter][0];
        } else {
          this.filters[filter].currentTitle = `Выбрано: ${checked[filter].length}`;
        }
      }
    },

    filterClear() {
      this.$refs.checkbox.forEach(el => el.checked = false);
      this.inputsChecked.length = 0;
      this.filtration = false;
      this.setTitle();
      this.$bus.emit("onGroupFilter", this.groups);
    },

    closeDropdowns(type) {
      Object.values(this.filters).forEach((item) => {
        if (!type || type && !this.filters[type].isShown) {
          item.isShown = false;
        }
      });
    },

    toggleDropdown(type) {
      this.closeDropdowns(type);
      this.filters[type].isShown
        ? this.filters[type].isShown = false
        : this.filters[type].isShown = true;
    },

    clearSearch() {
      this.searchValue = "";
    }
  },

  computed: {
    groups() {
      return this.$store.getters["list/getList"];
    }
  },

  watch: {
    searchValue(val) {
      if (!val.length) {
        this.$bus.emit("onGroupFilter", this.groups);
      }

      if (!/^[a-zA-Zа-яА-я0-9]+$/.test(val)) return;

      this.filterClear();
      const filteredList = this.groups.filter(({ name }) => name.toLowerCase().includes(val));
      this.$bus.emit("onGroupFilter", filteredList);
      this.$store.dispatch("list/updateDisplayedList", filteredList);
    }

  }
};
</script>
