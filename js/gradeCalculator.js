function calculateGrade(){
    let project=document.getElementById("project").value;
    let quiz=document.getElementById("quiz").value;
    let midterm=document.getElementById("midterm").value;
    let finals=document.getElementById("finals").value;
    let activities=document.getElementById("activities").value;
    let remarks;

    let sum=parseCalculate(project)+parseCalculate(quiz)+parseCalculate(midterm)+parseCalculate(finals)+parseCalculate(activities);
    let average=(sum);
    if (average>100){
        alert("The total grade should not be greater than 100%");
        return;
    }
    if(average>=75){
        //console.log("Passed");
        remarks="Passed";
    }else{
        //console.log("Failed");
        remarks="Failed";
    }
    const averageElement = document.getElementById("average");
    const remarksElement = document.getElementById("remarks");

    if (averageElement && remarksElement) {
    averageElement.textContent = average+" %";
    remarksElement.textContent = remarks;
    } else {
    console.error("Elements with IDs 'average' or 'remarks' not found.");
    }
    //console.log(average);
}

function parseCalculate(num){
    let p=parseFloat(num);
    return p;
}
