import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../../types';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
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
    this.teacherService.createTeacher().subscribe(response => {
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
