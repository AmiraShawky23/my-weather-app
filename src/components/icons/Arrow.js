import React from 'react'

const Arrow = ({color}) => {
    return(
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none">
            <path
              d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464467 3.82843C0.269204 4.02369 0.269204 4.34027 0.464467 4.53553C0.659729 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 17L4.5 1L3.5 1L3.5 17L4.5 17Z"
              fill={color}
            />
        </svg>
    )
}

export default Arrow;
