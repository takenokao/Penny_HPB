document.addEventListener("DOMContentLoaded", function() {
    var audioButton = document.querySelector(".audio_button");

    audioButton.addEventListener("click", function() {
        // ボタンのクラスを切り替える
        audioButton.classList.toggle("stop");
    });
});
