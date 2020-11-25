import React from 'react'
import "./style.css"
import styled from "styled-components" // chỉ chơi với func


const Loading = styled.div`
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid ${(props) => (props.primary ? "#3498db" : "#124512")};
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        position: absolute;
        left: 45%;
        top: 50%;
`

export default function Loader() {
    return (
        <Loading></Loading>
    )
}
