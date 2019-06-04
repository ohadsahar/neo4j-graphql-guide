export type Teacher = {

    id: string;
    name: string;
    lastname: string;
    age: string;
};

export type Student = {

  id: string;
  name: string;
  lastname: string;
  age: string;
  teacher: string;
};

export type Query = {

    allTeachers: Teacher[];
};
