// Javascript file for Smart Watch App
//      Project Name   : Smart Watch App
//      Languages Used : HTML5, CSS3, Javascript , Bootstrap,JQuery
//      Author         : Robin Hooda
//      Description    : A web application for the smart watch having the following functionalities:
//                        1) Music Player- The user will be able to play music from the available list.
//                        2) Messaging
//                        3) Timer
//      Link           : https://github.com/robinhooda/Smart-Watch

let currentDate = new Date();
let minute= currentDate.getMinutes();
let dayInNumber= currentDate.getDay();
let monthInNumber=currentDate.getMonth()-1;
let dateInNumber=currentDate.getDate();
let dayInString = dayInNumber==0?
        'Sunday':dayInNumber==1?
        'Monday':dayInNumber==2?
        'Tuesday':dayInNumber==3?
        'Wednesday':dayInNumber==4?
        'Thursday':dayInNumber==5?
        'Friday':'Saturday';
let monthInString = monthInNumber==0?
        'Jan':monthInNumber==1?
        'Feb':monthInNumber==2?
        'March':monthInNumber==3?
        'April':monthInNumber==4?
        'June':monthInNumber==5?
        'July':monthInNumber==6?
        'Aug':monthInNumber==7?
        'Sept':monthInNumber==8?
        'Oct':monthInNumber==9?
        'Nov':'Dec';
document.getElementById("hour").innerHTML=currentDate.getHours();
if(minute<10){
        document.getElementById("mins").innerHTML="0"+currentDate.getMinutes();
}
else{
        document.getElementById("mins").innerHTML=currentDate.getMinutes();
}
document.getElementById("day").innerHTML=dayInString;   
if(dateInNumber<10)
        document.getElementById("month").textContent=monthInString+"- 0"+dateInNumber;
else
        document.getElementById("month").textContent=monthInString+"-"+dateInNumber;
          
   
        //     let watch = document.getElementsByClassName("digits")[0],
        //     start = document.getElementById("timerplay"),
        //     stop = document.getElementById("stop"),
        //     clear = document.getElementById("clear"),
        //     seconds = 0,
        //     minutes = 0,
        //     hours = 0,
        //     t;
          
        //   function add() {
        //     seconds++;
        //     if (seconds >= 60) {
        //       seconds = 0;
        //       minutes++;
        //       if (minutes >= 60) {
        //         minutes = 0;
        //         hours++;
        //       }
        //     }
          
        //     watch.textContent =
        //       (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        //       ":" +
        //       (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        //       ":" +
        //       (seconds > 9 ? seconds : "0" + seconds);
          
        //     timer();
        //   }
        //   function timer() {
        //     t = setTimeout(add, 1000);
        //   }
          
        //   /* Start button */
        //   timerplay.onclick = timer;
          
        //   /* Stop button */
        //   stop.onclick = function() {
        //     clearTimeout(t);
        //   };
          
        //   /* Reset button */
        //   reset.onclick = function() {
        //     watch.textContent = "00:00:00";
        //     seconds = 0;
        //     minutes = 0;
        //     hours = 0;
        //   };            







$(function(){
        $(".musicScreen").hide();
        $(".menu").hide();
        $(".fa-home,.homeDisplay").click(function() {
              $(".menu").toggle();        
              $(".musicScreen").hide();
              $(".homeDisplay").toggle();
        })
        // $(".fa-home,.homeDisplay").dblclick(function() {
        //         $(".menu").show();        
        //         $(".homeDisplay,.musicScreen").hide();
        //   })
        $("#music").click(function() {
                $(".musicScreen").show();        
          })
})
