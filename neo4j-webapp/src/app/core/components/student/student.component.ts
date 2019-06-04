import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/types';
import { StudentInterface } from '../../../shared/models/student.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Observable<Student[]>;
  public student = new StudentInterface(null, '', '', '', '');
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.onLoadComponent();
  }

  onLoadComponent() {
    this.studentService.getStudents().subscribe(response => {
      this.students = response.data.getAllStudents;
    });
  }
  createStudent() {
    console.log(this.student);
    const dataStudent = {id: null, name: this.student.name, lastname: this.student.lastname,
    age: this.student.age, teacher: this.student.teacher};
    this.studentService.createStudent(dataStudent).subscribe(response => {
      console.log('Created new user!');
    });
  }
}
