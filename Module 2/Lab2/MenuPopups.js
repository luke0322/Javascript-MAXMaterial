var popdiv = document.createElement("div");
popdiv.id = "menumessage";
popdiv.textContent = "default text for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1px solid white";
popdiv.style.borderRadius = "10px";
popdiv.style.backgroundColor = "black";
popdiv.style.position = "absolute";
popdiv.style.padding = "10px";
popdiv.style.display = "none";
document.body.appendChild(popdiv);

var tabs = document.querySelectorAll("#topNav a");

for (var index =  0; index < tabs.length; index++) {
	var tab = tabs[index];
	tab.onmouseenter = function(){ShowPopup(this)}
	tab.onmouseleave = function(){HidePopup()}
}

function ShowPopup(tab){
	var popdiv = document.getElementById("menumessage");
	popdiv.style.left = tab.offsetLeft + "px";
	popdiv.style.top = (tab.offsetTop + 30) + "px";
	popdiv.style.display = "block";

	var popuptext = "";
switch(tab.textContent){
	case "Home":
		popuptext = "Hey whats up";
		break;
	case "Toys":
		popuptext = "check out our <em>toys</em>!";
		break;
	case "Sports":
		popuptext = "all you espn lovers out there";
		break;
	default:
		popuptext = "";
		break;
}
if (popuptext != ""){
	popdiv.innerHTML = popuptext;
	popdiv.style.display = "block";
	}
}

function HidePopup(){
	var popdiv = document.getElementById("menumessage");
	popdiv.style.display = "none";
}

