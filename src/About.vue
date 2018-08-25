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
            <h2>
                What is biodiversity ?
            </h2>
            <p>Biodiversity is short for biological diversity. It describes the variety and diversity of all life on land, in fresh water and in the sea, including the places or ecosystems where they live and the genes they contain.</p>
        </div>
        <div class="action-hint quick">Click &amp; drag to explore.</div>
        <div class="action-hint-for-touch">Swipe to explore.</div>
    
        <!-- Swiper -->
        <div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-wp8-horizontal initialized" id="about" style="cursor: grab;">
            <div class="swiper-wrapper">
                <div class="swiper-slide media swiper-slide-active">
                    <video loop="" muted="muted" autoplay="autoplay" preload="">
                                <source src="/static/assets/video/madagascar.mp4" type="video/mp4">
                            </video>
                </div>
                <div class="swiper-slide swiper-slide-next">
                    <h2>What is biodiversity ?</h2>
                    <p class="big-text">
                        Our biodiversity provides the life supporting systems that enable all organisms, including humans, to survive. The important resources and services, such as clean air and water, fertile soils, pollution and flood control provided by biodiversity underpins
                        our economic and social sustainability.
                    </p>
                    <p>
                        When we talk about biodiversity we generally think about the individual birds, plants, fish, insects and other species that are special to Madagascar - our indigenous biodiversity. There are many examples, such as vanilla, baobab, and ravenala and so
                        on and so forth. We also think of our distinctive ecosystems (the interacting system of the living species and non-living parts such as air, nutrients and water) such as forests, sand dunes and lakes.
                    </p>
                    <div class="action-hint">Scroll to explore.</div>
                    <div class="action-hint-for-touch">Scroll to explore.</div>
                </div>
            </div>
        </div>
        <div class="four spacing"></div>
        <div class="full no-right">
            <div class="text-block-right">
                <h2>Biodiversity and Climat change</h2>
                <p class="big-text">
                    Climate change will inevitably impact on biodiversity.
                </p>
                <p>
                    A number of biological changes have already been observed globally including shifts in the range of some species, and earlier timing of leaf-unfolding, bird migration, and egg-laying in some species. Other effects may include changes to marine and land
                    ecosystem productivity, and disruption of freshwater ecosystems due to warmer water and lower flows in rivers and streams. Threats to biodiversity in New Zealand may arise from the establishment and expansion of invasive pests and weeds
                    under climate change. Biodiversity can also help provide stability and resilience as we adapt to the fluctuations and disturbances brought about by climate change.
                </p>
                <div class="four spacing"></div>
                <div id="process-hint">
                    <div class="action-hint">Click &amp; drag to explore.</div>
                    <div class="action-hint-for-touch">Swipe to explore.</div>
                </div>
            </div>  
        </div>
        <div class="full">
            <div class="swiper-container swiper-container-fade swiper-container-horizontal swiper-container-wp8-horizontal initialized" id="office-images">
                <div class="swiper-wrapper" style="transition-duration: 300ms;">
                    <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-8.jpg" alt="">
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="0" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(-1360px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-1.jpg" alt="">
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="1" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(-2720px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-2.jpg" alt="">
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="2" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(-4080px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-3.jpg" alt="">
                    </div>
                    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="3" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(-5440px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-4.jpg" alt="">
                    </div>
                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="4" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(-6800px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-5.jpg" alt="">
                    </div>
                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="5" style="width: 1360px; transition-duration: 300ms; opacity: 0; transform: translate3d(-8160px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-6.jpg" alt="">
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="6" style="width: 1360px; transition-duration: 300ms; opacity: 0; transform: translate3d(-9520px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-7.jpg" alt="">
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="7" style="width: 1360px; transition-duration: 300ms; opacity: 0; transform: translate3d(-10880px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-8.jpg" alt="">
                    </div>
                    <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 1360px; transition-duration: 300ms; opacity: 0; transform: translate3d(-12240px, 0px, 0px);">
                        <img src="/static/assets/img/slide-full-1.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-arrows">
                <div class="swiper-button-next office"></div>
                <div class="swiper-button-prev office"></div>
            </div>
        </div>
        <div class="full">
            <div class="large-6 columns">
                <div class="contact-block-bottom">
                    <h3>Join us.</h3>
                    <p class="big-text">
                        We are searching for young and old volunteers. People who has passion to save and protect the world.
                    </p>
                    <div class="two spacing"></div>
                    <p class="contact-email">
                        <em>Write us at</em>
                        <a href="mailto:jobs@aoko.com" title="Write to us">nyandrianinamamy@lmit.fr</a>
                        <em>or</em>
                        <a href="mailto:jobs@aoko.com" title="Write to us">nyhara@lmit.fr</a>
                    </p>
                </div>
            </div>
            <div class="large-6 columns">
                <div class="contact-block-bottom dark">
                    <h3 class="colored-title">Quote of the day</h3>
                    <p class="big-text">« If we pollute the air, water and soil that keep us alive and well, and destroy the biodiversity that allows natural systems to function, no amount of money will save us »</p>
                    <div class="two spacing"></div>
                    <p class="contact-email">
                        <em>David Suzuki</em>
                    </p>
                    <div class="two spacing"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            new Swiper('#process', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 1000,
                grabCursor: true,
                mousewheel: false,
                freeMode: true,
                slidesOffsetAfter: 100,
                navigation: {
                    nextEl: '.swiper-button-next.process',
                    prevEl: '.swiper-button-prev.process',
                },
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
                    800: {
    
                    }
                }
            });
            new Swiper('#office-images', {
                slidesPerView: 'auto',
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next.office',
                    prevEl: '.swiper-button-prev.office',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                on: {
                    init: function() {
                        jQuery(this.$el).addClass('initialized');
                    }
                }
            });
            new Swiper('#about', {
                slidesPerView: 'auto',
                slidesOffsetAfter: 600,
                speed: 2000,
                freeMode: true,
                // mousewheel: true,
                // mousewheel: {
                //   releaseOnEdges: true
                // },
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
                        slidesOffsetAfter: 450
                    },
                    1024: {
                        slidesOffsetAfter: 500
                    },
                    900: {
                        slidesOffsetAfter: 400
                    },
    
                    800: {
                        slidesOffsetAfter: 100
                    }
                }
            });
            new Swiper('#members', {
                slidesPerView: "3",
                spaceBetween: 40,
                speed: 1000,
                grabCursor: true,
                // freeMode: true,
                slidesPerGroup: 2,
                mousewheel: false,
                // loop: true,
                navigation: {
                    nextEl: '.swiper-button-next.members',
                    prevEl: '.swiper-button-prev.members',
                },
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
                    1200: {
                        slidesPerView: 2,
                        slidesPerGroup: 1
                    },
    
                    800: {
                        slidesPerView: 2,
                        slidesPerGroup: 1
                    },
    
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    }
                }
            });
    
        }
    }
</script>

