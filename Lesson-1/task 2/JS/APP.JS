function animation(args, elem) { 
	var $ = {
		radius : 250, 
		speed :20 
	}
	var f = 0;
	var s = 2 * Math.PI / 180; 
	setInterval(function() { // функция движения 
		f += s; 
		  elem.style.left =  235 + $.radius * Math.sin(f)  + 'px'; 
		  elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
	}, $.speed)
}