'use strict';

// Реализуйте класс Student (Студент), который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), year (год поступления в вуз). 
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

const MAX_STUDYING_YEAR = 5;

class User {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  set year(date) {
    if(date instanceof Date && typeof this._year === 'undefined') {
      this._year = date;
      return;
    } else if (typeof this._year !== 'undefined'){
      // не знаю какой тип ошибки более применим к этой ситуаци поэтому кинул обычную
      throw new Error ('Starting date of education cannot be redefined');
    }
    throw new TypeError('Use Date for year');
  }

  getCourse() {
    const currentYear = new Date();
    const currentCourse = currentYear.getFullYear() - this._year.getFullYear() + 1;

    if (currentCourse > MAX_STUDYING_YEAR) {
      throw new RangeError('Student already finished his education');
    } else if(currentCourse < 1){
      throw new RangeError ('Student isn`t started his education');
    } else {
      return currentCourse; 
    }

  }
}

// student of second course
const student1 = new Student ('Test', 'Testovich', new Date('2020', '11','10')); 

// student that finished education
const student2 = new Student ('Test2', 'Testovich2', new Date('2015', '8', '1')); 

// student that not started education 
const student3 = new Student ('Test_3', 'Testovich_3', new Date('2022', '8','10')); 

// 2
// console.log(student1.getCourse()); 

// RangeError Finished 
// console.log(student2.getCourse()); 

// RangeError Not started
// console.log(student3.getCourse()); 



