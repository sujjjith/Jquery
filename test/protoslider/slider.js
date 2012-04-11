function Slider(container, nav){

	this.container = container;
	this.nav 	   = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width; // 600
	this.imgsLength = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};

Slider.prototype.getCurrent = function( direction ) {
	
	var position = this.current;
	position += ( ~~( direction === 'next') || -1);
	this.current = ( position < 0 ) ? this.imgsLength - 1 : position % this.imgsLength;
	
	console.log(this.current);
	return position;
};

// Create a Slider Class, its parameters are the container and the navigation
// we will be taking the container and sliding it by adjusting its margin
