//this is a comment
var picRandom = ["images/pic/pic1.jpg", "images/pic/pic2.jpg", "images/pic/pic3.jpg", "images/pic/pic4.jpg", "images/pic/pic5.jpg", "images/pic/pic6.jpg", "images/pic/pic7.jpg", "images/pic/pic8.jpg", "images/pic/pic9.jpg"]


$("#question").click(navClick);

function navClick(event) {
	event.preventDefault();
	//scroll up by li height
	var height = $("li").height();	
	//.html to modify the source "<li src=" + liPic + ""
	var liPic1 = Math.floor((Math.random()*(picRandom.length - 1)));
	if(0 <= liPic1 > (picRandom.length/2)){ 
		var liPic2 = liPic1 + 1
	} else {
		var liPic2 = liPic1 - 1;
	}
	//append li	
	var myLi = "<img src=" + picRandom[liPic1] + "><img src=" + picRandom[liPic2] + ">";
	$("ul").append("<li>" + myLi + "</li>");
	//replace html in "#question"
	$("#question").html("AND THEN?");
	window.scrollBy(0, height);
	//repeat 10 times then replace images and text with final
}


//var picRandom = li Math.floor((Math.random() * 10) array length -1);

//define an array of picture paths

//===> NOTES/TRIES
 