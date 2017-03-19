import React, {PropTypes} from 'react';
import { Action } from '../action/action';

require('./toolbar.css');
require('./search.css');

export class Toolbar extends React.Component {
  static propTypes = {
    find: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      filter: "",
    };
  }

  doFilter = () => {
    this.props.find(this.state.filter)
  }

  onChangeFilter = (event) => {
    let value = event.target.value;
    this.setState({filter: value});
  }

  render () {
    return (
      <div className="courses-toolbar">
        <div className="courses-toolbar__search">
          <div className="courses-search">
            <input type="text" className="courses-search__input"
                 value={this.state.filter} onChange={this.onChangeFilter}/>
            <div className="courses-search__find">
              <Action action={this.doFilter} title="Find"/>
            </div>
          </div>
        </div>
        <div className="courses-toolbar__add">
          <Action action={this.props.add} title="Add course" icon="add"/>
        </div>
      </div>
    );
  }

}
