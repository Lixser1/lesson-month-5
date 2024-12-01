import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const number = useSelector(state => state.number)
    const dispatch = useDispatch();
    const plus_1 = () => {
        dispatch(
            {
                type: "plus",
                number: {number}
            }
        )
    }
    const plus_10 = () => {
        dispatch(
            {
                type: "plus-10",
                number: {number}
            }
        )
    }
    const minus_1 = () => {
        dispatch(
            {
                type: "minus",
                number: {number}
            }
        )
    }
    const minus_10 = () => {
        dispatch(
            {
                type: "minus-10",
                number: {number}
            }
        )
    }
    const reset = () => {
        dispatch(
            {
                type: "reset",
                number: {number}
            }
        )
    }
    //Сделал Орумбаев Никита, на случай если у меня совпадет с кем нибудь код, то мой будет оригинальным за счет комента :)
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={plus_1}>plus 1</button>
            <button onClick={minus_1}>minus 1</button>
            <button onClick={plus_10}>plus 10</button>
            <button onClick={minus_10}>minus 10</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default MainPage;