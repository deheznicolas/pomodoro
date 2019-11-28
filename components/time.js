import React from "react";

function Time(props) {
    //transformation des secs eau format min:sec + arrondi et formatage en base 60
    let minute = Math.floor(props.seconde / 60);
    let seconde = props.seconde % 60;
    minute = `${minute}`.padStart(2, 0);
    seconde = `${seconde}`.padStart(2, 0);
    return <h1 className={"timer"}>{`${minute}:${seconde}`}</h1> ;
}

export default Time;
