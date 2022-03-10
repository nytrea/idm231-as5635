
// initializers
let month = "";
let date = "";
let season="";


const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    getBirthday();
});

function getBirthday(){
    const dateInput = document.querySelector('.js-date-input');
    const birthDate = new Date(dateInput.value); 
    month = birthDate.getMonth() + 1 ;
    date = birthDate.getDate() + 1;


    if ((month==1) || ((month==12)&&(date>21)) || (month==2) || ((month==3)&&(date<22))){
        season = "Winter";
    } 

    else if ((month==4) || ((month==3)&&(date>21)) || (month==5) || ((month==6)&&(date<22))){
        season = "Spring";
    }

    else if ((month==7) || ((month==6)&&(date>21)) || (month==8) || ((month==9)&&(date<22))){
        season = "Summer";
    }
   
    else if ((month==10) || ((month==9)&&(date>21)) || (month==11) || ((month==12)&&(date<22))){
        season = "Fall";
    }

const seasonResult = document.querySelector('.js-season-result');
seasonResult.innerHTML = "Your birthday is in " + season;
seasonResult.style.display = "block";


}

   
   
    
