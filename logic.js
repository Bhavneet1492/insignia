let FB2 = document.getElementById("ftBtn2");
FB2.addEventListener("click", () => {
  document.querySelector(".card2").style.display = "none";
  document.querySelector(".head2").style.display = "none";
  document.querySelector(".cont2").style.display = "none";
  document.querySelector(".svg2").style.display = "none";

  document.querySelector(".card3").style.display = "block";
  document.querySelector(".head3").style.display = "block";
  document.querySelector(".cont3").style.display = "block";
  document.querySelector(".svg3").style.display = "block";

  document.querySelector(".first").style.height = "5px";
  document.querySelector(".first").style.width = "5px";

  document.querySelector(".first").style.top =
    document.querySelector(".first").offsetTop + 3 + "px";

  document.querySelector(".first").style.backgroundColor = "white";
  document.querySelector(".second").style.height = "10px";
  document.querySelector(".second").style.width = "10px";

  document.querySelector(".second").style.top =
    document.querySelector(".second").offsetTop - 3 + "px";
  document.querySelector(".second").style.backgroundColor = "#f063b8";
});
let FB1 = document.getElementById("ftBtn1");
FB1.addEventListener("click", () => {
  document.querySelector(".card2").style.display = "block";
  document.querySelector(".head2").style.display = "block";
  document.querySelector(".cont2").style.display = "block";
  document.querySelector(".svg2").style.display = "block";

  document.querySelector(".card3").style.display = "none";
  document.querySelector(".head3").style.display = "none";
  document.querySelector(".cont3").style.display = "none";
  document.querySelector(".svg3").style.display = "none";

  document.querySelector(".second").style.height = "5px";
  document.querySelector(".second").style.width = "5px";

  document.querySelector(".second").style.top =
    document.querySelector(".second").offsetTop + 3 + "px";

  document.querySelector(".second").style.backgroundColor = "white";
  document.querySelector(".first").style.height = "10px";
  document.querySelector(".first").style.width = "10px";

  document.querySelector(".first").style.top =
    document.querySelector(".first").offsetTop - 3 + "px";

  document.querySelector(".first").style.backgroundColor = "#f063b8";
});

let TB2 = document.getElementById("tBtn2");
TB2.addEventListener("click", () => {
  document.querySelector(".head2T").style.zIndex = "10";
  document.querySelector(".cont2T").style.zIndex = "10";
  document.querySelector(".designation2").style.zIndex = "10";
  document.querySelector(".svg2T").style.zIndex = "10";
  //
  document.querySelector(".head1T").style.zIndex = "-1";
  document.querySelector(".cont1T").style.zIndex = "-1";
  document.querySelector(".designation1").style.zIndex = "-1";
  document.querySelector(".svg1T").style.zIndex = "-1";

  document.querySelector(".firstT").style.height = "5px";
  document.querySelector(".firstT").style.width = "5px";
  document.querySelector(".firstT").style.top =
    document.querySelector(".firstT").offsetTop + 3 + "px";
  document.querySelector(".firstT").style.backgroundColor = "white";
  document.querySelector(".secondT").style.height = "10px";
  document.querySelector(".secondT").style.width = "10px";
  document.querySelector(".secondT").style.top =
    document.querySelector(".secondT").offsetTop - 3 + "px";
  document.querySelector(".secondT").style.backgroundColor = "#f063b8";

  document.querySelector(".rating .five ").style.backgroundColor = "#30fbef";
});

let TB1 = document.getElementById("tBtn1");
TB1.addEventListener("click", () => {
  document.querySelector(".head2T").style.zIndex = "-1";
  document.querySelector(".cont2T").style.zIndex = "-1";
  document.querySelector(".designation2").style.zIndex = "-1";
  document.querySelector(".svg2T").style.zIndex = "-1";
  //
  document.querySelector(".head1T").style.zIndex = "10";
  document.querySelector(".cont1T").style.zIndex = "10";
  document.querySelector(".designation1").style.zIndex = "10";
  document.querySelector(".svg1T").style.zIndex = "10";

  document.querySelector(".secondT").style.height = "5px";
  document.querySelector(".secondT").style.width = "5px";
  document.querySelector(".secondT").style.backgroundColor = "white";
  document.querySelector(".firstT").style.height = "10px";
  document.querySelector(".firstT").style.width = "10px";
  document.querySelector(".firstT").style.backgroundColor = "#f063b8";
  document.querySelector(".secondT").style.top =
    document.querySelector(".secondT").offsetTop + 3 + "px";
  document.querySelector(".firstT").style.top =
    document.querySelector(".firstT").offsetTop - 3 + "px";
  document.querySelector(".rating .five ").style.backgroundColor = "#282828";
});
let chatBtn = document.getElementById("chb");
chatBtn.addEventListener("click", () => {
  document.querySelector(".chatbar").style.opacity = 1;
});
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  document.querySelector(".chatbar").style.opacity = 0;
});

let navBtn = document.getElementById("navBtn");
navBtn.addEventListener("click", () => {
  document.getElementById("navclose").style.display = "block";
  document.querySelector("#navBtn div").style.display = "flex";
});

let navclose = document.getElementById("navclose");
navclose.addEventListener("click", () => {
  document.getElementById("navclose").style.display = "none";
  document.querySelector("#navBtn div").style.display = "none";
});
