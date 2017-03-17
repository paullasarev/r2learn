import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { someActionCreator } from '../../actions/index';

const DEFAULT_PAGE_TITLE = 'второстепенная страница';

class PageSub extends React.Component {
    static propTypes = {
        someActionCreator: PropTypes.func.isRequired,
        title: PropTypes.string
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
            <div>
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

export { PageSub };
export default connect(mapStateToProps, mapDispatchToProps)(PageSub);
