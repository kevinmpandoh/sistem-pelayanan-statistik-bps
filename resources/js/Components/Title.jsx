import React from "react";

const Title = ({ title }) => {
    return (
        <h3 className="mx-5 lg:text-3xl text-xl font-bold dark:text-white mt-10 mb-5 ">
            {title}
        </h3>
    );
};

export default Title;
