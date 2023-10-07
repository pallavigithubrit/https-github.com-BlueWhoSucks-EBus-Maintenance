
function calculateChange(event) {
    event.preventDefault();
    const change1= document.getElementById('change');
    const change2=change1.value;
    console.log(change2);
    

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
                document.querySelector('.show').innerHTML="Get the front tyres repaired!";
         }
         if(travelled<front_distance_miles && travelled>=rear_distance_miles){
            document.querySelector('.show').innerHTML="Get the rear tyres repaired!";
         }
         if(travelled<rear_distance_miles){
            document.querySelector('.show').innerHTML="No need to worry"
         }
    

}
const changeForm = document.getElementById('ChangeForm');
        changeForm.addEventListener('submit', calculateChange);
