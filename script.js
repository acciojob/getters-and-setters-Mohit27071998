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
const person = new Person("John", 25)
const student = new Student("John", 30);
const teacher = new Teacher("Jane", 30);

console.log(person.name); 
console.log(student.name); 
console.log(teacher.name); 

student.age = 21;
console.log(student.age);

student.study(); 
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
