

(function ($) {
  "use strict";
  var header = $('.sticky-bar');
  var $window = $(window);
  $window.on('scroll', function() {
      var scroll = $window.scrollTop();
      if (scroll < 200) {
          header.removeClass('stick');
      } else {
          header.addClass('stick');
      }
  });
 // QuickInfo 
  function quickInfo() {
      var searchTrigger = $('.header-aside-button'),
          endTriggersearch = $('.aside-close'),
          container = $('.header-aside-active');
      searchTrigger.on('click', function(e) {
          e.preventDefault();
          container.addClass('inside');
      });
      endTriggersearch.on('click', function() {
          container.removeClass('inside');
      });
  };
  quickInfo();
// aside menu
  var $offCanvasNav = $('.mobile-menu'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();
  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
      var $this = $(this);
      if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
          e.preventDefault();
          if ($this.siblings('ul:visible').length) {
              $this.parent('li').removeClass('active');
              $this.siblings('ul').slideUp();
          } else {
              $this.parent('li').addClass('active');
              $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
              $this.closest('li').siblings('li').find('ul:visible').slideUp();
              $this.siblings('ul').slideDown();
          }
      }
  });

//Acoordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
  
})(jQuery);    
  

  