<template>
    <div id="app" class="main-container swiper-body">
      <app-logo></app-logo>
      <app-header></app-header>
      <div class="lines-wrapper">
        <div class="horizontal-line"></div>
        <div class="oblique-line"></div>
      </div>
      <div class="blue-triangle">
        <img src="/static/assets/img/blue-triangle.png" alt="">
      </div>
      <div class="red-triangle">
        <img src="/static/assets/img/red-triangle.png" alt="">
      </div>
      <div class="site-intro">
        <h2>Madagascar Biodiversity</h2>
        <p>
          Don’t let species go extinct, in this world we are all linked.
        </p>
        <div class="spacing"></div>
      </div>
      <div class="action-hint">Scroll or drag to expore.</div>
      <div class="action-hint-for-touch">Swipe to view Madagascar's Biodiversity.</div>

      <!-- Swiper -->
      <div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal initialized" id="main">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-2560px, 0px, 0px);">
          <div class="swiper-slide type-3" style="width: 640px;">
            <div class="top-section item" id="work-1">
              <div class="work-caption">
                <h3>Moutain</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
            <div class="bottom-section item" id="work-2">
              <div class="work-caption">
                <h3>Morondava</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-1" style="width: 640px;">
            <div class="whole item" id="work-3">
              <div class="work-caption">
                <h3>Lemurs</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-2" style="width: 640px;">
            <div class="top-section item" id="work-4">
              <div class="work-caption">
                <h3>Leaf</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
            <div class="bottom-section item" id="work-5">
              <div class="work-caption">
                <h3>Moutain</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-1 swiper-slide-prev" style="width: 640px;">
            <div class="whole item" id="work-6">
              <div class="work-caption">
                <h3>Coffee</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-4 swiper-slide-active" style="width: 640px;">
            <div class="top-section item" id="work-7">
              <div class="work-caption">
                <h3>Paddy Field</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
            <div class="bottom-section item" id="work-8">
              <div class="work-caption">
                <h3>Corn Field</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-1 swiper-slide-next" style="width: 640px;">
            <div class="whole item" id="work-9">
              <div class="work-caption">
                <h3>Chameleon</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-1" style="width: 640px;">
            <div class="whole item" id="work-10">
              <div class="work-caption">
                <h3>Lemurs</h3>
                <p class="work-client">life&amp;fashion</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-2" style="width: 640px;">
            <div class="top-section item" id="work-11">
              <div class="work-caption">
                <h3>Flower</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
            <div class="bottom-section item" id="work-12">
              <div class="work-caption">
                <h3>Rice</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-1" style="width: 640px;">
            <div class="whole item" id="work-13">
              <div class="work-caption">
                <h3>Moutain</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-2" style="width: 640px;">
            <div class="top-section item" id="work-14">
              <div class="work-caption">
                <h3>Lemurs</h3>
                <p class="work-client"></p>
              </div>
              <a href="#">Unsplash.com</a>
            </div>
            <div class="bottom-section item" id="work-15">
              <div class="work-caption">
                <h3>Rocks</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
          <div class="swiper-slide type-4" style="width: 640px;">
            <div class="top-section item" id="work-16">
              <div class="work-caption">
                <h3>Chameleon</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
            <div class="bottom-section item" id="work-17">
              <div class="work-caption">
                <h3>Corn Field</h3>
                <p class="work-client">Unsplash.com</p>
              </div>
              <a href="#">view more</a>
            </div>
          </div>
        </div>
      </div>
      <div id="call-to-action">
        <h2>Get a look to our biodiversity blog </h2>
        <p>We have a way to get you <router-link to="blog"> there </router-link>.</p>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        new Swiper('#main', {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesOffsetAfter: 1200,
            slidesPerGroup: 2,
            speed: 700,
            mousewheel: {
            releaseOnEdges: true
            },
            on: {
            init: function() {
                jQuery(this.$el).addClass('initialized');
            },
            transitionEnd: function() {
                if ( this.isEnd ) {
                jQuery('body').addClass('swiper-end');
                }

                if ( this.isBeginning || this.isEnd ) {
                jQuery('body').removeClass('swiper-body');
                }
            },
            fromEdge: function() {
                jQuery('body').removeClass('swiper-end');
                jQuery('body').addClass('swiper-body');
            }
            },
            breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesOffsetAfter: 1100
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesOffsetAfter: 1000,
                slidesPerGroup: 1
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesOffsetAfter: 800,
                slidesPerGroup: 1
            },

            800: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesOffsetAfter: 0,
                slidesPerGroup: 1
            }
            }
        });
    }
}
</script>
