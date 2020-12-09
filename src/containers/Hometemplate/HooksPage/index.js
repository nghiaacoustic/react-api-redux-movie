import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Child from "./child"

export default function HookPage() {

    const [number, setNumber] = useState(0);


    useEffect(() => {
        console.log("useEffect - tương đương lifecycle componentDidMount bên Class")
        /**
        * chạy 1 lần duy nhất
        * useEffect - tương đương lifecycle componentDidmount bên Class khi tham số thứ 2 là mảng rỗng
        */
    }, [])

    useEffect(() => {
        console.log("useEffect - tương đương lifecycle componentDidUpdate bên Class")
        /**
        * chạy 1 lần duy nhất
        * useEffect - tương đương lifecycle componentDidmount bên Class khi tham số thứ 2 là mảng khác rỗng
        */
    }, [number])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("setInterval() lặp lại theo thời gian")
        }, 1000)
        return () => {
            console.log("useEffect - tương đương lifecycle componentWillUnMount bên Class")
            /**
            * chạy 1 lần duy nhất
            * useEffect - tương đương lifecycle componentWillUnMount bên Class khi return về arrow func
            */
            clearInterval(interval);
        }
    }, [])

    const handleTangSo = () => {
        setNumber(number + 1);
    }

    const showNumber = () => {
        console.log("ShowNumber")
    }

    const showNumberCallback = useCallback(showNumber, []);

    const numberUp = () => {
        let i = 0;
        while (i < 1000) i++;
        console.log(i);
        return i;
    }

    const numberUpMemo = useMemo(() => numberUp(), [])

    return (
        <div>
            <h3>HooksPage</h3>
            <h1>Number: {number}</h1>
            <h1>NumberUp: {numberUpMemo}</h1>
            <button className="btn btn-success" onClick={handleTangSo}>Tăng số</button>
            <Child showNumber={showNumberCallback} />
        </div>
    )
}
