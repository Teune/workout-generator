import React from 'react';

const Header = () => {
    return (
        <div style={headerStyle}>
        <h2 style={{paddingBottom: "20px"}}>WORKOUT APP</h2>
        </div>
    )
}

const headerStyle = {
    margin: "40px 0px 15px 0px",
    borderBottom: "1px solid #e9eaec",
    display: "flex",
    justifyContent: "center",
}

export default Header;