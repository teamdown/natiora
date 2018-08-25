<template>
    <div id="app" class="main-container swiper-body">
        <div id="logo"><a href="http://html.blahlab.com/concis/index.html"><h1><img src="/static/assets/img/logo.png" alt=""></h1></a></div>
        <div id="menu-wrapper">
        <div id="menu-controller">
            <div id="menu-icon">
            <div id="menu-icon-stack">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="menu-icon-close">
                <span></span>
                <span></span>
            </div>
            </div>
            <div id="menu-caption">
            <span id="menu-caption-open">
                menu
            </span>
            <span id="menu-caption-close">
                close
            </span>
            </div>
        </div>
        <div id="menu-content">
            <nav id="main-menu">
            <ul>
                <li><a href="http://html.blahlab.com/concis/index.html">Home</a></li>
                <li><a href="http://html.blahlab.com/concis/about.html">About</a></li>
                <li><a href="http://html.blahlab.com/concis/services.html">Services</a></li>
                <li>
                <a href="http://html.blahlab.com/concis/cases.html">Cases</a>
                <ul>
                    <li><a href="http://html.blahlab.com/concis/case-study.html">Case study</a></li>
                    <li><a href="http://html.blahlab.com/concis/case-study-2.html">Case study 2</a></li>
                </ul>
                </li>
                <li><a href="http://html.blahlab.com/concis/blog.html">Blog</a></li>
                <li><a href="http://html.blahlab.com/concis/contact.html">Contact</a></li>
            </ul>
            </nav>
            <div id="contact-info">
            <p>
                120 K St, Second Floor <br>
                Sacramento <br>
                CA 95814
            </p>
            <p><a href="http://html.blahlab.com/concis/916.921.9278">916.921.9278</a></p>
            <p><a href="mailto:business@concis.com" title="business email">business@concis.com</a></p>
            </div>
            <div id="socials">
            <ul>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            </ul>
            </div>
            <p id="copyright">
            All rights reserved 2018 © concis
            </p>
        </div>
        <div id="bg-primary" class=""></div>
        <div id="bg-secondary"></div>
        </div>
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
        Passionate souls.
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Neque, repellat! Debitis fuga aut vitae dolore, consequuntur 
    necessitatibus, quia voluptates architecto nesciunt doloremque.</p>
        </div>
        <div class="action-hint quick">Click &amp; drag to explore.</div>
        <div class="action-hint-for-touch">Swipe to explore.</div>

        <!-- Swiper -->
        <div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-wp8-horizontal initialized" id="about" style="cursor: grab;">
        <div class="swiper-wrapper">
            <div class="swiper-slide media swiper-slide-active">
            <video loop="" muted="muted" autoplay="autoplay" preload="">
                <source src="/static/assets/video/about.mp4" type="video/mp4">
            </video>
            </div>
            <div class="swiper-slide swiper-slide-next">
            <h2>We are different.</h2>
            <p class="big-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Voluptatum quo iste eaque inventore voluptatibus esse ratione, cum quos 
    hic adipisci vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Voluptatum quo iste eaque inventore voluptatibus esse ratione, cum quos 
    hic adipisci vitae expedita recusandae temporibus tenetur, nulla est 
    maxime corporis perspiciatis.
            </p>
            <div class="action-hint">Scroll to explore.</div>
            <div class="action-hint-for-touch">Scroll to explore.</div>
            </div>
        </div>
        </div>
        <div class="four spacing"></div>
        <div class="full">
        <h2>We are experts.</h2>
        <div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal initialized" id="members" style="cursor: grab;">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
            <div class="swiper-slide swiper-slide-active" style="width: 426.667px; margin-right: 40px;">
                <img src="/static/assets/img/member-1.png" alt="">
                <div class="member-desc">
                <h3>Stone Wayne</h3>
                <p>Founder</p>
                </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style="width: 426.667px; margin-right: 40px;">
                <img src="/static/assets/img/member-2.png" alt="">
                <div class="member-desc">
                <div class="member-dec">
                    <h3>Zoo Jebari</h3>
                    <p>Designer</p>
                </div>
                </div>
            </div>
            <div class="swiper-slide" style="width: 426.667px; margin-right: 40px;">
                <img src="/static/assets/img/member-3.png" alt="">
                <div class="member-desc">
                <h3>Jone Bucan</h3>
                <p>Developer</p>
                </div>
            </div>
            <div class="swiper-slide" style="width: 426.667px; margin-right: 40px;">
                <img src="/static/assets/img/member-4.png" alt="">
                <div class="member-desc">
                <h3>Clare Watson</h3>
                <p>Project Manager</p>
                </div>
            </div>
            <div class="swiper-slide" style="width: 426.667px; margin-right: 40px;">
                <img src="/static/assets/img/member-5.png" alt="">
                <div class="member-desc">
                <h3>Tom Hason</h3>
                <p>Creative Derector</p>
                </div>
            </div>
            </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-arrows">
            <div class="swiper-button-next members"></div>
            <div class="swiper-button-prev members swiper-button-disabled"></div>
        </div>
        </div>
        <div class="full no-right">
        <div class="text-block-right">
            <h2>How we work.</h2>
            <p class="big-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
    natus possimus, perferendis tempora ratione dolore, maiores ea culpa 
    optio animi deleniti. Quis quos cum illo quod sapiente dolorum, eveniet 
    praesentium.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Blanditiis, culpa iste voluptas. Earum quod a impedit tempora eius 
    voluptatum, hic quas sit quis unde quae mollitia totam harum eum, 
    asperiores.
            </p>
            <div class="four spacing"></div>
            <div id="process-hint">
            <div class="action-hint">Click &amp; drag to explore.</div>
            <div class="action-hint-for-touch">Swipe to explore.</div>
            </div>
        </div>
        <div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-wp8-horizontal initialized" id="process" style="cursor: grab;">
            <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active">
                <h3>01. Research</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Delectus incidunt voluptas odio, quis ex aliquam quas voluptates rem, 
    facere, accusantium, molestiae nemo dolores obcaecati pariatur soluta 
    porro asperiores neque unde.</p>
            </div>
            <div class="swiper-slide swiper-slide-next">
                <h3>02. Strategy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Et necessitatibus ducimus, expedita inventore sit commodi, in 
    perferendis voluptatibus consequuntur dolorem possimus architecto 
    provident fugiat esse? Quibusdam incidunt consequuntur vel asperiores!
                </p>
            </div>
            <div class="swiper-slide">
                <h3>03. Creative</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusantium quia sed suscipit, doloremque non laboriosam, laudantium. 
    Cupiditate molestias reprehenderit eaque officiis obcaecati, placeat 
    quam corporis animi facilis, voluptate qui veniam?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quia sed suscipit, doloremque non laboriosam, laudantium.</p>
            </div>
            <div class="swiper-slide">
                <h3>04. Production</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Praesentium illum expedita culpa nihil veniam at nostrum laborum ullam,
    laboriosam assumenda impedit repellat itaque autem voluptatibus tempora
    accusantium nisi, molestias, voluptatum.</p>
            </div>
            <div class="swiper-slide">
                <h3>05. Launch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Illum pariatur, accusantium laborum sapiente quae sit obcaecati in 
    nulla rerum unde molestiae hic eligendi nihil velit magnam ut tenetur, 
    similique molestias. Cupiditate molestias reprehenderit eaque officiis 
    obcaecati, placeat quam corporis animi facilis, voluptate qui veniam?</p>
            </div>
            <div class="swiper-slide">
                <h3>06. Maintaining</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Illum pariatur, accusantium laborum sapiente quae sit obcaecati in 
    nulla rerum unde molestiae hic eligendi nihil velit magnam ut tenetur, 
    similique molestias.</p>
            </div>
            </div>
        </div>
        </div>
        <div class="full">
        <div class="swiper-container swiper-container-fade swiper-container-horizontal swiper-container-wp8-horizontal initialized" id="office-images">
            <div class="swiper-wrapper" style="transition-duration: 300ms;"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style="width: 1360px; transition-duration: 300ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
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
            </div></div>
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-arrows">
            <div class="swiper-button-next office"></div>
            <div class="swiper-button-prev office"></div>
        </div>
        </div>
        <div class="full">
        <div class="large-7 columns">
            <h2>Our clients.</h2>
            <p class="big-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Totam animi nihil dolorem et, culpa, sed sapiente sequi explicabo hic 
    cumque quod, eos inventore id. Aperiam accusamus id incidunt nihil nisi.
            </p>
        </div>
        <div class="two spacing"></div>
        <div class="clients">
            <div class="large-2 medium-3 small-6 columns">
                <div class="client client-bg">
                <img alt="" src="/static/assets/img/client-1.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-2.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-3.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-4.png">
                </div>
            </div>

            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-5.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-6.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-6.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-5.png">
                </div>
            </div>

            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-4.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-3.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-2.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-1.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-3.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-4.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-1.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-6.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-1.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-6.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client client-bg">
                <img alt="" src="/static/assets/img/client-1.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-2.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-3.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-4.png">
                </div>
            </div>

            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-5.png">
                </div>
            </div>
            <div class="large-2 medium-3 small-6 columns">
                <div class="client">
                <img alt="" src="/static/assets/img/client-6.png">
                </div>
            </div>
        </div>
        </div>
        <div class="full no-right">
        <div class="text-block-right">
            <h2>What our clients say.</h2>
            <div class="testimonials">
            <blockquote class="big-text">
                "Lorem ipsum dolor sit amet, perferendis tempora ratione 
    dolore, maiores ea culpa optio animi deleniti. Quis quos cum illo quod 
    sapiente dolorum, eveniet praesentium."
            </blockquote>
            <p>- Name, position</p>
            <blockquote class="big-text">
                "Amet natus possimus, perferendis tempora ratione dolore, 
    maiores ea culpa optio animi deleniti. Quis quos cum illo quod sapiente 
    dolorum, eveniet praesentium."
            </blockquote>
            <p>- Name, position</p>
            <blockquote class="big-text">
                "Quis quos cum illo quod sapiente dolorum, eveniet praesentium."
            </blockquote>
            <p>- Name, position</p>
            </div>

        </div>

        </div>
        <div class="full">
        <div class="large-6 columns">
            <div class="contact-block-bottom">
            <h3>Join us.</h3>
            <p class="big-text">
                We are hiring young and old talents. People who has passion to share ideas and relize awosome works with us.
            </p>
            <div class="two spacing"></div>
            <p class="contact-email">
                <em>Write us at</em>
                <a href="mailto:jobs@aoko.com" title="Write to us">jobs@aoko.com</a>
            </p>
            </div>
        </div>
        <div class="large-6 columns">
            <div class="contact-block-bottom dark">
            <h3 class="colored-title">Get a quote.</h3>
            <p class="big-text">No matter if you are a super big agency, a
    fresh start-up, a very small studio or just someone with an idea or an 
    unfinished idea about a project. You should send us an email.</p>
            <div class="two spacing"></div>
            <p class="contact-email">
                <em>Contact us at</em>
                <a href="mailto:business@aoko.com" title="Write to us">business@aoko.com</a>
            </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

