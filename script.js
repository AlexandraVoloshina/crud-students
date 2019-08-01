//1) Реализовать функцию которая принимает имя и возраст студента и возвращает объект с полями name, age, marks(пустой массив);
function creatStudent(name, age){
    return {"name": name, "age": age, "marks": []};
}
//Создаем объекты
var student1 = creatStudent("Вася", 35);
var student2 = creatStudent("Петя", 36);
var student3 = creatStudent("Дима", 45);
var student4 = creatStudent("Андрей", 34);
var student5 = creatStudent("Алексей", 25);

//Заносим объекты в массив
var students = [student1, student2, student3, student4, student5];

//2)Реализовать функцию которая будет управлять студентами
function manageStudent(name, age){
  var studentArr = students.slice();
  var student = {
    name: name,
    age: age, 
    marks: []
  };

   //Добавление студента
  manageStudent.addStudent = function(obj){
    studentArr.push(obj);
    return studentArr;
  };

  //Удаление студента
  manageStudent.removeStudent = function(name) {
    //var student = studentArr.find(t => t.name === name);
    var student = studentArr.find(function(student){
      return student.name === name;
    });
    var index = studentArr.indexOf(student);
    studentArr.splice(index, 1);
  };

//Добавление оценки
  manageStudent.addMarks = function(name, marks, numberLesson){
    for (var i = 0; i < studentArr.length; i++){
        if (studentArr[i].name === name){
          studentArr[i].marks[numberLesson - 1] = marks;
        }
    }
    return "Студент: " + name + ", оценка: " + marks + " , предмет: " + numberLesson;
  };

    //Получение средней оценки по имени
  manageStudent.getAverageMarkResult = function(name){
    return "Средняя оценка " + name + " равна " + getAverageMark(name);
  };

  //Функция получения средней оценки по имени для сортировки
  function getAverageMark(name){
    var sumMarks = 0, avg = 0;
    var student = studentArr.find(function(t){
        return t.name === name;
    });
        if(student){
          for (var j = 0; j < student.marks.length; j++){
            sumMarks += student.marks[j];
          }
          avg = sumMarks / student.marks.length;
        }
    
    return avg.toFixed(2);
  };

  //Получение средней оценки группы за занятие
  manageStudent.getAverageMarkStudents = function(){
    var sumMarks = 0;
    var avg = [];
    for (var i = 0; i < studentArr[0].marks.length; i++){
      sumMarks = 0;
        for (var j = 0; j < studentArr.length; j++){
            sumMarks += studentArr[j].marks[i];
          }
          avg[i] = sumMarks/studentArr.length;
          console.log("Номер предмета: " + i + ", Средняя оценка за предмет: " + avg[i]);
        }
    };

  //Получение отсортированного по именам списка студентов
  manageStudent.sortStudent = function() {
      studentArr.sort(function(a, b) {
        return a.name > b.name ? 1 : -1;
      })
      return studentArr;
  };

  //Получение отсортированного по среднему балу списка студентов
  manageStudent.getAverageMarkStudent = function(){
    studentArr.sort(function(a, b) {
        return getAverageMark(a.name) > getAverageMark(b.name) ? 1 : -1;
      });
    return studentArr;
  };

  return student;
}



var student = manageStudent('Коля', 45);
console.log("Добавление студента");
console.log(student);
console.log(manageStudent.addStudent(student));
manageStudent.removeStudent("Алексей");
console.log(manageStudent.addMarks("Дима", 5, 1));
console.log(manageStudent.addMarks("Дима", 5, 2));
console.log(manageStudent.addMarks("Дима", 4, 3));
console.log(manageStudent.addMarks("Вася", 5, 1));
console.log(manageStudent.addMarks("Вася", 3, 2));
console.log(manageStudent.addMarks("Вася", 4, 3));
console.log(manageStudent.addMarks("Петя", 3, 1));
console.log(manageStudent.addMarks("Петя", 3, 2));
console.log(manageStudent.addMarks("Петя", 3, 3));
console.log(manageStudent.addMarks("Андрей", 3, 1));
console.log(manageStudent.addMarks("Андрей", 2, 2));
console.log(manageStudent.addMarks("Андрей", 3, 3));
console.log(manageStudent.addMarks("Коля", 3, 1));
console.log(manageStudent.addMarks("Коля", 5, 2));
console.log(manageStudent.addMarks("Коля", 3, 3));
console.log(manageStudent.getAverageMarkResult("Дима"));
console.log(manageStudent.getAverageMarkResult("Вася"));
manageStudent.getAverageMarkStudents();
console.log("Сортировка по именам списка студентов");
console.log(manageStudent.sortStudent());
console.log("Сортировка по среднему балу списка студентов");
console.log(manageStudent.getAverageMarkStudent());