// Напишите программу, которая присваивает 
// буквенную оценку на основе числовой оценки. 
// Числовая оценка максимум 100.
// F (меньше 60 баллов)
// D (60-70 баллов)
// C (70-80 баллов)
// B (80-90 баллов)
// A (90-100)

// Данное:
// const score = 67 // заданное число
//  let grade; //сюда записать ответ который мы выведем в консоли

// Результат:
//  console.log("Гред по баллам равен:", grade) // Грейд по баллам равен: D



let score = prompt('введите число', '');
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else if (score < 59) {
    grade = "F";
};
alert("Гред по баллам равен:" + grade);