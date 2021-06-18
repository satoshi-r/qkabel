<template>
  <div class="catalog container content-items">
    <div class="content-title"></div>
    <div class="main-wrapper">
      <div class="table-wrap">
        <!-- боковой фильтр -->
        <div class="filter">
          <div class="filter-top">
            <div class="filter-title">фильтр</div>
            <button class="filter-clear">Сбросить</button>
          </div>

          <div class="filter-wrap">
            <div class="filter-main">
              <div class="dropdown-filter active">
                <button class="dropdown-filter-btn">
                  <span class="dropdown-title">Количество жил</span>
                  <span class="dropdown-icon"></span>
                </button>

                <div class="dropdown-filter-list">

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-1" id="checkbox-amount-1" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-1">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-2" id="checkbox-amount-2" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-3" id="checkbox-amount-3" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-3">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">3</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-4" id="checkbox-amount-4" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-4">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">4</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-12" id="checkbox-amount-12" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-12">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">12</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-18" id="checkbox-amount-18" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-18">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">18</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-27" id="checkbox-amount-27" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-27">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">27</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-1x4" id="checkbox-amount-1x4"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-1x4">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1x4</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-2x2" id="checkbox-amount-2x2"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-2x2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">2x2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-5x2" id="checkbox-amount-5x2"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-5x2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">5x2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-4x4" id="checkbox-amount-4x4"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-4x4">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">4x4</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-100x2" id="checkbox-amount-100x2"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-100x2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">100x2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-10x2" id="checkbox-amount-10x2"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-10x2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">10x2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-amount-14x4" id="checkbox-amount-14x4"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-amount-14x4">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">14x4</span>
                    </label>
                  </div>

                  <button class="checkbox-btn-more">Показать ещё&nbsp;<span>10</span></button>

                </div>
              </div>

              <div class="dropdown-filter active">
                <button class="dropdown-filter-btn">
                  <span class="dropdown-title">сечение, мм<sup>2</sup></span>
                  <span class="dropdown-icon"></span>
                </button>

                <div class="dropdown-filter-list">

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-008" id="checkbox-cut-008" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-008">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,08</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-2-5" id="checkbox-cut-2-5" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-2-5">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">2,5</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-012" id="checkbox-cut-012" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-012">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,12</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-6" id="checkbox-cut-6" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-6">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">6</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-02" id="checkbox-cut-02" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-02">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-10" id="checkbox-cut-10" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-10">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">10</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-1" id="checkbox-cut-1" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-1">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-1-5" id="checkbox-cut-1-5" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-1-5">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1,5</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-10" id="checkbox-cut-10" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-10">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">10</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-25" id="checkbox-cut-25" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-25">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">25</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-95" id="checkbox-cut-95" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-95">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">95</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-120" id="checkbox-cut-120" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-120">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">120</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-150" id="checkbox-cut-150" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-150">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">150</span>
                    </label>
                  </div>

                  <button class="checkbox-btn-more">Показать ещё&nbsp;<span>10</span></button>

                </div>
              </div>

              <div class="checkbox-default filter-checkbox-alone">
                <input type="checkbox" name="checkbox-additional-veins" id="checkbox-additional-veins"
                       class="checkbox-default-input">
                <label class="checkbox-default-label" for="checkbox-additional-veins">
                        <span class="checkbox-icon">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                  <span class="checkbox-title">Только с доп. жилами</span>
                </label>
              </div>


              <div class="dropdown-filter active">
                <button class="dropdown-filter-btn">
                  <span class="dropdown-title">диаметр жил, мм</span>
                  <span class="dropdown-icon"></span>
                </button>

                <div class="dropdown-filter-list">

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-05" id="checkbox-diameter-05"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-05">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,5</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-2-58_9-4" id="checkbox-diameter-2-58_9-4"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-2-58_9-4">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">2,58/9,4</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-1-2" id="checkbox-diameter-1-2"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-1-2">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1,2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-046" id="checkbox-diameter-046"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-046">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,46</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-09" id="checkbox-diameter-09"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-09">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,9</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-1" id="checkbox-diameter-1"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-1">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-0-48" id="checkbox-diameter-0-48"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-0-48">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,48 (25 AWG)</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-0-52" id="checkbox-diameter-0-52"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-0-52">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,52</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-0-51" id="checkbox-diameter-0-51"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-0-51">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,51</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-1-2_4-6" id="checkbox-diameter-1-2_4-6"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-1-2_4-6">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1,2/4,6</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-2-5" id="checkbox-diameter-2-5"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-2-5">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">2,5</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-0-12" id="checkbox-diameter-0-12"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-0-12">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,12</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-diameter-0-35" id="checkbox-diameter-0-35"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-diameter-0-35">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,35</span>
                    </label>
                  </div>


                  <button class="checkbox-btn-more">Показать ещё&nbsp;<span>10</span></button>
                </div>
              </div>

              <div class="dropdown-filter active">
                <button class="dropdown-filter-btn">
                  <span class="dropdown-title">Вольтаж</span>
                  <span class="dropdown-icon"></span>
                </button>

                <div class="dropdown-filter-list">

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-02" id="checkbox-voltage-02"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-02">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,2</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-03" id="checkbox-voltage-03"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-03">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,3</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-05" id="checkbox-voltage-05"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-05">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,5</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-066" id="checkbox-voltage-066"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-066">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,66</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-066-1" id="checkbox-voltage-066-1"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-066-1">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">0,66/1</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-1" id="checkbox-voltage-1" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-1">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-1,14" id="checkbox-voltage-1,14"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-1,14">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">1,14</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-10" id="checkbox-voltage-10"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-10">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">10</span>
                    </label>
                  </div>

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-voltage-200" id="checkbox-voltage-200"
                           class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-voltage-200">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">200</span>
                    </label>
                  </div>


                  <button class="checkbox-btn-more">Показать ещё&nbsp;<span>10</span></button>
                </div>
              </div>

              <div class="dropdown-filter active">
                <button class="dropdown-filter-btn">
                  <span class="dropdown-title">Сечение экрана</span>
                  <span class="dropdown-icon"></span>
                </button>

                <div class="dropdown-filter-list">

                  <div class="checkbox-default">
                    <input type="checkbox" name="checkbox-cut-16" id="checkbox-cut-16" class="checkbox-default-input">
                    <label class="checkbox-default-label" for="checkbox-cut-16">
                                <span class="checkbox-icon">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4L3 6.5L7.5 1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                      <span class="checkbox-title">16</span>
                    </label>
                  </div>

                  <button class="checkbox-btn-more">Показать ещё&nbsp;<span>10</span></button>
                </div>
              </div>
            </div>
          </div>

        </div>


        <!-- таблица каталог уровень 2 -->
        <div class="table table-2">

          <!-- сортировка -->
          <div class="sort-nav">
            <div class="sort-nav-name">
              <button class="btn-sort active">
                <div class="btn-sort-title">Наименование</div>
                <div class="btn-sort-arrow"></div>
              </button>
            </div>

            <div class="sort-nav-exist">
              <button class="btn-sort">
                <div class="btn-sort-title">Наличие</div>
                <div class="btn-sort-arrow"></div>
              </button>
            </div>

            <div class="sort-nav-price">
              <button class="btn-sort">
                <div class="btn-sort-title">Цена</div>
                <div class="btn-sort-arrow"></div>
              </button>
            </div>

            <div class="sort-nav-amount">
              <div class="sort-nav-amount__title">Кол-во, м</div>
            </div>

          </div>

          <!-- таблица -->
          <div class="table-container">

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">122 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х300+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ААБ2Л 1х240+2х1,5-1</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">9 999 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">SUPRLAN Standard U/UTP Cat.5e 4x2xAWG24 Cu PE Outdoor T-FG8 (с тросом)</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">567 ₽/м</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <a href="product/" class="table-item">
              <div class="item-name">ParLan F/UTP cat 6 4х2х0,57 ZH нг(A)-HF</div>
              <div class="item-exist">
                <ul class="exist-group">
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item fill"></li>
                  <li class="exist-item"></li>
                  <li class="exist-item"></li>
                </ul>
              </div>
              <div class="item-price">По запросу</div>
              <div class="item-amount">
                <div class="item-amount-total"></div>

                <div class="counter">
                  <button class="counter-minus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input type="text" class="counter-input" maxlength="5" value="1">
                  <button class="counter-plus">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m-6-6h12" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="item-cart">
                <button class="item-cart-btn">
                  <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35.5" y=".5" width="35" height="35" rx="3.5" transform="rotate(90 35.5 .5)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.078 14.324a.587.587 0 00-.5-.259H13.246l-1.021-3.39a2.596 2.596 0 00-.373-.785 1.458 1.458 0 00-.5-.46 2.223 2.223 0 00-.462-.182 1.65 1.65 0 00-.393-.048h-2.69a.595.595 0 00-.608.613c0 .102.026.201.078.297a.53.53 0 00.226.22c.098.051.2.077.305.077h2.69c.051 0 .1.006.146.019.046.013.108.067.187.163s.144.24.196.43l3.475 12.45a.69.69 0 00.334.383.574.574 0 00.255.058h8.481a.628.628 0 00.364-.115.57.57 0 00.225-.287l3.004-8.62a.603.603 0 00-.088-.564zm-3.936 8.36h-7.559l-2.002-7.393h12.093l-2.532 7.393zm-1.237 2.452c-.432 0-.802.15-1.11.45-.307.3-.461.66-.461 1.082 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082a1.46 1.46 0 00-.461-1.082c-.308-.3-.677-.45-1.11-.45zm-5.655 0c-.287 0-.553.07-.795.21-.242.14-.431.326-.569.556-.137.23-.206.485-.206.766 0 .421.154.782.461 1.082.308.3.678.45 1.11.45.431 0 .801-.15 1.109-.45.307-.3.461-.66.461-1.082 0-.102-.01-.204-.03-.306a1.337 1.337 0 00-.235-.546 1.67 1.67 0 00-.697-.565 1.43 1.43 0 00-.294-.087 1.747 1.747 0 00-.315-.028z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" transform="translate(7.2 7.2)" d="M0 0h21.6v21.6H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </a>

            <button class="btn-more">
              <div class="btn-more-title">показать еще</div>
              <ul class="btn-more-loader">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </button>

            <div class="pagination-wrap">
              <div class="pagination">
                <a href="" class="pagination-back">
                  <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5.5L2 4l3.5 3.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div>Назад</div>
                </a>
                <div class="pagination-list">
                  <a href="" class="pagination-item active">1</a>
                  <a href="" class="pagination-item">2</a>
                  <a href="" class="pagination-item">3</a>
                </div>
                <a href="" class="pagination-next">
                  <div>Вперед</div>
                  <svg width="8" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.611l3.5-3.5-3.5-3.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>

              <div class="pagination-watched">
                Вы посмотрели 60 из 120 товаров
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
