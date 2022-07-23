// image1
 var randomNumber1 = Math.floor(Math.random() * 6) + 1;

 var randomDiceImage = "dice" + randomNumber1 +".png"; //dice1.png - dice6.png

 var randomImageSource  = "images/" + randomDiceImage ; //images/dice1.png - dice6.png

 var image1 = document.querySelectorAll("img")[0] ;

 image1.setAttribute("src" , randomImageSource);

 // image2

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var randomDiceImage = "dice" + randomNumber2 + ".png";

 var randomImageSource = "images/" + randomDiceImage ;

 var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource);


 // To change the innerHTML according to Random Numbers.

 if(randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🏎️ PLAYER 1 WINS!"
 } else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = " 🏁 PLAYER 2 WINS!"

 }
 else{
   document.querySelector("h1").innerHTML = "💔 भाई तेरा यहाँ भी कुछ नहीं हो सकता ! "

 }
