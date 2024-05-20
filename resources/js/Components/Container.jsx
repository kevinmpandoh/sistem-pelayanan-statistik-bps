import React from "react";

const Container = ({ children }) => {
    return (
        <div className="container mt-28 mx-auto px-5 2xl:px-32">{children}</div>
    );
};

export default Container;
