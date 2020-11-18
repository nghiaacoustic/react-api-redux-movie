import React, { Component } from 'react'
import Movie from "./../../../components/Movie"
// import data from "./data.json"
import Axios from "axios"

export default class ListMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });

        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    listMovie: result.data,
                    loading: false,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    renderHTML = () => {
        const { listMovie } = this.state;
        return listMovie.map((movie) => {
            return <div key={movie.maPhim} className="col-md-3">
                <Movie movie={movie} />
            </div>
        })
    }

    render() {
        const {loading} = this.state;
        if(loading){
            return <p>Loading ... </p>
        }
        return (
            <div>
                <div className="container">
                    <h3>ListMoviePage</h3>
                    <div className="row">
                        {this.renderHTML()}
                    </div>
                </div>
            </div>
        )
    }
}
