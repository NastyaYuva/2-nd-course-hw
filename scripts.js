function gameOne() {
        let numberSeasons = Number(prompt('Введите число месяца'));
        function seasons(numberSeasons) {
            if (numberSeasons <= 0 || numberSeasons > 12 ) {
                alert('Такого месяца не существует');   
            } else if (numberSeasons == 1 || numberSeasons == 2 || numberSeasons == 12) {
                alert('Зима');
            } else if (numberSeasons >= 3 && numberSeasons <= 5) {
                alert('Весна');
            } else if (numberSeasons >= 6 && numberSeasons <= 8) {
                alert('Лето');
            } else if (numberSeasons >= 9 && numberSeasons <= 11) {
                    alert('Осень');
                } else {
                    alert('Вы должны ввести число');
                }
            }
            seasons(numberSeasons);
            }
