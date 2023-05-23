import React from 'react';
import { useParams } from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    const params = useParams();
    console.log(params.colorname);
    return(
        <main style={{backgroundColor: `${params.colorname}`, height: '100vh'}}>
            Background Color Changer
        </main>
    )
}
