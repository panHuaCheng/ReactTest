import React, { Component } from 'react';
import { connect } from 'react-redux'
// import store from '../../utils/store'
import Login from '../Login'

class Con extends Component {
    render() {
        // const {message} = this.props;
        return (
            <Login {...this.props}/>

        );
    }
}
function mapStateToProps(state) {
    debugger
    return {
        ...state
    }
}

const aa = connect(mapStateToProps)(Con);
debugger
export default aa;