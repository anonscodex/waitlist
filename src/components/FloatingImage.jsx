import React from 'react';
import Elect from "../assets/elect.jpg"


const FloatingImage = () => {
    return (
        <div className="relative">
            <img
                src={Elect}
                alt="Floating Image"
                className=" top-0 right-0 w-52 h-52 object-cover  shadow-md rounded-3xl"
            />
            
        </div>
    );
};

export default FloatingImage;
