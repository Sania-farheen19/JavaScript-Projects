function updateIDcard(){
    document.getElementById("schoolNameVal").innerText = document.getElementById('schoolname').value;
    document.getElementById("studentNameVal").innerText = document.getElementById('studentname').value;
  document.getElementById("dateofbirthVal").innerText = document.getElementById('dateofbirth').value;
   document.getElementById("classVal").innerText= document.getElementById('class').value;
    document.getElementById("rollnumberval").innerText = document.getElementById('rollnumber').value;
    document.getElementById("contactnumberVal").innerText = document.getElementById('contactnumber').value;
    
    
}
function PrintIdcard(){
  window.print();
}