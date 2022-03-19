
// initializers
let month = "";
let date = "";
let zodiac="";

let displayHelp = "false";
let isPlaying="false";

const showHelp= () => {
    const helpPage = document.querySelector('.js-help-btn-div');

    if (displayHelp){
        helpPage.style.display ="none";
        displayHelp = false;
    }
    else{
        helpPage.style.display = "flex";
        displayHelp = true;
    }

}

const helpButton = document.querySelector('.js-help-button');
helpButton.addEventListener('click', showHelp);





const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    getBirthdate();
});

function getBirthdate(){
    const dateInput = document.querySelector('.js-date-input');
    const birthDate = new Date(dateInput.value); 
    month = birthDate.getMonth() + 1 ;
    date = birthDate.getDate() + 1;

    console.log(month);




const playMusic= ()=>{
    const music=document.querySelector('.bg-music');
    const play=document.querySelector('.play-button-image');
    if (isPlaying){
        music.pause();
        play.src='zodiacImages/sound.png';
        isPlaying=false;
    }

}



const soundButton = document.querySelector('.js-sound-button');
soundButton.addEventListener('click', playMusic);










  //zodiac dates and function

//   function zodiacFunction(month,date) {
    if ( ( (month==4)&&(date>19) ) ||  ( (month==5)&&(date<21) ) ){
        zodiac = "Unicorn";
        //open up unicorn html
        window.open("https://nytrea.com/idm231/zodiacProject/unicorn.html", "_self");
    } 
    
    else  if ( ( (month==5)&&(date>20) ) ||  ( (month==6)&&(date<21) ) ){
        zodiac = "Niffler";
        //open up niffler html
        window.open("https://nytrea.com/idm231/zodiacProject/niffler.html", "_self");

    } 
    
    else  if ( ( (month==6)&&(date>20) ) ||  ( (month==7)&&(date<23) ) ){
        zodiac = "Occamy";
        //open up occamy html
        window.open("https://nytrea.com/idm231/zodiacProject/occamy.html", "_self");

    }
    
    else  if ( ( (month==7)&&(date>22) ) ||  ( (month==8)&&(date<23) ) ){
        zodiac = "Dragon";
        //open up dragon html
        window.open("https://nytrea.com/idm231/zodiacProject/dragon.html", "_self");

    }
    
    else  if ( ( (month==8)&&(date>22) ) ||  ( (month==9)&&(date<23) ) ){
        zodiac = "Bowtruckle";
        //open up bowtruckle html
        window.open("https://nytrea.com/idm231/zodiacProject/bowtruckle.html", "_self");

    }
    
    else  if ( ( (month==9)&&(date>22) ) ||  ( (month==10)&&(date<23) ) ){
        zodiac = "Thestral";
        //open up thestral html
        window.open("https://nytrea.com/idm231/zodiacProject/thestral.html", "_self");

    }
    
    else  if ( ( (month==10)&&(date>22) ) ||  ( (month==11)&&(date<22) ) ){
        zodiac = "Basilisk";
        var audio = new Audio('sounds/adventure_beyond.mp3');
        audio.play();
     
        //open up basilisk html
        window.open("https://nytrea.com/idm231/zodiacProject/basilisk.html", "_self");
    }
    
    else  if ( ( (month==11)&&(date>21) ) ||  ( (month==12)&&(date<22) ) ){
        zodiac = "Phoenix";
        //open up phoenix html 
        window.open("https://nytrea.com/idm231/zodiacProject/phoenix.html", "_self");

    }
    
    else  if ( ( (month==12)&&(date>21) ) ||  ( (month==1)&&(date<20) ) ){
        zodiac = "Demiguise";    
        //open up demiguise html 
        window.open("https://nytrea.com/idm231/zodiacProject/demiguise.html", "_self");

    
    }
    
    else  if ( ( (month==1)&&(date>19) ) ||  ( (month==2)&&(date<19) ) ){
        zodiac = "Abraxon";
         //open up abraxon html 
         window.open("https://nytrea.com/idm231/zodiacProject/abraxon.html", "_self");

    }
    
    else  if ( ( (month==2)&&(date>18) ) ||  ( (month==3)&&(date<21) ) ){
        zodiac = "Hippocampus";
        //open up hippocampus html 
        window.open("https://nytrea.com/idm231/zodiacProject/hippocampus.html", "_self");

    
    }
    
    else  if ( ( (month==3)&&(date>20) ) ||  ( (month==4)&&(date<20) ) ){
        zodiac = "Hippogriff";
        //open up hippogriff html 
        window.open("https://nytrea.com/idm231/zodiacProject/hippogriff.html", "_self");

    }
    
    //display resulting creature in words 
    const zodiacResult = document.querySelector('.js-zodiac-result');
    zodiacResult.innerHTML = "Your zodiac is the " + zodiac + "!";
    zodiacResult.style.display = "block";
    
  }