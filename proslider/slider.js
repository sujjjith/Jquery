(function($) {
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img')
		imgWidth = imgs[0].width,
		imgsLen  = imgs.length,
		current  = 1,
		totalImgsWidth = imgWidth * imgsLen
	;
	console.log(totalImgsWidth, imgsLen, imgWidth, imgs, sliderUL)

	$('#slider-nav').show().find('button')
		.on('click', function(){
			var direction  = $(this).data('dir'),
				loc = imgWidth; // 600

		( direction === 'next' ) ? ++current : --current;
		console.log(current);

		if( current === 0 ) {
			current = imgsLen;
			loc = totalImgsWidth - imgWidth;
		}
		});
})(jQuery);