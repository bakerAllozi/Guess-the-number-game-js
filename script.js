'use strict';
let scoref= 20;
let v=0;
const message = r => document.querySelector('.message').textContent = r;

const baker = x =>  x >= v ? v=x :v ;

document.querySelector('.score').textContent = scoref;
let secretNumber= Math.trunc(Math.random() *20)+1//ازالت الارقام بعد الفواصل
document.querySelector('.again').addEventListener('click' , function(){
    scoref= 20;
    secretNumber= Math.trunc(Math.random() *20)+1;
    message('Start guessing...')
    document.querySelector('.score').textContent = scoref;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = '?';
})
document.querySelector('.check').addEventListener
('click' , function (){
    const guess =Number(document.querySelector('.guess').value);
    if (!guess)message('No number!');

    else if(scoref == 0 ){
        document.querySelector('.score').textContent ='no more';
        message('you loss')
    }
    else if(guess === secretNumber){
        message('correct Number!')
        document.querySelector('.score').textContent = scoref;
        document.querySelector('.highscore').textContent = baker(scoref);        
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber ;
    }
    else if(guess !== secretNumber){
            message(guess > secretNumber ?'too high':'too low')
            scoref--;
            document.querySelector('.score').textContent = scoref;
        }
    
});
