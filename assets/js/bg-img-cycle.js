// let changeBackgroundImage = ()=>{
//     setTimeout(() => {
//         // document.getElementById('banner').style.backgroundImage="url('/images/ofCLDI/r-0A5A1358.jpg')"; 
//         console.log('hiiii');
//         document.getElementById('banner').style.backgroundImage='linear-gradient(90deg, rgba(58,58,58,0.6), rgba(58,58,58,0.6)),url("../../images/gathering-3.jpg")'; 
//     }, 3000);
    
   
// };
// changeBackgroundImage();


var bgImageArray = ["1.jpg","2.jpg","3.jpg","4.jpg"],
base = "../../images/gathering-",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 

        document.getElementById('banner').style.backgroundImage=`linear-gradient(90deg, rgba(58,58,58,0.6), rgba(58,58,58,0.6)),url("${base}${bgImageArray
        [k]}")`

            // document.getElementById('banner').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			// document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();