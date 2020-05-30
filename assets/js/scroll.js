$('a[href^="#"]').click(function(){
	//Сохраняем значение атрибута href в переменной:
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 600);
	return false;
	});