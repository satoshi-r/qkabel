<template>
  <div class="catalog container content-items">
    <h1 class="content-title">{{ title }}</h1>
    <div class="main-wrapper">
      <div class="table table-1">
        <div class="filter-nav">
          <div class="filter-search">
            <input type="text" name="filter-search" id="filter-search" />
            <label for="filter-search" class="filter-search-label">
              <span class="filter-search-placeholder">Наименование</span>
              <svg
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
            <button class="filter-search-clear">
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
          </div>

          <div class="dropdown-default filter-nav-core">
            <button class="dropdown-btn">
              <div class="dropdown-btn-title">Тип жилы</div>
              <div class="dropdown-btn-arrow">
                <svg
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

            <div class="dropdown-list">
              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-aluminum"
                  id="checkbox-aluminum"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-aluminum">
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
                  <span class="checkbox-title">Алюминиевая</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-steel"
                  id="checkbox-steel"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-steel">
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
                  <span class="checkbox-title">Стальная</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-copper"
                  id="checkbox-copper"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-copper">
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
                  <span class="checkbox-title">Медная</span>
                </label>
              </div>
            </div>
          </div>

          <div class="dropdown-default filter-nav-isolation">
            <button class="dropdown-btn">
              <div class="dropdown-btn-title">Изоляция</div>
              <div class="dropdown-btn-arrow">
                <svg
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

            <div class="dropdown-list">
              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-cl-polyethylene"
                  id="checkbox-cl-polyethylene"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-cl-polyethylene"
                >
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
                  <span class="checkbox-title">Из сшитого полиэтилена</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-pvc"
                  id="checkbox-pvc"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-pvc">
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
                  <span class="checkbox-title">ПВХ</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-polyethylene"
                  id="checkbox-polyethylene"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-polyethylene"
                >
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
                  <span class="checkbox-title">Полиэтиленовая</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-rubber"
                  id="checkbox-rubber"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-rubber">
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
                  <span class="checkbox-title">Резиновая</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-paper"
                  id="checkbox-paper"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-paper">
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
                  <span class="checkbox-title">Бумажная</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-plastic"
                  id="checkbox-plastic"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-plastic">
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
                  <span class="checkbox-title">Пластмассовая</span>
                </label>
              </div>
            </div>
          </div>

          <div class="dropdown-default filter-nav-execution">
            <button class="dropdown-btn">
              <div class="dropdown-btn-title">Исполнение</div>
              <div class="dropdown-btn-arrow">
                <svg
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

            <div class="dropdown-list">
              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-armored"
                  id="checkbox-armored"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-armored">
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
                  <span class="checkbox-title">Бронированные</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-trickle-wires"
                  id="checkbox-trickle-wires"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-trickle-wires"
                >
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
                  <span class="checkbox-title">Провода лудящиеся</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-heat-resistant"
                  id="checkbox-heat-resistant"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-heat-resistant"
                >
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
                  <span class="checkbox-title">Термостойкие</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-round"
                  id="checkbox-round"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-round">
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
                  <span class="checkbox-title">Круглые</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-wearproof"
                  id="checkbox-wearproof"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-wearproof">
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
                  <span class="checkbox-title">Износостойкие</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-tropical"
                  id="checkbox-tropical"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-tropical">
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
                  <span class="checkbox-title">Тропические</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-heating"
                  id="checkbox-heating"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-heating">
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
                  <span class="checkbox-title">Нагревательные</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-frost-resistant"
                  id="checkbox-frost-resistant"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-frost-resistant"
                >
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
                  <span class="checkbox-title">Морозостойкие</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-tinned"
                  id="checkbox-tinned"
                  class="checkbox-default-input"
                />
                <label class="checkbox-default-label" for="checkbox-tinned">
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
                  <span class="checkbox-title">Луженые</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-halogen-free"
                  id="checkbox-halogen-free"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-halogen-free"
                >
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
                  <span class="checkbox-title">С отсутствием галогена</span>
                </label>
              </div>
            </div>
          </div>

          <div class="dropdown-default filter-nav-cover">
            <button class="dropdown-btn">
              <div class="dropdown-btn-title">Защитный покров</div>
              <div class="dropdown-btn-arrow">
                <svg
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

            <div class="dropdown-list">
              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-without-cover"
                  id="checkbox-without-cover"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-without-cover"
                >
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
                  <span class="checkbox-title">Без защитного покрова</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-without-outer-cover"
                  id="checkbox-without-outer-cover"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-without-outer-cover"
                >
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
                  <span class="checkbox-title">Без наружного покрова</span>
                </label>
              </div>

              <div class="checkbox-default">
                <input
                  type="checkbox"
                  name="checkbox-with-outer-cover"
                  id="checkbox-with-outer-cover"
                  class="checkbox-default-input"
                />
                <label
                  class="checkbox-default-label"
                  for="checkbox-with-outer-cover"
                >
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
                  <span class="checkbox-title">С наружным покровом</span>
                </label>
              </div>
            </div>
          </div>

          <button class="btn-delete disable">
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
            <div class="item-isolation">{{ group.values.execution }}</div>
            <div class="item-execution">{{ group.values.insulation }}</div>
            <div class="item-cover">{{ group.values.protect }}</div>
          </a>
          <div class="search-notfound">Ничего не найдено</div>
        </div>
      </div>

      <Pagination :list="groups" />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  components: {
    Pagination
  },

  async fetch({ store, params }) {
    await store.dispatch("list/fetch", params);
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
