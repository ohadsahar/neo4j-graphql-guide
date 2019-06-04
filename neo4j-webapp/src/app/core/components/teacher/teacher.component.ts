import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../../types';
import { TeacherService } from '../../../services/teacher.service';
import { TeacherInterface } from '../../../shared/models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teacher = new TeacherInterface(null, '', '', '' );
  teachers: Observable<Teacher[]>;
  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.onComponentLoad();
  }

  onComponentLoad(): void {
    this.teacherService.getAllTeachers().subscribe(response => {
      this.teachers = response.data.getAllTeachers;
    });
  }

  createTeacher(): void {
    const teacherData = {id: null, name: this.teacher.name, lastname: this.teacher.lastname, age: this.teacher.age};
    this.teacherService.createTeacher(teacherData).subscribe(response => {
      console.log('Created user successfully!');
    });
  }

  updateTeacher(id: string): void {
    this.teacherService.updateTeacher(id).subscribe(response => {
      console.log('Updated user successfully!');
    });
  }

  getTeacher(id: string): void {
    this.teacherService.getTeacherById(id).subscribe(response => {
      console.log(response.data);
    });
  }

  deleteTeacher(id: string): void {
    this.teacherService.deleteTeacher(id).subscribe(response => {
      console.log('Teacher deleted successfully!');
    });
  }
}
