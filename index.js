var randomNumber1=Math.floor(Math.random()*(6-1)+1);
var dice1="dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1);
var randomNumber2=Math.floor(Math.random()*(6-1)+1);
var dice2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins";

}
if(randomNumber1 === randomNumber2)
{
     document.querySelector("h1").innerHTML="It's a Draw";
}