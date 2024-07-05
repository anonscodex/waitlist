import React from 'react';
import Mec from "../assets/mec.jpg"


const FloatingImage2 = () => {
    return (
        <div className="relative">
            <img
                src={Mec}
                alt="Floating Image"
                className=" top-0 right-0 w-52 h-52 object-cover  shadow-md rounded-3xl"
            />
            
        </div>
    );
};

export default FloatingImage2;