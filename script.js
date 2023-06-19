//complete this code
class Person {
	construtor(name,age){
		this.name = name;
		this.age = age;
	}
	set name(newname,newage){
		this.name = newname;
		this.age = newage;
	}
	get name(newname,newage){
		this.name = newname;
		this.age = newage;
	}
}

class Student extends Person {
	study(){
		console.log(this.name  + "is studying")
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name  + "is teaching")
	}
}
const person = new Person("John", 25);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
