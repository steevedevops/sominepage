$(document).ready(function ($) {
	function animateElements() {
		$('.progressbar').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			var percent1 = $(this).find('.circle1').attr('data-percent');
			var percent2 = $(this).find('.circle2').attr('data-percent');
			var percent3 = $(this).find('.circle3').attr('data-percent');
			var percent4 = $(this).find('.circle4').attr('data-percent');
			var percent5 = $(this).find('.circle5').attr('data-percent');
			var percent6 = $(this).find('.circle6').attr('data-percent');
			
			/*var percentage1 = parseInt(percent1, 10) / parseInt(100, 10);
			var percentage2 = parseInt(percent2, 10) / parseInt(100, 10);
			var percentage3 = parseInt(percent3, 10) / parseInt(100, 10);
			var percentage4 = parseInt(percent4, 10) / parseInt(100, 10);
			var percentage5 = parseInt(percent5, 10) / parseInt(100, 10);
			var percentage6 = parseInt(percent6, 10) / parseInt(100, 10);*/
			
			var animate = $(this).data('animate');

			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				
				$(this).data('animate', true);
				$(this).find('.circle1').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent1 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle2').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent2 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle3').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent3 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle4').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent4 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle5').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent5 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle6').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent6 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();
			}else{
				$(this).data('animate', true);
				$(this).find('.circle1').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent1 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle2').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent2 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle3').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent3 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle4').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent4 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle5').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent5 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f14'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();

				$(this).find('.circle6').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent6 / 100,
					size: 180,
					thickness: 22,//Grossor
					emptyFill: "rgba(0,0,0, .2)",
					fill: {
						color: '#fb4f30'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue*100).toFixed(0) + " %");//toFixed sao as casa decimais osea quantidade de casa decimal
				}).stop();
			}
		});		
	}
	animateElements();
	$(window).scroll(animateElements);
}); 

