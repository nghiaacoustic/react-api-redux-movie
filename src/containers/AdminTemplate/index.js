// import { logDOM } from '@testing-library/react'
import React from 'react'
import { Redirect, Route } from "react-router-dom"
import NavbarAdmin from "./../../components/NavbarAdmin"


function LayoutAdmin(props) {
    return (
        <div>
            <NavbarAdmin />
            {props.children}
        </div>
    )
}
/** () thay thế = {} : có điều kiện để kiểm tra
 * return
 * 
 */
export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (localStorage.getItem("UserAdmin")) {
                    return (
                        <LayoutAdmin>
                            <Component {...propsComponent} />
                            {/* {console.log(propsComponent)} */}
                        </LayoutAdmin>
                    );
                }
                return <Redirect to="/auth" />
            }}
        />
    )
}
