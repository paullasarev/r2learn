import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class PageError extends React.Component {
    static propTypes = {
        message: PropTypes.string
    };
    static defaultProps = {
        message: 'Такой страницы не существует :('
    };
    render() {
        const { message } = this.props;

        return (
            <div>
                <p>{message}</p>
                <Link to='/'>На главную страницу</Link>
            </div>
        );
    }
}
