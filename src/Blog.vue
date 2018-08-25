<template>
    <div id="app" class="main-container">
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
            <h2>
                Our blog
            </h2>
            <p>This is an open access digital library for biodiversity literature and archives. It brings together a natural and botanical history, with the purpose of denumerizing and making accessible collections as part of a "common biodiversity".</p>
        </div>
        <div class="action-hint quick">Scroll or drag to explore.</div>
        <div class="action-hint-for-touch">Swipe to explore.</div>
    
        <!-- Swiper -->
        <div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal initialized" id="posts" style="cursor: grab;">
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide sticky swiper-slide-active">
                    <img src="/static/assets/img/blog-1.png" alt="">
                    <div class="post-intro">
                        <h3>
                            <router-link to="single">How biodiversity keeps Earth alive ?</router-link>
                        </h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                            <span>
                                    <a href="#">Comments 2</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
    
                    </div>
                </div>
                <div class="swiper-slide swiper-slide-next">
                    <img src="/static/assets/img/blog-2.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">Ocean acidification is having major impact ?</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/static/assets/img/blog-3.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">Earth at risk of heading towards ‘hothouse Earth’ state</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/static/assets/img/blog-4.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">Bird feared extinct rediscovered ikn the Bahamas</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                            <span>
                                    <a href="#">Comments 2</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/static/assets/img/blog-5.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">Reasons for massive fires in south-central Chile</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                            <span>
                                    <a href="#">Comments 2</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/static/assets/img/blog-6.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">Bees need it colorful</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                            <span>
                                    <a href="#">Comments 2</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/static/assets/img/blog-7.png" alt="">
                    <div class="post-intro">
                        <h3><router-link to="single">To float or not to float ? Mystery solved as to why algae balls float and sink</router-link></h3>
                        <p class="info">
                            <span>
                                    By Ny Hasinavalona
                                </span>
                            <span>25/08/2018</span>
                            <span>
                                    In
                                    <a href="#">His personal blog</a>
                                </span>
                            <span>
                                    <a href="#">Comments 2</a>
                                </span>
                        </p>
                        <div class="two spacing"></div>
                        <p class="read-more-button">
                            <router-link to="single" class="button boxed small black">Read more</router-link>
                        </p>
                    </div>
                </div>
                <div class="swiper-slide" id="load-more">
                    <p><a href="#">Load more...</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            new Swiper('#posts', {
                slidesPerView: 'auto',
                slidesOffsetAfter: 600,
                speed: 700,
                slidesPerGroup: 2,
                // freeMode: true,
                mousewheel: true,
                grabCursor: true,
                on: {
                    init: function() {
                        jQuery(this.$el).addClass('initialized');
                    },
                    transitionEnd: function() {
                        if (this.isEnd) {
                            jQuery('body').addClass('swiper-end');
                        }
    
                        if (this.isBeginning || this.isEnd) {
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
    
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 2,
                        slidesPerGroup: 1
    
                    },
                    900: {
                        slidesPerGroup: 1,
                        slidesPerView: 2,
                        slidesOffsetAfter: 500
                    },
    
                    800: {
                        slidesOffsetAfter: 0,
                        slidesPerGroup: 1,
                        slidesPerView: 2
                    },
    
    
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        slidesOffsetAfter: 0,
                        speed: 1500
                    }
    
                }
            });
        }
    }
</script>
