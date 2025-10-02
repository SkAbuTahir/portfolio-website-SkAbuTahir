"use client";
import Squares from '../../components/Squares';

import React from 'react'

function layout() {
    return (
        <div>
            <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#fff'
                hoverFillColor='#222'
            />
        </div>
    )
}

export default layout
