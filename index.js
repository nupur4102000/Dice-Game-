let dice01=Math.floor(Math.random()*6)+1;
let dice02=Math.floor(Math.random()*6)+1;
//alert("hello");
 let display1="images/dice"+dice01+".png";

 let display2="images/dice"+dice02+".png";

 document.getElementById("img1").setAttribute("src",display1);

 document.getElementById("img2").setAttribute("src",display2);

if(dice01>dice02)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!!";

}
else if(dice01<dice02)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else{
  document.querySelector("h1").innerHTML="Try Again!!"
}
