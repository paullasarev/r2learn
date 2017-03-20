import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../action/action';
import { Course } from '../../entities/course';

import { get, create } from '../../store/actions/courses';
import * as format from '../../utils/format';

import {FormGroup, FormInputText, FormInputNumber, FormInputTextArea} from "../form/form";

require('./course-details.css');

export class CourseDetails extends React.Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      course: new Course(),
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.get(id);
  }

  componentWillReceiveProps(props) {
    if (props.courses.error) {
      this.props.history.push('/error');
      return;
    }

    this.setState({course: props.courses.course})
  }

  doSave = () => {
    console.log('doSave')
  }

  doCancel = () => {
    console.log('doCancel')
  }

  onChange = (name, value) => {
    let course = Object.assign({}, this.state.course);
    course[name] = value;
    this.setState({course: course});
  }

  render() {
    let course = this.state.course;
    return (
      <div className="course-detail">
        {course.id ?
        <div className="course-detail__id">
          {course.id}
        </div>
        : null}
        <div className="course-detail__details">
          <FormGroup>
            <FormInputText label="Title"
              value={course.title}
              onChange={this.onChange.bind(this, "title")}/>
            <FormInputTextArea label="Description"
              value={course.description}
              onChange={this.onChange.bind(this, "description")}/>
            <FormInputNumber label="Duration"
                value={course.duration}
                onChange={this.onChange.bind(this, "duration")}
                tip={format.duration(course.duration)}/>
          </FormGroup>
        </div>

        <div className="course-detail__actions">
          <div className="course-detail__action">
            <Action action={this.doSave} title="Save"/>
          </div>
          <div className="course-detail__action">
            <Action action={this.doCancel} title="Close"/>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(
  state => ({courses: state.courses}),
  dispatch => (bindActionCreators({get, create}, dispatch))
)(CourseDetails);
