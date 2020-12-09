import React, { Component } from 'react'
import { connect } from "react-redux"
import { actAddUserApi } from './modules/action';
import Loader from "../../../components/Loader/index"



class AddUserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: ""
        }
    }

    handleOnChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault();
        this.props.fetchAddUSer(this.state)
    }

    renderNoti = () => {
        const { err } = this.props;
        // console.log(err && err.response.status)
        if (err && err.response.status === 401){
            return(
                <div className="alert alert-danger">Chưa có Token</div>
            )
        } else if (err && err.response.status === 500){
            return (
                <div className="alert alert-danger">{err.response.data}</div>
            )
        }
    }

    render() {
        const { loading } = this.props;
        if(loading) return <Loader/>
        return (
            <div>
                <form className="container" onSubmit={this.handleOnSubmit}>
                    <h3>Thêm người dùng</h3>
                    {this.renderNoti()}
                    <div className="form-group">
                        <span>Tài khoản</span>
                        <input className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Mật khẩu</span>
                        <input className="form-control" name="matKhau" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Họ tên</span>
                        <input className="form-control" name="hoTen" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Email</span>
                        <input className="form-control" name="email" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Số điện thoại</span>
                        <input className="form-control" name="soDt" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Mã nhóm</span>
                        <input className="form-control" name="maNhom" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Mã loại người dùng</span>
                        <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Thêm người dùng</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.AddUserReducer.loading,
        err: state.AddUserReducer.err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddUSer: (user) => {
            dispatch(actAddUserApi(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage)