window.onload = function() {
	var buttons = document.getElementsByTagName("button");
	buttons[0].addEventListener('click', function() {
	    fontSize(5);
	});
	buttons[1].addEventListener('click', function() {
	    fontSize(-5);
	});
	buttons[2].addEventListener('click', function() {
	    borderSize(0.25);
	});
	buttons[3].addEventListener('click', function() {
	    borderSize(-0.25);
	});
	buttons[4].addEventListener('click', function() {
	    borderToggle()
	});
	buttons[5].addEventListener('click', function() {
	    resetData();
	});
	var fileInput = document.getElementById('fileInput');
	var form = document.getElementById('theForm');

	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var imageType = /image.*/;

		if (file.type.match(imageType)) {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e) {
				var img = new Image();
				var wRatio;
				var hRatio;
				var checkValidateImg = setInterval(function(){
					img.src = reader.result;
					if(img.height!=0){
						document.getElementById("editForm").setAttribute("style","display: block");
						document.getElementById("divspacer").setAttribute("style","display: none; visibility: hidden;");
						document.getElementById("fileChooser").setAttribute("style","display: none; visibility: hidden;");
						wRatio = window.innerWidth / img.width;
						hRatio = (window.innerHeight-((document.getElementById("editForm").clientHeight))) / img.height;
						if(wRatio<hRatio){
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*wRatio) + "px; height: " + (img.height*wRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*wRatio)/2) + "px;");
						}else if(wRatio>hRatio){
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*hRatio) + "px; height: " + (img.height*hRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*hRatio)/2) + "px;");
						}else{
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*wRatio) + "px; height: " + (img.height*wRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*wRatio)/2) + "px;");
						}
						clearInterval(checkValidateImg);
					}
				},1);
			}
		}else{
			alert("ERROR");
		}
	});
}
function borderToggle(){
	if(document.getElementById('top-meme-text').getAttribute('style')=='border: none;' && document.getElementById('bottom-meme-text').getAttribute('style')=='border: none;') {
		document.getElementById('bottom-meme-text').setAttribute('style','border-bottom: 1px solid black; border-top: 1px solid black;');
		document.getElementById('top-meme-text').setAttribute('style','border-bottom: 1px solid black; border-top: 1px solid black;');
	}else{
		document.getElementById('bottom-meme-text').setAttribute('style','border: none;');
		document.getElementById('top-meme-text').setAttribute('style','border: none;');
	}
}

var currentSize = 275;
var currentBorderSize = 2.75;
function fontSize(increaseVal){
	currentSize = currentSize + increaseVal;
	document.getElementById("theFontStyleTag").innerHTML = ("input[type=text]{font-size: " + currentSize + "%;}");
}
function borderSize(increaseVal){
	currentBorderSize = currentBorderSize + increaseVal;
	document.getElementById("theBorderStyleTag").innerHTML = ("input[type=text]{-webkit-text-stroke-width: " + currentBorderSize + "px;}");
}
function resetData(){
	currentBorderSize = 2.75;
	document.getElementById("theBorderStyleTag").innerHTML = ("input[type=text]{-webkit-text-stroke-width: 2.75px;}");
	currentSize = 275;
	document.getElementById("theFontStyleTag").innerHTML = ("input[type=text]{font-size: 275%;}");
	document.getElementById('bottom-meme-text').setAttribute('style','border-bottom: 1px solid black; border-top: 1px solid black;');
	document.getElementById('top-meme-text').setAttribute('style','border-bottom: 1px solid black; border-top: 1px solid black;');
}