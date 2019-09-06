            // let date = new Date();   
            // let dayInNumber= date.getDay();
            // let dayInString = dayInNumber==0?
            // 'Sunday':dayInNumber==1?
            // 'Monday':dayInNumber==2?
            // 'Tuesday':dayInNumber==3?
            // 'Wednesday':dayInNumber==4?
            // 'Thursday':dayInNumber==5?
            // 'Friday':'Saturday';
            // let hours = date.getHours();
            // let minutes = date.getMinutes();
            // if(minutes<10)
            //      minutes = '0'+minutes;
            // document.getElementsByClassName("date")[0]
            // .innerHTML = dayInString+" "+hours+":"+minutes+" "+meridiem;
            // document.getElementsByClassName("weather")[0]
            // .innerHTML = arr.weather;
            // document.getElementsByClassName("degree")[0]
            // .innerHTML = arr.degree;
            
//         }
//     })
// }

// $(function(){
//     $( ".musicScreen" ).hide();
//     $( ".homeScreen .homeButton" ).click(function() {
//         $( ".musicScreen" ).show();
//         // $( ".watch-screen" ).css({'background-color':'#222831','background-image':'none'});
//     })
//   })

let currentDate = new Date();
let minute= currentDate.getMinutes();
let dayInNumber= currentDate.getDay();
let dayInString = dayInNumber==0?
        'Sunday':dayInNumber==1?
        'Monday':dayInNumber==2?
        'Tuesday':dayInNumber==3?
        'Wednesday':dayInNumber==4?
        'Thursday':dayInNumber==5?
        'Friday':'Saturday';
    document.getElementById("hour").innerHTML=currentDate.getHours();
    if(minute<10)
    {
        document.getElementById("mins").innerHTML="0"+currentDate.getMinutes();
    }else
        document.getElementById("mins").innerHTML=currentDate.getMinutes();
    document.getElementById("day").innerHTML=dayInString;
    
    

    