function calculate()
{
    p = document.getElementById("Principal").value;
    t = document.getElementById("Time").value;
    r = document.getElementById("Rate").value;
    result = document.getElementById("result");
    if(p==""||t==""||r==""){
        alert("plz fill the complete details");
    }
    else{
        var si=p*t*r/100.0;
    }
    
    result.innerHTML = "The interest is " + (p*t*r/100);
}
function resetcalculator(){
    let classid=document.getElementsByClassName("si");
    for(let i=0;i<classid.length; i++){
        classid[i].value="";
    }
   
    document.getElementById("result").innerHTML="";
}