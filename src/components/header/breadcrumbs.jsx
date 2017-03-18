import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

import {Breadcrumb} from '../../entities/breadcrumb';

require('./breadcrumbs.css');

export class Breadcrumbs extends React.Component {
  static propTypes = {
    breadcrumbs: PropTypes.array,
  };

  static defaultProps = {
    breadcrumbs: [new Breadcrumb("course", "/courses"), new Breadcrumb("new")]
  }

  constructor() {
    super();
  }


  render() {
    let breadcrumbs = this.props.breadcrumbs.map((item, key) => (
        <div className="breadcrumbs__item" key={key}>
          {item.route ?
            <Link to={item.route} className="breadcrumbs__link">{item.label}</Link>
            : item.label}
        </div>
    ));
    return (
      <div className="breadcrumbs">
        {breadcrumbs}
      </div>
    );
  }
}
