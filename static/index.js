$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

$(document).ready( function () {
    $("#second").animateCss('fadeIn').css('display', 'inline-block')
    $(".rows").animateCss('fadeIn').css('display', 'flex')
    $("#first").css('display', 'block')
})

setTimeout(loop, 7000)

function shakeImage() {
    $("img").eq(Math.floor(Math.random() * 2)).animateCss("jello")
}

function loop() {
    var rand = Math.round(Math.random() * (2500)) + 2500;
    setTimeout(function() {
            shakeImage();
            loop();  
    }, rand);
};