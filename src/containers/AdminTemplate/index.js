import { logDOM } from '@testing-library/react'
import React from 'react'
import {Route} from "react-router-dom"
import NavbarAdmin from "./../../components/NavbarAdmin"


function LayoutAdmin (props) {
    return (
        <div>
            <NavbarAdmin/>
            {props.children}
        </div>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        <Route 
            {...props}
            render={(propsComponent)=>(
                <LayoutAdmin>
                    <Component {...propsComponent}/>
                    {/* {console.log(propsComponent)} */}
                </LayoutAdmin>
            )}
        />
    )
}
