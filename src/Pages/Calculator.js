import React from "react";
import { useSearchParams } from "react-router-dom";

export const Calculator = () =>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('num1'), searchParams.get('op'), searchParams.get('num2'));
    console.log(searchParams.get('op'));
    let calculateValue = eval(`${searchParams.get('num1')} ${searchParams.get('op')} ${searchParams.get('num2')}`);
    return(
        <div>Your calculation Result is <span id="calc-result">{calculateValue}</span></div>
    )
}
