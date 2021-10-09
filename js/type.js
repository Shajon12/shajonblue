var typed5 = new Typed(".typed", {
  strings: [
    "Welcome To Our Website",
    "Website Designing Services",
    "Website Development Services",
    "Wordpress  Themes Customizations",
    "Wordpress  Themes Developments",
    "Digital Marketing",
    "SEO  Expert",
  ],

  typeSpeed: 50,
  backSpeed: 10,
  loop: true,
});
$(document).ready(function () {
  $("html").bind("cut copy", function (e) {
    e.preventDefault();
    window.alert("You do not copy any text");
  });
});
window.addEventListener("load", () => {
  var ele = document.querySelector(".pro_html");
  var width = 1;
  var Time = setInterval(myfunction, 20);

  function myfunction() {
    if (width >= 95) {
      clearInterval(Time);
    } else {
      width++;
      ele.style.width = width + "%";
      document.querySelector("#html").innerHTML = width + "%";
    }
  }
});

window.addEventListener("load", () => {
  var ele = document.querySelector(".pro_html");
  var width = 1;
  var Time = setInterval(myfunction, 20);

  function myfunction() {
    if (width >= 95) {
      clearInterval(Time);
    } else {
      width++;
      ele.style.width = width + "%";
      document.querySelector("#html").innerHTML = width + "%";
    }
  }
});
