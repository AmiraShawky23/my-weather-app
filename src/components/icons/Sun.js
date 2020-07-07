import React from 'react'

const Sun = () => {
    return(
        <svg width="277" height="277" viewBox="0 0 277 277" fill="none" >
            <g filter="url(#filter0_ddii)">
                <path d="M131.5 18C71.5625 18 23 66.5625 23 126.5C23 186.438 71.5625 235 131.5 235C191.438 235 240 186.438 240 126.5C240 66.5625 191.438 18 131.5 18Z" fill="url(#paint0_radial)"/>
            </g>
            <defs>
                <filter id="filter0_ddii" x="0" y="0" width="277" height="277" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="7" dy="12"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.966667 0 0 0 0 0.491228 0 0 0 0 0.0523611 0 0 0 0.37 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.980813 0 0 0 0 0.995833 0 0 0 0 0.244809 0 0 0 0.17 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.495167 0 0 0 0 0.0291666 0 0 0 0.37 0"/>
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-3" dy="-6"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                    <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
                </filter>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(131.5 126.5) rotate(90) scale(177.11 181.182)">
                    <stop stopColor="#FCFF7E"/>
                    <stop offset="1" stopColor="#FF7F0A"/>
                </radialGradient>
            </defs>
        </svg>
    )
}

export default Sun;
