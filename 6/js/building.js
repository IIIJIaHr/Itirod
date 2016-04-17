document.querySelector('.task_2').addEventListener('click', function(){
	var countOfFloors = parseInt(prompt('Введите кол-во этажей: '));
	var countOfFlats = parseInt(prompt('Введите кол-во квартир: '));
	var countOfPorches = parseInt(prompt('Введите кол-во подъездов: '));
	var flatNumber = parseInt(prompt('Введите номер квартиры: '));

	if(isNaN(countOfFloors) || isNaN(countOfFlats) || isNaN(countOfPorches) || isNaN(flatNumber)){
		throw new Error('Некорректный ввод!');
	}

	alert(Math.ceil( flatNumber / (countOfFloors*countOfFlats) ));
});