document.querySelector('.task_1').addEventListener('click', function(){
	var first = 0;
	var second = 0;


	while(1){

		first = parseInt(prompt('Введите первое число'));
		second = parseInt(prompt('Введите второе число'));


		if(!isNaN(first) && !isNaN(second)){
			if(first > second){
				alert('Второе число меньше');
			}else if(second > first){
				alert('Первое число меньше');
			}else{
				alert('Числа равны');
			}
		}else{
			if(isNaN(first) && isNaN(second)){
				alert('Оба ввода не числа');
			}else if(isNaN(second)){
				alert('Второй ввод – не число');
			}else{
				alert('Первый ввод – не число');
			}
			return;
		}
	}

	
});