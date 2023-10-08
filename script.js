
function calculateChange(event) {
    event.preventDefault();
    const change1= document.getElementById('change');
    const change2=change1.value;
    console.log(change2);
    const routedistance1=document.getElementById('routeDistance');
         const routeDistance2=routedistance1.value;
         const routetimes1=document.getElementById('routetimes');
         const routetimes2=routetimes1.value;
         const years_passed=document.getElementById('years');
         const years2=years_passed.value;
         if(years2>5){
            document.querySelector('.show1').innerHTML="Traction system repair required ! Warning";
         }else{
            document.querySelector('.show1').innerHTML="Safe!";
         }
         const dis=routeDistance2*routetimes2;
         if(dis>500000){
            document.querySelector('.show2').innerHTML="Get the Gearbox checked ! Warning";
         }else{
            document.querySelector('.show2').innerHTML="Safe!";
         }
         if(dis>35000){
            document.querySelector('.show3').innerHTML="Get the brakes checked ! Warning";
         }else{
            document.querySelector('.show3').innerHTML="Safe!";
         }
         

    if (change2 ==="no") {
        const tyreChange1 = document.getElementById('tyrechange');
        const tyreChange2=tyreChange1.value;
        const routedistance1=document.getElementById('routeDistance');
         const routeDistance2=routedistance1.value;
         const routetimes1=document.getElementById('routetimes');
         const routetimes2=routetimes1.value;
         const front_distance_miles=20000; //max front distance
         const rear_distance_miles=15000;

         const travelled=routeDistance2*routetimes2;
         if(travelled>=front_distance_miles){
                document.querySelector('.show1').innerHTML="Get the front tyres repaired!";
         }
         if(travelled<front_distance_miles && travelled>=rear_distance_miles){
            document.querySelector('.show1').innerHTML="Get the rear tyres repaired!";
         }
         if(travelled<rear_distance_miles){
            document.querySelector('.show1').innerHTML="No need to worry"
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

            // Display the result
            //document.getElementById("result").innerHTML = `Days passed: ${daysPassed}`;  ignore
        }
}
const changeForm = document.getElementById('ChangeForm');
changeForm.addEventListener('submit', calculateChange);
