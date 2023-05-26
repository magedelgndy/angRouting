import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myStudent = {
    id: 1,
    myNames: '',
    myAges: '',
  };
  student: any[] = [];

  checkName() {
    return this.myStudent.myNames.length < 8;
  }

  checkAge() {
    return Number(this.myStudent.myAges) < 18;
  }

  addToTable() {
    if (!this.checkAge() && !this.checkName()) {
      this.student.push({
        ID: this.myStudent.id++,
        Name: this.myStudent.myNames,
        Age: this.myStudent.myAges,
      });
    }
  }

  removeFromTable(index: number) {
    this.student = this.student.filter((item, i) => i != index);
  }
}
