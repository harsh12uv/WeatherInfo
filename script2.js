let lat=document.getElementById("lat");
let longg=document.getElementById("longg");

let latitude=JSON.parse(localStorage.getItem('latitude'));
let longitude=JSON.parse(localStorage.getItem('longitude'));

lat.innerHTML=`Lat:${latitude}`;
longg.innerHTML=`Long:${longitude}`
// console.log(latitude,longitude)
// function my_map_add() {
//     var myMapCenter = new google.maps.LatLng(latitude, longitude);
//     var myMapProp = {center:myMapCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
//     var map = new google.maps.Map(document.getElementById("my_map_add"),myMapProp);
//     var marker = new google.maps.Marker({position:myMapCenter});
//     marker.setMap(map);
//     }

//     my_map_add();

    let t=document.getElementById("try");
    t.innerHTML=`<iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed" width=80% height="300px" frameborder="0" style="border:0"></iframe>`