import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asyncHello } from "../redux/Actions";
// сделал Орумбаев Никита, для оригинальности :)
const MainPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(asyncHello());
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            {loading ? <p>Загрузка данных...</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    );// хоть и не красиво но отобразил (`-_-)
};

export default MainPage;
