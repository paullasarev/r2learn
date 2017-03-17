import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import noop from 'lodash/noop';

import { someActionCreator } from '../../actions/index';

const DEFAULT_PAGE_TITLE = 'главная страница';

class PageMain extends React.Component {
    static propTypes = {
        someActionCreator: PropTypes.func.isRequired,
        title: PropTypes.string
    };

    static defaultProps = {
        someActionCreator: noop
    };

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.someActionCreator();
    }

    render() {
        const { title = DEFAULT_PAGE_TITLE } = this.props;
        return (
            <div className='page-main'>
                <h1>{ title }</h1>
            </div>
        );
    }
}


let mapStateToProps = state => ({ app: state.app });
let mapDispatchToProps = dispatch => (
    bindActionCreators({
        someActionCreator
    }, dispatch)
);

export { PageMain };
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
