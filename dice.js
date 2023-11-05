
var Randomimg = Math.floor((Math.random() * 6) + 1);
var Randomimgsrc = "image/dice" + Randomimg + ".png";


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", Randomimgsrc);


var Randomimg1 = Math.floor((Math.random() * 6) + 1);
var Randomnum1 = "image/dice" + Randomimg1 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", Randomnum1);


if (Randomimgsrc > Randomnum1) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 has won";

}


else if (Randomnum1 > Randomimgsrc) {
    document.querySelector("h1").innerHTML = "🏁 Player 2 has won";

}

else {
    document.querySelector("h1").innerHTML = "Its DRAW";
}




