
let hoursInput = document.getElementById("hoursInput");

let minutesInput = document.getElementById("minutesInput");

let convertBtn = document.getElementById("convertBtn");

let timeInSeconds = document.getElementById("timeInSeconds");

let errorMsg = document.getElementById("errorMsg");
let msginhours = "please enter a valid number of hours";
let msginmint = "please enter a valid number of minutes";

function converttimeinseconds(){
   let hours = hoursInput.value;
   let mainhours = parseInt(hours);
   let minutes = minutesInput.value;
   let mainminutes = parseInt(minutes);
   if(hours === ""){
    errorMsg.textContent = msginhours;
   }else if(minutes===""){
    errorMsg.textContent = msginmint;
   }else{
    let time = mainhours*3600 + mainminutes*60;
    timeInSeconds.textContent = time + "s";
    errorMsg.textContent = "";

   }
}

convertBtn.addEventListener("click",converttimeinseconds);