//complete this code
class Person {
	construtor(name,age){
		this._name = name;
		this._age = age;
	}
	set age(newage){
		this._age = newage;
	}
	get name(newname){
		return this._name;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
const student = new Student("John", 20);
const teacher = new Teacher("Jane", 35);

console.log(student.name); 
student.age = 21;
console.log(student.age);

student.study(); 
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
