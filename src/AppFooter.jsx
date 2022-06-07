import React from 'react';

const AppFooter = () => {
    const newYear = new Date().getFullYear();
    return (
        <>
            <hr />
            <p>cooy right{newYear}</p>
        </>
    );
}

export default AppFooter;