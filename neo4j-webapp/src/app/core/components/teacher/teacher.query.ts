import gql from 'graphql-tag';

/*create query */

export function createTeacher() {
  return gql`
    mutation {
      CreateTeacher(name: "orit", lastname: "eliran", age: "27") {
        name
      }
    }
  `;
}
/* create query */

/* delete query */

// tslint:disable-next-line: ban-types
export function deleteTeacher(id: String) {
  return gql`
    mutation {
        DeleteTeacher(id: "${id}") {
            name
        }
    }`;
}

/* delete query */

/* get query */
export function getAllTeachers() {
  return gql`
    query {
      getAllTeachers {
        id
        name
        lastname
        age
      }
    }
  `;
}
// tslint:disable-next-line: ban-types
export function getTeacherById(id: String) {
  return gql`
    query {
        getTeacherById(id: "${id}") {
            name,
            lastname,
            age
        }
    }`;
}
/* get query */

/* update query */

// tslint:disable-next-line: ban-types
export function updateTeacher(id: String) {
  return gql`
         mutation {
    UpdateTeacher(id: "${id}", name: "hamsin", lastname: "bisli", age: "33")
    {
      name
    }
    }`;
}

/* update query */
