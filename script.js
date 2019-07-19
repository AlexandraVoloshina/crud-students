function creatStudent(){
  var groupStudent = [];
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
//console.log(students);

function manageStudent(studentArray){
   //Добавление студента
  function addStudent(name, age){
    studentArray.push({"name": name, "age": age, "marks": []});
    return studentArray;
  };
  //Удаление студента
  addStudent.removeStudent = function(name) {
    for (var key in studentArray){
      if (studentArray[key].name === name){
        studentArray.splice(key, 1);
      }
    }
  };

//Добавление оценки
addStudent.addMarks = function(name, marks){
  for (var key in studentArray){
      if (studentArray[key].name === name){
        studentArray[key].marks.push(marks);
      }
  }
};

//Получение средней оценки по имени
addStudent.getAverageMark = function(name){
  var sumMarks = 0;
  for (var key in studentArray){
      if (studentArray[key].name === name){
        for (var i = 0; i < studentArray[key].marks.length; i++){
          sumMarks += studentArray[key].marks[i];
        }
        var avg = sumMarks / studentArray[key].marks.length;
      }
  }
  return "Средняя оценка " + name + " равна " + Math.round(avg);
};


//Получение средней оценки группы за занятие
addStudent.getAverageMarkStudents = function(){
  var sumMarks = 0;
  var avg = [];
  var avgArr = [];
  for (var i = 0; i < studentArray[1].marks.length; i++){
    sumMarks = 0;
    for (var key in studentArray){
          sumMarks += studentArray[key].marks[i];
        }
        avg[i] = sumMarks/studentArray.length;
        console.log("Номер предмета: " + i + ", Средняя оценка за предмет: " + avg[i]);
      }
  };


//НЕ РАБОТАЕТ Получение отсортированного по именам списка студентов
addStudent.sortStudent = function(name) {
    return function(a, b) {
      return a[name] > b[name] ? 1 : -1;
    }
  };



//НЕ РАБОТАЕТ Получение отсортированного по среднему балу списка студентов
function getAverageMarkStudent(studentArray){
  var sumMarks = 0;
  var avgArr = [];
  for (var key in studentArray){
    sumMarks = 0;
        for (var i = 0; i < studentArray[key].marks.length; i++){
          sumMarks += studentArray[key].marks[i];
        }
        var avg = Math.round(sumMarks / studentArray[key].marks.length);
        //console.log(avg, studentArray[key].name);
      }
      return avg;
}



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
console.log(manage.getAverageMark("Дима"));
console.log(manage.getAverageMark("Вася"));

