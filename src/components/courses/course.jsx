import React, { PropTypes } from 'react';
import { Action } from '../action/action';
import { Course } from '../../entities/course';

require('./course.css');

export class CourseComponent extends React.Component {
  static propTypes = {
    course: PropTypes.object,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  };

  doEdit = () => {
    this.props.edit(this.props.course);
  }

  doDelete = () => {
    this.props.remove(this.props.course);
  }

  render() {
    const course = this.props.course;
    return (
      <div className="course">
        <div className="course__info">
          <div className="course__summary">
            <div className="course__title">{course.title}</div>
            <div className="course__id">{course.id}</div>
            <div className="course__duration">{course.duration}</div>
            <div className="course__creating-date">{course.getDateStr()}</div>
          </div>
          <div className="course__description">{course.description}</div>
        </div>
        <div className="course__actions">
          <div className="course__action">
            <Action action={this.doEdit} title="Edit course"/>
          </div>
          <div className="course__action">
            <Action action={this.doDelete} title="Delete"/>
          </div>
        </div>
      </div>
    );
  }

}
