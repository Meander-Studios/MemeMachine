window.onload = function() {
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
					wRatio = window.innerWidth / img.width;
					hRatio = (window.innerHeight*0.875) / img.height;
					if(img.height!=0){
						if(wRatio<hRatio){
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*wRatio) + "px; height: " + (img.height*wRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*wRatio)/2) + "px;");
						}else if(wRatio>hRatio){
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*hRatio) + "px; height: " + (img.height*hRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*hRatio)/2) + "px;");
						}else{
							form.setAttribute("style","display: block; background-image: url('" + reader.result + "'); width: " + (img.width*wRatio) + "px; height: " + (img.height*wRatio) + "px; margin-left: " + ((window.innerWidth)/2-(img.width*wRatio)/2) + "px;");
						}
						document.getElementById("editForm").setAttribute("style","display: block");
						document.getElementById("divspacer").setAttribute("style","display: none; visibility: hidden;");
						document.getElementById("fileChooser").setAttribute("style","display: none; visibility: hidden;");
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