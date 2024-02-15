$(document).ready(function() {
  $(".audio_button").on("click", function () {
      var audio = $("#audio")[0]; // jQueryを使用してオーディオ要素を取得します
      if (audio.paused) {
          audio.play();
          $(this).toggleClass("stop");
      } else {
          audio.pause();
          $(this).toggleClass("stop");
      }
  });
});
