import React from 'react';

require('./footer.css');

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__title">
          copyright 2017
        </div>
      </div>
    );
  }
}
