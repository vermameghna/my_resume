//    Handling smooth scroll of navigation section  


var navMenuTags = document.querySelectorAll('.nav-menu a');

// for(var i =0;i<navMenuTags.length;i++)
// {
// 	navMenuTags[i].addEventListener('click' , function(event)
// 	{
//        event.preventDefault();

//       var targetSectionID = this.textContent.trim().toLowerCase();
//       var targetSection = document.getElementById(targetSectionID);
      

//         var interval = setInterval(function(){
//         	var targetSectionCoordinates = targetSection.getBoundingClientRect();
//         	if(targetSectionCoordinates.top <=0){
//         		clearInterval(interval);
//         		return;
//         	}
//         	window.scrollBy(0,60);
//         } ,20);
//     });

// }


//Handling animation on skills progress box

//var skillbox = document.getElementsByClassName("progress");
//console.log(skillbox);

//var progressBar = document.querySelectorAll(".progress > div");
//console.log(progressBar);


// window.addEventListener("scroll" , checkScroll);
// var animationDone = false;

// function initialize(box){
// 	box.style.width = 0 + "%";

// }

// function fillBar(box){
// 	var target = box.getAttribute("data-bar-width");
// 	var currentWidth = 0;
// 	var interval = setInterval(function(){
// 		if(currentWidth > target)
// 		{
// 			clearInterval();
// 			return;
// 		}
// 		currentWidth++;
// 		box.style.width = currentWidth + "%";
// 	} , 10);



// }

// function checkScroll(){

// 	for(let box of skillbox)
// 	{
// 		let coordinates = box.getBoundingClientRect();
// 		//console.log(coordinates);
// 		if(coordinates.top < window.innerHeight && !animationDone){
// 			console.log("scroll");
// 			animationDone = true;
// 			fillBar(box);
// 		}
// 		else if(coordinates.top > window.innerHeight)
// 		{
// 			animationDone = false;
// 			initialize(box);
// 		}
// 	}

// }

























var skillsContainer = document.getElementById("skills-container");
var progressBars = document.querySelectorAll(".progress > div")
//console.log(progressBars);
window.addEventListener("scroll" , checkScroll);

var animationDone = false;
 

var skillbox = document.getElementsByClassName("progress");
//console.log(skillbox);

function initialize()
{

	for(let bar of progressBars)
	{

		bar.style.width = 0 + "%";
	}
}

initialize();

function fillBars(){
	for(let bar of progressBars)
	{
		let target = bar.getAttribute('data-bar-width');
		let currentWidth = 0;
		let  interval = setInterval(function(){
			if(currentWidth > target)
			{
				clearInterval();
				return;
			}
			currentWidth ++;
			bar.style.width = currentWidth + "%";
		} , 10);

	}
}



function checkScroll()
{
	var coordinates = skillsContainer.getBoundingClientRect();
	if(coordinates.top < window.innerHeight  && !animationDone)
	{
     
     animationDone = true; 
	//console.log("scroll");
	fillBars();

	}
	else if(coordinates.top > window.innerHeight ){
		     animationDone = false; 
		     initialize();

	}

}