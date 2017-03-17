import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class PageError extends React.Component {
    static propTypes = {
        message: PropTypes.string
    };
    static defaultProps = {
        message: 'no such page :('
    };
    render() {
        const { message } = this.props;

        return (
            <div>
                <p>{message}</p>
                <Link to='/'>To main page</Link>
            </div>
        );
    }
}
