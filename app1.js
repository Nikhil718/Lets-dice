var scores,roundscores, activeplayer,gameplaying;
inti();

document.querySelector('.dice').style.display='none';




document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
       //1.random number
  var  dice= Math.floor(Math.random() * 6) + 1;
  //2.display the result
  var diceDOM= document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+ dice + '.png';
   

  //3. update the rouns score if the roll number is not 1
  if(dice!==1){
    //add score
    roundscores += dice;
    document.querySelector('#current-' + activeplayer).textContent= roundscores;
  } else {
    //Next player
   nextPlayer();
     
  }

    }

   


});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gameplaying){
 // Add current score to globlescore
 scores[activeplayer] += roundscores;

 //Update the UI
document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

//check if player won the game

if(scores[activeplayer] >= 50){
 document.querySelector('#name-' + activeplayer).textContent='Winner!';
 document.querySelector('.dice').style.display = 'none';
 document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
 document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
 gameplaying=false;
}else{
//next player
nextPlayer();
}
  }
});


function nextPlayer(){

 //Next player
 activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
 roundscores=0;

document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';

document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
 document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', inti);
 


function inti(){
  scores=[0,0];
   activeplayer=0;
   roundscores=0;
   gameplaying=true;

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';
document.querySelector('#name-0').textContent='player 1';
document.querySelector('#name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}