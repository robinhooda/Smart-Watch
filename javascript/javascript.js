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
var monthInNumber=currentDate.getMonth()-1;
var dateInNumber=currentDate.getDate();
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
    if(minute<10)
            document.getElementById("mins").innerHTML="0"+currentDate.getMinutes();
    else
            document.getElementById("mins").innerHTML=currentDate.getMinutes();
    document.getElementById("day").innerHTML=dayInString;   
    if(dateInNumber<10)
            document.getElementById("month").innerHTML=monthInString+"- 0"+dateInNumber;
    else
            document.getElementById("month").innerHTML=monthInString+"-"+dateInNumber;
    
    

    