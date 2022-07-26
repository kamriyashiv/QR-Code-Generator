var load=document.getElementById("load");
var button=document.getElementById("button");
var Qrimg=document.getElementById("Qr-img");

 
button.addEventListener("click", ()=>{
	var urlBox=document.getElementById("urlBox").value;
	
	load.style.display="block";
	 Qrimg.onload=function(){
		load.style.display="none";
	}
	
	var api= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlBox}`;
	 Qrimg.src = api;
	
});

