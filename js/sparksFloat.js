$(function(){
	$(window).on('load',function(){

	var floatObj = new window.demichan.FloatObj({
		target: '.layout-fixedObj',
		duration: 20000,
		num: 50,
		images: [
		'assets/image/index/spark.png',]
	});

	floatObj.start();

	});
});