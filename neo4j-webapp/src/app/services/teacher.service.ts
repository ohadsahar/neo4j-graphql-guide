import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import * as query from '../core/components/teacher/teacher.query';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private apollo: Apollo) {}

  getAllTeachers() {
    return this.apollo.watchQuery<any>({ query: query.getAllTeachers() })
      .valueChanges;
  }

  getTeacherById(id: string) {
    return this.apollo.watchQuery<any>({ query: query.getTeacherById(id) })
      .valueChanges;
  }

  createTeacher() {
    return this.apollo.mutate<any>({ mutation: query.createTeacher() });
  }

  updateTeacher(id: string) {
    return this.apollo.mutate<any>({ mutation: query.updateTeacher(id) });
  }

  deleteTeacher(id: string) {
    return this.apollo.mutate<any>({ mutation: query.deleteTeacher(id) });
  }
}
