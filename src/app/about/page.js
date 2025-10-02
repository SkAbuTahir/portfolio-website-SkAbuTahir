"use client";
import React from 'react'
// import Squares from '../../components/Squares';
import About from '../../components/About'

const page = () => {
    return (
        <div>


            {/* <Squares classname="absolute top-0 left-0 z-[100] h-screen w-screen"
                speed={0.5}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#fff'
                hoverFillColor='#222'
            /> */}
            <About />

        </div>
    )
}

export default page;