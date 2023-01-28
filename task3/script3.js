const numFirst = Number(prompt("Введите первое число"))
const numSecond = Number(prompt("Введите первое число"))

alert(`Сумма равна ${numFirst + numSecond}
Разность равна ${numFirst - numSecond}
Произведение равно ${numFirst * numSecond}
Частное равно ${(numFirst % numSecond).toFixed(2)}
Остаток от деления равен ${numFirst * numSecond}`)