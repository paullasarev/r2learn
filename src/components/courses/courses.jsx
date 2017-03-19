import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { remove, read, create} from '../../actions/courses';
import { Toolbar } from './toolbar';
import { CourseComponent } from './course';
import { Course } from '../../entities/course';

require('./courses.css');
require('./toolbar.css');
require('./search.css');

export class Courses extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
    // courses: [
    //   new Course('1', 'javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fuga tenetur illum, reprehenderit possimus architecto optio maxime dolore iure, nobis, provident. Repellat quod cupiditate doloremque esse natus vero delectus dolores!', 600),
    //   new Course('2', 'CSS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora repellendus deleniti temporibus nesciunt culpa recusandae excepturi mollitia minima, provident commodi maxime illum voluptates architecto et nobis corrupti. Optio esse, quod.', 300)
    // ]
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.read("");
  }

        // <div class="courses__toolbar">
        //   <toolbar (find)="onFind($event)" (add)="onAdd($event)"></toolbar>
        // </div>
        // <div class="courses__list">
        //   <div class="courses__item" *ngFor="let course of courses">
        //     <course [course]="course" (remove)=onRemove($event)></course>
        //   </div>
        // </div>
        // <div *ngIf="isLoading" class="courses__loading">Is loading...</div>
        // <confirm *ngIf="showDeleteConfirm"
        //   [message]="'Do you really want to delete this course?'"
        //   (ok)="doConfirmDelete()" (cancel)="doCancelDelete()"
        //   ></confirm>

  onFind = (filter) => {
    console.log('onFind', filter)
    this.props.read(filter);
  }

  onAdd = () => {
    this.props.history.push('/courses/new');
  }

  onRemove = (course) => {
    console.log('onRemove', course)
  }

  onEdit = (course) => {
     this.props.history.push('/courses/' + course.id);
  }

  render() {
    let courses = this.props.courses.items.map((item, key) => (
      <div className="courses__item">
        <CourseComponent course={item} edit={this.onEdit} remove={this.onRemove} key={key}/>
      </div>
    ));

    return (
      <div className="courses">
        <div className="courses__toolbar">
          <Toolbar find={this.onFind} add={this.onAdd}/>
        </div>
        <div className="courses__list">
          { courses }
        </div>
        {this.props.courses.isLoading ?
          <div className="courses__loading">Is loading...</div>
          : null}
      </div>
    );
  }
}

export default connect(
  state => ({courses: state.courses}),
  dispatch => (bindActionCreators({remove, read, create}, dispatch))
)(Courses);
