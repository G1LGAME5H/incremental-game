$(document).ready(function(){

function Enemy(){
  this.maxLife = 3000;
  this.life = 3000;
  this.damage = function(){
   setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/9fxrg4g.png)')
    }, 130);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/p2KnhNp.png)')
    }, 160);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/IlKi6sx.png)')
    }, 190);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/IEBbGgQ.png)')
    }, 220);
    setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/38XP4He.png)')
    }, 250);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/ehQs5Qt.png)')
    }, 280);
    setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/a8MRD9X.png)')
    }, 210);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/f9Phsyl.png)')
    }, 240);
    setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/8GyWg8c.png)')
    }, 270);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/R3h72AP.png)')
    }, 300);
     setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/xpwQJWr.png)')
    }, 330);
  setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/WUpo7lm.png)')
    }, 360);
    setTimeout(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/MCQzW1B.png)')
    }, 390);
  }
  this.animate = function(){
  setInterval(() => {
        	$(".enemy").css('background-image', 'url(https://i.imgur.com/MCQzW1B.png)')
    }, (Math.random() * 1000));
        			setInterval(() => {
              $(".enemy").css('background-image', 'url(https://i.imgur.com/IosGtV7.png)')
    }, 1200);
 }
}
enemy = new Enemy();
enemy.animate()
let lifediv = $('.enemy-life-bar');
lifediv.text(enemy.life + '/' + enemy.maxLife)
let coins = 0;
$('.coins').text('Coins: ' + coins)

function dealDamage(dmg){
enemy.life = enemy.life - dmg;
lifediv.text(enemy.life + '/' + enemy.maxLife)
$('.progress').width(120 * (enemy.life/enemy.maxLife))
enemy.damage();
if(Math.random() < 0.5){
coins += 1;
$('.coins').text('Coins: ' + coins)
}
if(enemy.life <= 0){
alert('You win!')
}
}

let knights = [1];

$('.enemy-hitbox').click(function(){
dealDamage(1);
});

function Knight1(){
this.price = 200;
setInterval(function(){
dealDamage(10);
}, 1000);
};

$('.buy1').click(function(){
if(coins < 200){
$('.buy1').text('Not enough money!');
}
else if(knights.length >= 7){
$('.buy1').text('Party full!');
}
else{
$('.knight1').css('background-image', "url('https://i.imgur.com/QgtE5tH.png')", "center no-repeat")
$('.knight1').css('background-size', "300px")
knights.push(new Knight1());
coins -= knights[1].price
console.log(knights.length)
console.log(knights)
}
knights.forEach(function(c, i){
$('.knight' + i).css('background-image', "url('https://i.imgur.com/QgtE5tH.png')", "no-repeat center")
$('.knight' + i).css('background-size', "280px")
})
})
})

