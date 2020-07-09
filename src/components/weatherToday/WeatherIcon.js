import React from 'react';
import CloudSun from "../icons/CloudSun";
import Cloud from '../icons/Cloud';
import BrokenCloud from '../icons/BrokenCloud';
import CloudMoon from '../icons/CloudMoon';
import CloudMoonRain from '../icons/CloudMoonRain';
import CloudMoonThunder from '../icons/CloudMoonThunder';
import Snow from '../icons/Snow';
import CloudSunRain from '../icons/CloudSunRain';
import CloudSunThunder from '../icons/CloudSunThunder';
import ColudRain from '../icons/ColudRain';
import FullMoon from '../icons/FullMoon';
import HazeMoon from '../icons/HazeMoon';
import HazeSunny from '../icons/HazeSunny';
import Sun from '../icons/Sun';

const WeatherIcon = ({icon}) => {
    if(icon === '01d') {
        return (
            <Sun />
        )
    }else if (icon === '01n') {
        return(
            <FullMoon />
        )
    }else if (icon === '02d') {
        return(
            <CloudSun />
        )
    }else if (icon === '02n') {
        return(
            <CloudMoon />
        )
    }else if (icon === '03d' || icon === '03n') {
        return(
            <Cloud />
        )
    }else if (icon === '04d' || icon === '04n') {
        return(
            <BrokenCloud />
        )
    }else if (icon === '13d' || icon === '13n') {
        return(
            <Snow />
        )
    }else if (icon === '50d') {
        return(
            <HazeSunny />
        )
    }else if (icon === '50n') {
        return(
            <HazeMoon />
        )
    }else if (icon === '11n') {
        return(
            <CloudMoonThunder />
        )
    }else if (icon === '11d') {
        return(
            <CloudSunThunder />
        )
    }else if (icon === '10n') {
        return(
            <CloudMoonRain />
        )
    }else if (icon === '10d') {
        return(
            <CloudSunRain />
        )
    }else if (icon === '09n' || icon === '09d') {
        return(
            <ColudRain />
        )
    }
}

export default WeatherIcon;