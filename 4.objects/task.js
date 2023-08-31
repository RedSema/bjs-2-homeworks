function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let firstStudent = new Student("Петр", "мужской", 19);

let secondStudent = new Student("Анна", "женский", 22);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
  if(!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }
  let sum = this.marks.reduce((acc, item) => acc + item, 0);
  let average = sum / this.marks.length;
  return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

