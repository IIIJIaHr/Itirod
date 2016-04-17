document.querySelector('.task_4').addEventListener('click', function(){
	var month = parseInt(prompt('Введите месяц(1-12): '));
	var day = parseInt(prompt('Число в этом месяц: '));
	var week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

	if(isNaN(month) || isNaN(day)){
		throw new Error('Некорректный ввод!');
	}

	var d = new Date(2016, month - 1, day);


	alert(week[d.getDay()]);
});