import gql from 'graphql-tag';
import { Student } from '../../../types';

/* create query */

export function createStudent(studentData: Student) {
  return gql `
  mutation {
    CreateStudent(name: "${studentData.name}", lastname: "${studentData.lastname}",
    age: "${studentData.age}", teacher: "${studentData.teacher}") {
      name,
      lastname,
      age,
      teacher
    }
  }`;
}

/*create query */

/*get query */


export function getAllStudents() {
  return gql `
  query {
    getAllStudents {
      id,
      name,
      lastname,
      age,
      teacher
    }
  }
  `;
}
