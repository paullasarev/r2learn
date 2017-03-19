import {find, remove} from 'lodash';

import { Course } from '../entities/course';

let courses = [
  new Course('1', 'javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fuga tenetur illum, reprehenderit possimus architecto optio maxime dolore iure, nobis, provident. Repellat quod cupiditate doloremque esse natus vero delectus dolores!', 600),
  new Course('2', 'CSS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora repellendus deleniti temporibus nesciunt culpa recusandae excepturi mollitia minima, provident commodi maxime illum voluptates architecto et nobis corrupti. Optio esse, quod.', 300)
];

class Courses {
  list(filter) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(courses);
      }, 700);
    });
  }

  get(id) {
    return new Promise((resolve, reject)=>{
      if (!id || id=="new") {
        resolve(new Course("", "Course", "New course", 120));
        return;
      }

      let item = find(courses, {id:id});
      if (!item) {
        reject(new Error(`no course with id=${id}`));
        return;
      }

      setTimeout(()=>{
        resolve(item);
      }, 700);
    });
  }
}

export class Api {
  constructor() {
    this.courses_ = new Courses();
  }
  get courses() {
    return this.courses_;
  }
}
