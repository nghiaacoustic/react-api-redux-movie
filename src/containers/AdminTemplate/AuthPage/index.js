import React, { Component } from 'react'
import { connect } from "react-redux"
import { actAuthApi } from "./modules/action"
import Loader from "../../../components/Loader/index"
import { Redirect } from "react-router-dom"

class AuthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
        };
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    };

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.fetchLogin(this.state, this.props.history); //chỗ này truyền tham số cho props
    }

    renderNoti = () => {
        const { err } = this.props;
        // console.log('err',err)
        if (err) {
            return <div className="alert alert-danger" >{err.response.data}</div>
        }

    }

    render() {
        // console.log(this.props.err, this.props.loading, this.props.data);
        const { loading } = this.props;
        if (loading) return <Loader />
        if(localStorage.getItem("UserAdmin")){
            return <Redirect to="/dashboard"/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h3>AuthPage</h3>
                        <form onSubmit={this.handleLogin}>
                            {this.renderNoti()}
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="matKhau" onChange={this.handleOnChange} />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Login
        </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        err: state.authReducer.err,
        data: state.authReducer.data
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        fetchLogin: (user, history) => { //truyền vào props để gọi tham số tư actAuthApi
            dispatch(actAuthApi(user, history)); // từ đây truyền qua action
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProp)(AuthPage)