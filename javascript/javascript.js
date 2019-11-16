// Javascript file for Smart Watch App
//      Project Name   : Smart Watch App
//      Languages Used : HTML5, CSS3, Javascript , Bootstrap,JQuery
//      Author         : Robin Hooda
//      Description    : A web application for the smart watch having the following functionalities:
//                        1) Music Player- The user will be able to play music from the available list.
//                        2) Messaging
//                        3) Timer
//      Link           : https://robinhooda.github.io/Smart-Watch/

let currentDate = new Date();
let minute= currentDate.getMinutes();
let hours=currentDate.getHours();
let dayInNumber= currentDate.getDay();
let monthInNumber=currentDate.getMonth()-1;
let dateInNumber=currentDate.getDate();
// for weekday
let dayInString = dayInNumber==0?
        'Sunday':dayInNumber==1?
        'Monday':dayInNumber==2?
        'Tuesday':dayInNumber==3?
        'Wednesday':dayInNumber==4?
        'Thursday':dayInNumber==5?
        'Friday':'Saturday';
// for month
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
if(hours<10)
        document.getElementById("hour").innerHTML="0"+currentDate.getHours();
else
        document.getElementById("hour").innerHTML=currentDate.getHours();      

// timer functionality
var timer = document.getElementById('timer');
   var startbtn = $('#start');
   var stopbtn = $('#stop');
   var resetbtn = $('#reset');
   var watch = new Stopwatch(timer);
   function reset(){
        var sec=0, min=0, hour=0;
        $('#timer').html(hour + ":" + min + ":" + sec);
      };
   // start and stop timer
   function start() {
     watch.start();
   }
   function stop() {
     watch.stop();
   }
   startbtn.click(function() {
     start();
   });
   // calling stop function
   stopbtn.click(function() {
     stop();
   });
   // calling reset function
//    resetbtn.click(function(){
//      reset();
//    });
   function Stopwatch(elem) {
     var time = 0;
     var offset;
     var interval;
     function update() {
       if (this.isOn) {
           time += delta();
       }
       elem.textContent = timeFormatter(time);
     }
     function delta() {
       var now = performance.now();
       var timePassed = now - offset;
       offset = now;
       return timePassed;
     }
     function timeFormatter(time) {
       time = new Date(time);
       var hours = time.getHours().toString();
       var minutes= time.getMinutes().toString();
       var seconds = time.getSeconds().toString();
       if (hours.length < 2) {
         hours = '0' + hours;
       }
       if (minutes.length < 2) {
         minutes = '0' + minutes;
       }
       while (seconds.length < 2) {
         seconds = '0' + seconds;
       }
       hours= hours-5;
       minutes = minutes-30;
       return hours + ':' + minutes + ':' + seconds;
     }
     this.start = function() {
       interval = setInterval(update.bind(this), 10);
       offset = performance.now();
       this.isOn = true;
     };
     
     this.stop = function() {
       clearInterval(interval);
       interval = null;
       this.isOn = false;
     };
    
// Jquery function
$(function(){
        $(".musicScreen").hide();
        $(".timerScreen").hide();
        $(".menu").hide();
        $(".messageScreen").hide();

        $(".fa-home,.homeDisplay").click(function() {
              $(".menu").toggle();    
              $(".timerScreen").hide();    
              $(".musicScreen").hide();
              $(".messageScreen").hide();
              $(".homeDisplay").toggle();

        })
        $("#music").click(function() {
                $(".musicScreen").show();        
          })
        $("#message").click(function() {
                 $(".messageScreen").show();        
        })
        $("#clock").click(function() {
                $(".menu").hide();
                $(".timerScreen").show(); 
                $("#stop").hide();   
             
        })
        $("#start").click(function(){
                $("#stop").toggle();
                $("#start").hide();
        })
        $("#stop").click(function(){
                $("#start").toggle();
                $("#stop").hide();
        })
         
          
})
        

        }
        // $(".fa-home").click(function() {
        //         $(".menu").toggle();        
        //         $(".musicScreen").hide();
        //         $(".homeDisplay").toggle();

        //   })
