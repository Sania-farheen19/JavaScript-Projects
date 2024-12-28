var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://media.istockphoto.com/id/1740994754/photo/elementary-age-school-students-walking-on-country-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=7j_gGB27gCeerHP_PGgL6qrgP25kVH9iY0f5mWIdDRg="},
    {dp:"https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVkZHl8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1669632824466-09b2c595aa4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVkZHl8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1690292620204-fe22c3c00a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1667326488721-55c127031b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1677907565224-661ced8e5dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1628029799784-50d803e64ea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNreSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1511294952778-165d813e9eeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1501691223387-dd0500403074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"},
]
var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img  id="${idx}" src="${elem.dp}" alt="">   
              </div>`

})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display= "block";
document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#full-screen").style.display= "none"; 
},3000);
})