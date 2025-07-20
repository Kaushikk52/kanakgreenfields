import React from "react";

const FeatureBox = ({img, title}) => {
    return (
        <div
            className=" flex-1 "
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="hover:bg-green-800/60 flex items-end para p-10 transition-all ease-in-out duration-500 w-full h-full">
                <h2 className=" md:text-5xl text-2xl w-[50%] text-white">{title}</h2>
            </div>

        </div>
    );
};

export default FeatureBox;
