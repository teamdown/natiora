<template>
      <div id="menu-wrapper" class="close-menu">
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
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="about">About</router-link></li>
              <li><router-link to="blog">Blog</router-link></li>
            </ul>
          </nav>
          <div id="contact-info">
            <p>
              Immeuble Master Trade Route du Pape,<br>
              BP 8515. <br>
              Morarano 101
            </p>
            <p><a href="#">(+261) 34 29 169 01</a></p>
            <p><a href="mailto:nyandrianinamamy@lmit.fr" title="business email">nyandrianinamamy@lmit.fr</a></p>
            <p><a href="mailto:nyhara@lmit.fr" title="business email">nyhara@lmit.fr</a></p>
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
            All rights reserved 2018 © Razafintsialonina Mamy & Randriantsarafara Ny Hasinavalona
          </p>
        </div>
        <div id="bg-primary" class=""></div>
        <div id="bg-secondary"></div>
      </div>
</template>
<script>
export default {
        mounted() {
          $('#menu-controller').on('click', function() {
            var wrapper = $(this).closest('#menu-wrapper');

            if ( $(wrapper).hasClass('open-menu') ) {
            $("#menu-wrapper").removeClass('open-menu').addClass('close-menu');
            } else {
            $("#menu-wrapper").removeClass('close-menu').addClass('open-menu');
            }
            });
        }
}
</script>

