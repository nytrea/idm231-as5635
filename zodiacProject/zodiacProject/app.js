
// initializers
let month = "";
let date = "";

let creature = "";
let creatureImg = "";
let creatureDes = "";

const submitButton = document.querySelector(".js-submit-button");
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    getBirthdate();
});

function getBirthdate(){
    const formInput = document.querySelector(".js-date-input");
    const birthDate = new Date(dateInput.value); 
    month = date.getMonth() +1;
    day = date.getDate() +1;
    console.log(month);
    console.log(day);

    function zodiacFunction(month,date) {
        if ( ( (month==4)&&(date>19) ) ||  ( (month==5)&&(date<21) ) ){
            creature = "Taurus";
            //open up unicorn html
            
        
        } 
        
        else  if ( ( (month==5)&&(date>20) ) ||  ( (month==6)&&(date<21) ) ){
            zodiac = "Gemini";
            //open up niffler html
        } 
        
        else  if ( ( (month==6)&&(date>20) ) ||  ( (month==7)&&(date<23) ) ){
            zodiac = "Cancer";
            //open up occamy html
        }
        
        else  if ( ( (month==7)&&(date>22) ) ||  ( (month==8)&&(date<23) ) ){
            zodiac = "Leo";
            //open up dragon html
        }
        
        else  if ( ( (month==8)&&(date>22) ) ||  ( (month==9)&&(date<23) ) ){
            zodiac = "Virgo";
            //open up bowtruckle html
        }
        
        else  if ( ( (month==9)&&(date>22) ) ||  ( (month==10)&&(date<23) ) ){
            zodiac = "Libra";
            //open up thestral html
        }
        
        else  if ( ( (month==10)&&(date>22) ) ||  ( (month==11)&&(date<22) ) ){
            zodiac = "Scorpio";
            var audio = new Audio('sounds/adventure_beyond.mp3');
            audio.play();
         
            //open up basilisk html
            // location 
        }
        
        else  if ( ( (month==11)&&(date>21) ) ||  ( (month==12)&&(date<22) ) ){
            zodiac = "Sagittarius";
            //open up phoenix html 
        
        }
        
        else  if ( ( (month==12)&&(date>21) ) ||  ( (month==1)&&(date<20) ) ){
            zodiac = "Capricorn";    
            //open up demiguise html 
        
        }
        
        else  if ( ( (month==1)&&(date>19) ) ||  ( (month==2)&&(date<19) ) ){
            zodiac = "Aquarius";
             //open up abraxon html 
        }
        
        else  if ( ( (month==2)&&(date>18) ) ||  ( (month==3)&&(date<21) ) ){
            zodiac = "Pisces";
            //open up hippocampus html 
        
        }
        
        else  if ( ( (month==3)&&(date>20) ) ||  ( (month==4)&&(date<20) ) ){
            zodiac = "Aries";
            //open up hippogriff html 
        
        }
    
    //if statement for aang (libra) 
    if ((month == 9 && day >= 23) || (month == 10 && day<=22)){
      character = "Aang";
      charaImg = "zodiacimages/air-aang-01.png";
      charaBio = "You are Aang!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    }
    //if statement for (scorpio)
    else if ((month == 10 && day >= 23) || (month == 11 && day<=21)){
      character = "Pakku";
      charaImg = "zodiacimages/pakku-water-04.png";
      charaBio = "You are Pakku!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (sagittarius)
    else if ((month == 11 && day >= 22) || (month == 12 && day<=21)){
      character = "Iroh";
      charaImg = "zodiacimages/iroh-fire-07.png";
      charaBio = "You are Iroh!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (capricorn)
    else if ((month == 12 && day >= 22) || (month == 1 && day<=19)){
      character = "Kiyoshi";
      charaImg = "zodiacimages/kiyoshi-earth-11.png";
      charaBio = "You are Kiyoshi!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (aquarius)
    else if ((month == 1 && day >= 20) || (month == 2 && day<=18)){
      character = "Appa";
      charaImg = "zodiacimages/air-appa-03.png";
      charaBio = "You are Appa!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (pisces)
    else if ((month == 2 && day >= 19) || (month == 3 && day<=20)){
      character = "Katara";
      charaImg = "zodiacimages/katara-water-05.png";
      charaBio = "You are Katara!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (aries)
    else if ((month == 3 && day >= 21) || (month == 4 && day<=19)){
      character = "Zuko";
      charaImg = "zodiacimages/zuko-fire-08.png";
      charaBio = "You are Zuko!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (taurus)
    else if ((month == 4 && day >= 20) || (month == 5 && day<=20)){
      character = "Toph";
      charaImg = "zodiacimages/toph-earth-12.png";
      charaBio = "You are Toph!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (gemini)
    else if ((month == 5 && day >= 21) || (month == 6 && day<=20)){
      character = "Momo";
      charaImg = "zodiacimages/air-momo-02.png";
      charaBio = "You are Momo!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (cancer)
    else if ((month == 6 && day >= 21) || (month == 7 && day<=22)){
      character = "Sokka";
      charaImg = "zodiacimages/sokka-water-06.png";
      charaBio = "You are Sokka!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (leo)
    else if ((month == 7 && day >= 23) || (month == 8 && day<=22)){
      character = "Mako";
      charaImg = "zodiacimages/mako-fire-09.png";
      charaBio = "You are Mako!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    } 
    //if statement for (virgo)
    else if ((month == 8 && day >= 23) || (month == 9 && day<=22)){
      character = "Bolin";
      charaImg = "zodiacimages/bolin-earth-10.png";
      charaBio = "You are Bolin!";
      soundEffectmp3 = "sounds/aang-sound.mp3";
      soundEffectogg = "sounds/aang-sound.ogg";
    }; 

    setValues();
};
