document.querySelector('.task_3').addEventListener('click', function(){
	var i = parseInt(prompt('Введите i: '));

	if(i <= 0 || isNaN(i)){
		throw new Error('Некорректный ввод!');		
	}

	var first = 0;
	var second = 1;
	var temp;

	for(var index = 1; index <= i; index++){
		temp = second;
		second += first;
		first = second;
	}

	alert(second);
});