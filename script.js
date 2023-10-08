function calculateChange(event) {
    event.preventDefault();
    
    
         const routedistance1=document.getElementById('routeDistance');
         const routeDistance2=routedistance1.value;
         const routetimes1=document.getElementById('routetimes');
         const routetimes2=routetimes1.value;
         const years_passed=document.getElementById('years');
         const years2=years_passed.value;
         if(years2>5){
            document.querySelector('.show1').innerHTML="Traction system repair required ! Warning";
         }else{
            document.querySelector('.show1').innerHTML="Repair is not required ";
         }
         const dis=routeDistance2*routetimes2;
         if(dis>500000){
            document.querySelector('.show2').innerHTML="Get the Gearbox checked ! Warning";
         }else{
            document.querySelector('.show2').innerHTML="There are many more miles you can safely drive.";
         }
         if(dis>35000){
            document.querySelector('.show3').innerHTML="Get the brakes checked ! Warning";
         }else{
            document.querySelector('.show3').innerHTML="No need to change the brakes";
         }
         
     const changed1= document.getElementsByName('change');
     var done;
    for (var i = 0; i < changed1.length; i++) {
                if (changed1[i].checked){
                    done=changed1[i].value;
                    break;
                }
                        
            
        }
    if (done ==="no") {
        
        const routedistance1=document.getElementById('routeDistance');
         const routeDistance2=routedistance1.value;
         const routetimes1=document.getElementById('routetimes');
         const routetimes2=routetimes1.value;
         const front_distance_miles=20000; //max front distance
         const rear_distance_miles=15000;

         const travelled=routeDistance2*routetimes2;

         if(travelled>=front_distance_miles){
                document.querySelector('.show4').innerHTML="Get the front tyres and rear tyres repaired";
         }
         if(travelled<front_distance_miles && travelled>=rear_distance_miles){
            document.querySelector('.show4').innerHTML="Get the rear tyres repaired but no need to change the front tyres.";
         }
         if(travelled<rear_distance_miles){
            document.querySelector('.show4').innerHTML="It is safe to use the vehicle . No need to change tyres."
         }
        
    }
    else{
            const inputDate = new Date(document.getElementById("tyrechange").value);

            // Get the current date
            const currentDate = new Date();

            // Calculate the difference in milliseconds
            const timeDifference = currentDate - inputDate;

            // Calculate the number of days
            const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const yearspassed=Math.floor(daysPassed/365);
            if(yearspassed>6){
                document.querySelector('.show4').innerHTML="It would be a good choice to get the vehicle serviced.";
            }else{
                document.querySelector('.show4').innerHTML="It is safe to use the vehicle."
            }

            // Display the result
        
        }


    }
    const changeForm = document.getElementById('ChangeForm');
    changeForm.addEventListener('submit', calculateChange);
    
