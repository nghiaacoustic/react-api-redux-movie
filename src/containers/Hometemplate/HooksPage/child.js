import React,{memo} from 'react'


function Child() {
    console.log("aloalo")
    return (
        <div>
            <h3>*  Child</h3>
        </div>
    )
}

export default memo(Child);