let buttn=document.getElementById('btn')
let ans=document.getElementById('info')

console.log(buttn);
buttn.addEventListener("click",getLocation);
function myfunction(){
    // 
    console.log("button clicked")
}
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
       
    } else { 
      alert("location not granted");
  }
}
function showPosition(position) {
    // ans.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    localStorage.setItem("longitude",position.coords.longitude);
    localStorage.setItem("latitude",position.coords.latitude);

  }
  

