
var input=document.getElementById("input");



var button=document.getElementById("button")

var city=document.getElementById("city");

var image=document.getElementById("image");
var lead=document.getElementById("lead");

var tem=document.getElementById("tem")



button.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+' &appid=7f2383183bb5f50f85bb306f19f9d561')
    .then(response=>response.json())
    .then(dat=>{console.log(dat)
    
    
    city.innerText=input.value;


    tem.innerText=dat['main']['temp'];
    lead.innerText=dat['weather'][0]['main']
    
    })



})
