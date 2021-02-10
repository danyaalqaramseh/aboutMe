
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
 function tokatu(){
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
  alert('Welcome to Story of My Life' );
  
 }
 function travel(){
   while(noTry >0){
      let noTravel=prompt('how many times i traveled?');
   
       if (noTravel==='0') {
         alert('you alright');
         console.log(noTravel);
   
          break;
      }
      
         noTry =noTry - 1;
         noTravel=alert('you have another '+ noTry +'times to try' );
   
      
     
    
       if(!noTry){
        alert('no attempt left');
         break ;
   
   }
   }
   
   while(noTry >0){
      let noFailed=prompt('how many times i faild in life?');
   
   
      if (noFailed==='2') {
       alert('you alright');
       console.log(noFailed);
   
       break;
      }
      
         noTry =noTry - 1;
      noFailed=alert('you have another '+ noTry +'times to try' );
   
    
      if(!noTry){
       alert('no attempt left');
   
       break ;
            }
         }
   
   // 3d q
   
   while(noTry >0){
      let noViews=prompt('how many anime i watched in life -the answer between 30 and 40-?');
   
   
      if (noViews==='35') {
      alert('you alright');
      console.log(noViews);
   
      break;
      }
      
         noTry =noTry - 1;
      noViews=alert('you have another '+ noTry +'times to try' );
   
   
       if(!noTry){
        alert('no attempt left');
   
        break ;
               }
     }
   
   // 4th q
   while(noTry >0){
      let noSis=prompt('how many sister do you think i have ?');
   
   
       if (noSis==='2') {
       alert('you alright');
       console.log(noSis);
   
      break;
      }
      
         noTry =noTry - 1;
      noSis=alert('you have another '+ noTry +'times to try' );
   
      if(!noTry){
       alert('no attempt left');
   
       break ;
    }
   }
   
   // q 5
   while(noTry >0){
      let noFailed=prompt('how many times i faild in life?');
   
   
      if (noBro==='2') {
      alert('you alright');
      console.log(noBro);
   
      break;
      }
      
         noTry =noTry - 1;
      noBro=alert('you have another '+ noTry +'times to try' );
   
   
      if(!noTry){
      alert('no attempt left');
   
      break ;
       }
   }
   
   // q 6
   
   while(noTry >0){
      let noHand=prompt('how many hand i have?');
   
   
      if (noHand==='2') {
      alert('you alright');
      console.log(noHand);
   
      break;
      }
      
         noTry =noTry - 1;
      noHand=alert('you have another '+ noTry +'times to try' );
   
      
      if(!noTry){
      alert('no attempt left');
   
       break ;
    }
   }
   
 }

 function tpres(){
   console.log(presidentList);

   let noattempts = 5;
   while(noattempts >0){
      
        let resName =prompt('whos the president of jorden ');
   
   
       if (resName===presidentList[5]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         resName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
   
   
   while(noattempts >0){
      
        let rusName =prompt('whos the president of russia ');
   
   
       if (rusName===presidentList[2]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         rusName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
   
   while(noattempts >0){
      
        let americaName =prompt('whos the president of america ');
   
   
       if (anericaName===presidentList[1]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         americaName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
   
   while(noattempts >0){
      
        let bestamName =prompt('who was the president of america ');
   
   
       if (bestamName===presidentList[5]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         bestamName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
   
   while(noattempts >0){
      
        let queenName =prompt('whos the queen of jorden ');
   
   
       if (queenName===presidentList[4]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         queenName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
   
   while(noattempts >0){
      
        let resturName =prompt('whos the president of turkey ');
   
   
       if (resturName===presidentList[3]) {
         alert('you alright');
         console.log(resName);
   
          break;
       }
      
         noattempts =noattempts - 1;
         resturName=alert('you have another '+ noattempts +'times to try' );
   
      
       
    
       if(!noattempts){
        alert('no attempt left');
         break ;
   
         }
   }
 }
let ageOld =prompt('Do you think my age is 56 ? ?');
tage();
 let jobPref = prompt('Do you think i like Programming?');
 tjob();

 let otaku=prompt('am i otaku ?  ');
 tokatu();

 let offcialName=prompt('Do you think my name is Danya ?');

 tname();

 let knowMe=prompt(' Do you think you realy know me ??');
 tknow();

// lab03


// while the numbers of trails is less than or equal to 4 
// keep trying 
// when it is equal to 4 
// stop 

// if the ans is right >> "you are right ">> break
//if the ans is wrong >> ^^^^


let noTry = 4;
travel();

// 3rd and 4th instruction in canvas

let presidentList=[ 'trump' , 'ubama' ,'buten' , 'erdogan' , 'queen rania', 'king abdullah' ];

tpres();

















