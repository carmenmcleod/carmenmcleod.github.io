//this is a comment
var picRandom = ["images/pic/pic1.jpg", "images/pic/pic2.jpg", "images/pic/pic3.jpg", "images/pic/pic4.jpg", "images/pic/pic5.jpg", "images/pic/pic6.jpg", "images/pic/pic7.jpg", "images/pic/pic8.jpg", "images/pic/pic9.jpg", "images/pic/pic10.jpg", "images/pic/pic11.jpg", "images/pic/pic12.jpg", "images/pic/pic13.jpg", "images/pic/pic14.jpg", "images/pic/pic15.jpg", "images/pic/pic16.jpg", "images/pic/pic17.jpg", "images/pic/pic18.jpg", "images/pic/pic19.jpg", "images/pic/pic20.jpg", "images/pic/pic21.jpg", "images/pic/pic22.jpg", "images/pic/pic23.jpg", "images/pic/pic24.jpg"]


$("#question").click(navClick);

function navClick(event) {
	event.preventDefault();
	//scroll up by li height
	var height = ($("li").height());
	var count = $("li").size();	
	//.html to modify the source "<li src=" + liPic + ""
	var liPic1 = Math.floor((Math.random()*(picRandom.length - 1)));
	var liPic2 = Math.floor((Math.random()*(picRandom.length - 1)));
	// if(0 <= liPic1 > (picRandom.length/2)){ 
	//  	var liPic2 = liPic1 + 1
	//  } else {
	//  	var liPic2 = liPic1 - 1;
	//  }
	//append li	
	var myLi = "<img src=" + picRandom[liPic1] + "><img src=" + picRandom[liPic2] + ">";
	if(count<13){
		$("ul").append('<li class="picRandom">' + myLi + "</li>");
	}
	//replace html in "#question"
	$("#question").html("AND WHAT'S AFTER THAT?");
	window.scrollBy(0, 750);
	//repeat then replace images and text with final
	if(count>=2){
		$("#question").html("AND AFTER THAT?");
		window.scrollBy(0, 750);
	}
	if(count>=6){
		$("#question").html("AND THEN?");
		window.scrollBy(0, 750);
	}
	if(count>=13){
		$("#question").html("JUST NOW");
		window.scrollBy(0, 750);
	}

}


//var picRandom = li Math.floor((Math.random() * 10) array length -1);

//define an array of picture paths

//===> NOTES/TRIES
 