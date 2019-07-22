//1) Реализовать функцию которая принимает имя и возраст студента и возвращает объект с полями name, age, marks(пустой массив);
var groupStudent = [];

function creatStudent(){
  return function(name, age) {
    groupStudent.push({"name": name, "age": age, "marks": []});
    return groupStudent;
  };
};

var student = creatStudent();
student("Вася", 35);
student("Петя", 36);
student("Дима", 45);
student("Андрей", 34);

var students = student("Алексей", 25);

function manageStudent(studentArray){
   //Добавление студента
  function addStudent(name, age){
    studentArray.push({"name": name, "age": age, "marks": []});
    return studentArray;
  };
  //Удаление студента
  addStudent.removeStudent = function(name) {
    //for (var key in studentArray){
    for (var i = 0; i < studentArray.length; i++){
      if (studentArray[i].name === name){
        studentArray.splice(i, 1);
      }
    }
  };

//Добавление оценки
addStudent.addMarks = function(name, marks){
 // for (var key in studentArray){
  for (var i = 0; i < studentArray.length; i++){
      if (studentArray[i].name === name){
        studentArray[i].marks.push(marks);
      }
  }
};

//Получение средней оценки по имени
addStudent.getAverageMarkResult = function(name){
  var sumMarks = 0, avg = 0;
  return "Средняя оценка " + name + " равна " + addStudent.getAverageMark(name);
};

//Функция получения средней оценки по имени для сортировки
addStudent.getAverageMark = function(name){
  var sumMarks = 0, avg = 0;
  for (var i = 0; i < studentArray.length; i++){
      if (studentArray[i].name === name){
        for (var j = 0; j < studentArray[i].marks.length; j++){
          sumMarks += studentArray[i].marks[j];
        }
        avg = sumMarks / studentArray[i].marks.length;
      }
  }
  return avg.toFixed(2);
};

//Получение средней оценки группы за занятие
addStudent.getAverageMarkStudents = function(){
  var sumMarks = 0;
  var avg = [];
  for (var i = 0; i < studentArray[0].marks.length; i++){
    sumMarks = 0;
      for (var j = 0; j < studentArray.length; j++){
          sumMarks += studentArray[j].marks[i];
        }
        avg[i] = sumMarks/studentArray.length;
        console.log("Номер предмета: " + i + ", Средняя оценка за предмет: " + avg[i]);
      }
  };


//Получение отсортированного по именам списка студентов
addStudent.sortStudent = function() {
    studentArray.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    })
};


//Получение отсортированного по среднему балу списка студентов
addStudent.getAverageMarkStudent = function(){
  studentArray.sort(function(a, b) {
      return addStudent.getAverageMark(a.name) > addStudent.getAverageMark(b.name) ? 1 : -1;
    });
};

  return addStudent;

}






var manage = manageStudent(students);
console.log(manage('Коля', 45));
manage.removeStudent("Алексей");
manage.addMarks("Дима", 5);
manage.addMarks("Дима", 5);
manage.addMarks("Дима", 4);
manage.addMarks("Вася", 5);
manage.addMarks("Вася", 3);
manage.addMarks("Вася", 4);
manage.addMarks("Петя", 3);
manage.addMarks("Петя", 3);
manage.addMarks("Петя", 3);
manage.addMarks("Андрей", 3);
manage.addMarks("Андрей", 2);
manage.addMarks("Андрей", 3);
manage.addMarks("Коля", 3);
manage.addMarks("Коля", 5);
manage.addMarks("Коля", 3);
console.log(manage.getAverageMarkResult("Дима"));
console.log(manage.getAverageMarkResult("Вася"));
manage.getAverageMarkStudents();
manage.sortStudent();
manage.getAverageMarkStudent()

