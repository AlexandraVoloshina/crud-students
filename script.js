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
function manageStudent(arrStudent){
  var studentArr = students.slice();

   //Добавление студента
  manageStudent.addStudent = function(obj){
    studentArr.push(obj);
    return studentArr;
  };

  //Удаление студента
  manageStudent.removeStudent = function(name) {
    var indexStudent = studentArr.findIndex(function(student){
      return student.name === name;
    });
    studentArr.splice(indexStudent, 1);
  };

//Добавление оценки
  manageStudent.addMarks = function(name, marks, numberLesson){
    var student = studentArr.find(function(student){
      return student.name === name;
    });
    student.marks[numberLesson - 1] = marks;
    return "Студент: " + name + ", оценка: " + marks + " , предмет: " + numberLesson;
  };

    //Получение средней оценки по имени
  manageStudent.getAverageMarkResult = function(name){
    var student = studentArr.find(function(t){
        return t.name === name;
    });
    if(student){
      var averageMarkResult = getAverageMark(student);
    }
    return averageMarkResult;

  };

  //Функция получения средней оценки по имени для сортировки
  function getAverageMark(student){
    var avg = student.marks.reduce(function(sum, current){
          return (sum + current)/2;
        });
    return avg;
  };

  //Получение средней оценки группы за занятие
  manageStudent.getAverageMarkStudents = function(){
    var avg = [];
    for (var i = 0; i < studentArr[0].marks.length; i++){
        avg[i] = studentArr.reduce(function(sum, current){
          return (sum + current.marks[i])/2;
        }, 0);
          console.log("Номер предмета: " + i + ", Средняя оценка за предмет: " + avg[i].toFixed(2));
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
        return manageStudent.getAverageMarkResult(a.name) > manageStudent.getAverageMarkResult(b.name) ? 1 : -1;
      });
    return studentArr;
  };

  return this;

}


var student6 = creatStudent("Коля", 45);
manageStudent(students);
console.log("Добавление студента");
console.log(manageStudent.addStudent(student6));
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
console.log("Средняя оценка студента Димы: ");
console.log(manageStudent.getAverageMarkResult("Дима"));
console.log("Средняя оценка студента Васи: ");
console.log(manageStudent.getAverageMarkResult("Вася"));
manageStudent.getAverageMarkStudents();
console.log("Сортировка по именам списка студентов");
console.log(manageStudent.sortStudent());
console.log("Сортировка по среднему балу списка студентов");
console.log(manageStudent.getAverageMarkStudent());