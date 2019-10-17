/*function makeDisappear(){
	document.querySelector("#input").innerText = "";
	document.querySelector("#output").innerText 
}*/
function display(inputValue){
	document.querySelector("#output").innerText = "";
	document.querySelector("#input").style.fontStyle = "italic";
	document.querySelector("#input").innerText += inputValue;
}
function equalTo(){
		document.querySelector("#output").innerText = "";
	var result = document.querySelector('#input').innerText;
	var ourOutput= eval(result);
	document.querySelector("#output").style.fontWeight = "bold";
	document.querySelector("#output").style.fontStyle = "italic";
		if(ourOutput === Infinity){
			document.querySelector("#output").innerText = "Positive infinity";
		}
		else if(ourOutput === NaN){
			console.log(ourOutput);
			document.querySelector("#output").inssnerText = "Please do not divide with zero";
		}
		else if(ourOutput === -Infinity){
			document.querySelector("#output").innerText = "Negative infinity";
		}
		else{	
				var stringOfOurOutput = ourOutput.toString();

				console.log(typeof(stringOfOurOutput));
				if(stringOfOurOutput.length > 15){
			document.querySelector("#output").innerText = ourOutput.toExponential(2);
			}else{
			document.querySelector("#output").innerText = ourOutput.toLocaleString("en");
			}
		}
}
function clearer(){
	var prevalue = document.querySelector("#input").innerText;
	document.querySelector("#input").innerText = prevalue.substr(0,prevalue.length-1);
}
function clearEverything(){
	document.querySelector("#input").innerText = "";
	document.querySelector("#output").innerText = "";
}
//var string = "∞"
//var num = eval(string);
//console.log();

document.querySelector(".equalTo").addEventListener("click",function(){
	equalTo();
	document.querySelector("#input").innerText = "";
});

//This changes the input size after too much insertions
/*function changeInputSize(){
		let display = document.getElementById("#input").innerText;
		//if()
	//document.getElementById("#input").style.fontSize = "9px";
}
*/
//document.querySelector(".nine").addEventListener("click",changeInputSize);

