document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tab-btn");
  var panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");

      buttons.forEach(function (b) { b.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
