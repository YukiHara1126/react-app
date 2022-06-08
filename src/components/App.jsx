import React, { Component } from 'react'
import AppFooter from '../AppFooter';
import { Button, ChakraProvider } from '@chakra-ui/react'
import axios from "axios"

const App = () => {

    const [data, setData] = React.useState();
    const url = "http://127.0.0.1:8000"

    const GetData = () => {
        axios.get(url).then((res) => {
            setData(res.data);
        })
    }
    return (
        <ChakraProvider>
            <h1>お元気ですか</h1>
            <p>お元気ですか</p>
            {data ? <div>{data.Hello}</div> : <Button colorScheme="teal" onClick={GetData}>データを取得</ Button>}

            <AppFooter />
        </ChakraProvider>
    );
};

export default App;