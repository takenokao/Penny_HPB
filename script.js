// 音声再生ボタンのクリックイベントの処理
$(function () {
  $(".audio_button").on("click", function () {
      var audio = document.getElementById("audio");
      if (audio.paused) {
          audio.play();
          $(this).toggleClass("stop"); // クラスを追加/削除する代わりに、toggleClassを使用します。
      } else {
          audio.pause();
          $(this).toggleClass("stop"); // クラスを追加/削除する代わりに、toggleClassを使用します。
      }
  });
});
