$(document).ready(function()
{
   $('#wb_Name2').addClass('visibility-hidden');
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#intro']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#intro').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#about']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#about').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#Layer2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#Layer2').offset().top-50 }, 600, 'easeInQuad');
   });
   function LayoutGrid1Scroll()
   {
      var $obj = $("#wb_LayoutGrid1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimationResume('FontAwesomeIcon1');
         AnimationResume('FontAwesomeIcon2');
         AnimationResume('FontAwesomeIcon3');
         AnimationResume('FontAwesomeIcon4');
         AnimationResume('wb_Heading1');
         AnimationResume('wb_Heading2');
         AnimationResume('wb_Heading3');
         AnimationResume('wb_Heading4');
         AnimationResume('wb_Text1');
         AnimationResume('wb_Text2');
         AnimationResume('wb_Text3');
         AnimationResume('wb_Text4');
      }
   }
   LayoutGrid1Scroll();
   $(window).scroll(function(event)
   {
      LayoutGrid1Scroll();
   });
   $("a[href*='#Layer3']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#Layer3').offset().top-50 }, 600, 'easeInQuad');
   });
   function Name2Scroll()
   {
      var $obj = $("#wb_Name2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name2', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name2').inViewPort(true))
   {
      $('#wb_Name2').addClass("in-viewport");
   }
   Name2Scroll();
   $(window).scroll(function(event)
   {
      Name2Scroll();
   });
   $("a[href*='#Layer4']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#Layer4').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCubic');
   });
});
