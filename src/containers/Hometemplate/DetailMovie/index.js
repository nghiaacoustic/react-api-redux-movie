import React, { Component } from 'react'
import { actDetailMovieApi } from "./modules/action"
import { connect } from "react-redux"
import Loader from "./../../../components/Loader"
// import { data } from 'jquery';
import {Link} from "react-router-dom"

class DetailMoviePage extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        this.props.fetchDetailMovie(id);
        // console.log(this.props.data.hinhAnh)
    }


    renderTable = () => {
        const { data } = this.props;
        if(data && data.lichChieu){
            return data.lichChieu.map((item)=>{
                return (
                    <tr key={item.maLichChieu}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td><Link className="btn btn-success" to="/">Đặt vé</Link></td>
                    </tr>
                )
            })
        }
    }


    render() {
        const { loading,data } = this.props;
        if (loading) {
            return <Loader />
        }
        return (
            <div>
                <h3>DetailMoviePage</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={data && data.hinhAnh} alt="hinh-anh"/>
                        </div>
                        <div className="col-sm-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Tên phim</td>
                                        <td>{data && data.tenPhim}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{data && data.moTa}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Cụm rạp</th>
                                        <th>Tên rạp</th>
                                        <th>Ngày chiếu</th>
                                        <th>Giờ chiếu</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderTable()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(actDetailMovieApi(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage)
