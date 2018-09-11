import $ from "jquery";
import 'bootstrap'; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';


window.onload = function(){
	
	document.getElementById("overlay").style.display = "block";
	document.getElementById("overlay").style.overflow = "hidden";
	
	window.addEventListener("scroll", updatePosition, false);
	window.addEventListener("resize", updatePosition, false);
	
	scrollingNav();
	getYPosition();
	updatePosition();
	
};
	
	// add scroll effect and use yPosition of elements
	function scrollingNav() {
		var myButtons = document.getElementsByTagName("button");
		
		var aboutHeight = getYPosition(document.getElementById('about'));
		var productHeight = getYPosition(document.getElementById('product'));
		var gallerytHeight = getYPosition(document.getElementById('gallery'));
		var contacttHeight = getYPosition(document.getElementById('contact'));
		
		var yPosition = [aboutHeight.y, productHeight.y, gallerytHeight.y, contacttHeight.y];
		
		for (var i = 0; i < myButtons.length; i++){
			document.getElementsByTagName("button")[i].addEventListener('click', function(e){
				if(e.target.innerText === "About"){
					window.scroll({
						top: yPosition[0], 
						left: 0, 
						behavior: "smooth"
					});
				}
				if(e.target.innerText === "Why our Products?"){
					window.scroll({
						top: yPosition[1], 
						left: 0, 
						behavior: "smooth"
					});
				}
				if(e.target.innerText === "Gallery"){
					window.scroll({
						top: yPosition[2], 
						left: 0, 
						behavior: "smooth"
					});
				}
				if(e.target.innerText === "Contact"){
					window.scroll({
						top: yPosition[3], 
						left: 0, 
						behavior: "smooth"
					});
				}
				/* uncomment for testing purposes
					console.log(e);
				*/
			});
		}
	}
	
	//get yPosition integer of elements
	function getYPosition(el) {
		var yPos = 0;
		
		while (el) {
			if (el.tagName == "BODY") {
				// deal with browser quirks with body/window/document and page scroll
				var yScroll = el.scrollTop || document.documentElement.scrollTop;
				yPos += (el.offsetTop - yScroll + el.clientTop);
			} else {
				// for all other non-BODY elements
				yPos += (el.offsetTop - el.scrollTop + el.clientTop);
			}
			el = el.offsetParent;
		}
		return {
			y: yPos
		};
	}
	
	//updates yPosition when user scrolls or rezises
	function updatePosition() {
		
		scrollingNav();
		
		
		var wScroll = window.pageYOffset;
		console.log(wScroll);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	window.addEventListener("load", function(e) {
		document.getElementById("overlay").style.display = "none";
		console.log("All resources finished loading!");
	});
	
	
	