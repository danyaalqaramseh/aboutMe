
 'use strict';



 function tage(){
  if( ageOld.toLowerCase() === 'yes' || ageOld.toLowerCase()==='y' ) {
    console.log('test');
    alert('No , My age is 22');
    console.log(ageOld);
 }
 else if (ageOld.toLowerCase()=== 'no' || ageOld.toLowerCase()==='n' ){

   console.log('test');
   alert('you alright im not 56 im 22');

 }



 }
 function tjob(){
  if(jobPref.toLowerCase() === 'yes' || jobPref.toLowerCase()==='y' ){

    console.log('test');
    alert(' yes i like programming ');
    console.log(jobPref);
 }
  else if (jobPref.toLowerCase()==='no' || jobPref.toLowerCase()==='n'){

   console.log('test');
   alert(' you\'re wrong i like programming  ');

 }



 }

function totaku(){

  if( otaku.toLowerCase() === 'yes' || otaku.toLowerCase()==='y' ) {

    console.log('test');
    alert('you are otaku too because you know what means *-*');
    console.log(otaku);
 }
 else if (otaku.toLowerCase()==='no' || otaku.toLowerCase()==='n'){
   console.log('test');

  alert('are you kidding me ? even ubama knows im an otaku');

 }
}

function tname(){
  if( offcialName.toLowerCase() === 'yes' || offcialName.toLowerCase()==='y' ) {

    console.log('test');
    alert('yes im danya what a suprise !!');
    console.log(offcialName);

 }
else if (offcialName.toLowerCase()==='no'|| offcialName.toLowerCase()==='n'){

alert('why you think that , im danya didnt know me yet!! ');
console.log('test');

}


}
function tknow(){

  if( knowMe.toLowerCase() === 'yes' || knowMe.toLowerCase()==='y' ) {

    console.log('test');
    alert(' Liar , no one can know me  ');
    console.log(knowMe);
 }
else if (knowMe.toLowerCase()==='no'||knowMe.toLowerCase()==='n'){

alert('i cant blame you , i dont like talking a lot about my self');
console.log('test');




}

}

function twatch(){
  let noTry = 5;
  let zero = 0;
  while(noTry >0){
      let noAnime=prompt('how many anime i watched in my life?');
  
      if (Number(noAnime)===35){ 
        alert('you alright');
        console.log(noAnime);
  
         break;
      }
      else if (Number(noAnime) <= 20 || Number(noAnime) < 35) {
        alert('Thats too low');
        noAnime=alert('you have another '+ noTry +'times to try' );
  
      }
      else if ((Number(noAnime)>= 50)  || (Number(noAnime) > 35 )) {
        alert('Thats too high')
        noAnime=alert('you have another '+ noTry +'times to try' );
  
       }
      
       noTry =noTry -1 ; 
  
         if (noTry===zero){
           noAnime= alert('no attempts left');
            break;
         }
        
  }



}
function tanime(){
  let score =0; 
  let noattempts = 5;
  while(noattempts >=0){
     
     let animeName =prompt('guess a list of anime that i like ');
      for( let i =0 ; i<6;i++){
      if (animeName.toLowerCase() === animeList[i].toLowerCase() ) {
        console.log('test')  ;
        score  = score + 1 ;
     
        
      }
  
      }
        noattempts =noattempts - 1;
        animeName=alert('you have another  '+ noattempts +' Qs  and you will got the score ') ;
     
      
   
      if(noattempts===0){
        break ;
  
        }
  
  
  }
  
  score =alert('no attempt left , your score is ' + score + ' out of 6');
  
  



}





let ageOld =prompt('Do you think my age is 56 ? ?');
tage();

 let jobPref = prompt('Do you think i like Programming?');
 tjob();

 let otaku=prompt('am i otaku ?  ');
 totaku();

 let offcialName=prompt('Do you think my name is Danya ?');
tname();
 

 let knowMe=prompt(' Do you think you realy know me ??');
 tknow();
alert('Welcome to Story of My Life' );


twatch();




    


let animeList=[ 'Attack on Titan' , 'Death Note' ,'Dragon ball' , 'NeverLand' , 'conan', 'Angels of death' ];
console.log(animeList);
tanime();
















