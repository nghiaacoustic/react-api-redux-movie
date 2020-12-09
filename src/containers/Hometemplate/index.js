import React from 'react'
import { Route } from "react-router-dom"
import NavbarHome from "./../../components/navbarHome"

function LayoutHome(props) {
    return (
        <div>
            <NavbarHome />
            {props.children}
        </div>
    )
}

/**
 * func muốn bóc tách phải truyền vào tham số props
 * 
 * phía dưới là : bóc tách trực tiếp tại tham số của func
 * ...props : bóc tách tất cả các props còn lại trong component cha
 * ()=>() : callBackFunc theo dạng return nên ko có {} phía sau, thay = ()
 */


export default function HomeTemplate({ Component, ...props }) {
    // const { exact, path, Component } = props;
    return (
        <Route
            {...props}
            // props.location.params, props.history, props.
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}
