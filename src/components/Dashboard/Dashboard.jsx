import React, { useEffect, useState } from "react";
import axios from 'axios';
import Filters from "../Filters/Filters";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default function Dashboard() {
    const [data, setData] =  useState([]);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:5000/get/finance');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(); 
    }, [fetchData]);

    return (
        <>
            <Header />
            <Form expenses={data} getData={fetchData} />
            <Filters expenses={data} getData={fetchData} />
        </>     
    )
}