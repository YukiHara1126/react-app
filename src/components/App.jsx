import React, { Component } from 'react'
import AppFooter from '../AppFooter';
import { Button, ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <h1>お元気ですか</h1>
            <p>お元気ですか</p>
            <Button colorScheme="teal">ボタン</Button>
            <AppFooter />
        </ChakraProvider>
    );
};

export default App;