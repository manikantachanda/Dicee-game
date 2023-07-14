var randomNum=Math.random();
var random1=Math.random();
random1=Math.floor((random1*6)+1);
randomNum=Math.floor((randomNum*6)+1);
var image1="./images/dice"+randomNum+".png";
var image2="./images/dice"+random1+".png";
var query=document.querySelectorAll("img");

if(randomNum>random1){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNum<random1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

query[0].setAttribute("src",image1);
query[1].setAttribute("src",image2);
