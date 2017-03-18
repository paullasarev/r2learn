import React, {PropTypes} from 'react';
import classnames from 'classnames';

require('./action.css');

export class Action extends React.Component {
  static propTypes = {
    icon: PropTypes.String,
    title: PropTypes.String,
    action: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="action">
        {this.props.icon ?
          <div className={'action__icon action__icon--' + this.props.icon}></div>
        : null}
        <button className={classnames("action__button", {'action__button--with-icon':this.props.icon})}
                onClick={this.props.action}>
          {this.props.title}
        </button>
      </div>
    );
  }
}
