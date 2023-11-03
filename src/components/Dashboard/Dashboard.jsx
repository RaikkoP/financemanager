import { useEffect, useState } from "react";
import axios from 'axios';
import Filters from "../Filters/Filters";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default function Dashboard()  {

    const [data, setData] =  useState([]);

    async function getData() {
        axios.get('http://localhost:5000/get/finance')
            .then(function (response) {
                console.log(response);
                setData([...data, ...response.data]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    },[])
    
    return (
        <>
            <Header></Header>
            <Form expenses={data}></Form>
            <Filters expenses={data}></Filters>
        </>     
    )
}