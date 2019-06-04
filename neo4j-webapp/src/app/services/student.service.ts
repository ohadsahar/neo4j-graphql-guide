import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import * as query from '../core/components/student/student.query';
import { Student } from '../types';




@Injectable({providedIn: 'root'})
export class StudentService {

  constructor(private apollo: Apollo) {}

  getStudents() {
    return this.apollo.watchQuery<any>({query: query.getAllStudents()}).valueChanges;
  }

  createStudent(studentData: Student) {
    return this.apollo.mutate<any>({mutation: query.createStudent(studentData)});
  }

}
