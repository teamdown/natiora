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

