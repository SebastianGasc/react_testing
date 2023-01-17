import React, {Fragment, useState, useRef} from 'react';
export function App(){
    

    let numeroUno=useRef();
    let numeroDos=useRef();
    const botonSuma= () =>{
        const num1 = parseInt(numeroUno.current.value); // comentario de prueba
        const num2 = parseInt(numeroDos.current.value);
        var suma = num1+num2;
        console.log(suma);
        
        return suma;
    };

    const botonResta= () =>{
        const num1 = parseInt(numeroUno.current.value);
        const num2 = parseInt(numeroDos.current.value);
        var resta = num1-num2;
        console.log(resta);
        
        return resta;
    };

    const botonMultiplicar= () =>{
        const num1 = parseInt(numeroUno.current.value);
        const num2 = parseInt(numeroDos.current.value);
        var mult = num1*num2;
        console.log(mult);
        
        return mult;
    };

    const botonDividir= () =>{
        const num1 = parseInt(numeroUno.current.value);
        const num2 = parseInt(numeroDos.current.value);
        var division = num1/num2;
        console.log(division);
        
        return division;
    };

    return( 
        
        <Fragment>
            <div><h1>Holaa</h1></div>
            
            <Fragment>
                <h2> Adios </h2>
                <input ref={numeroUno} type="text" placeholder="nueva task"></input>
                <input ref={numeroDos} type="text" placeholder="nueva task"></input>
                <button onClick={botonSuma}>+</button>
                <button onClick={botonResta}>-</button>
                <button onClick={botonMultiplicar}>*</button>
                <button onClick={botonDividir}>/</button>
            </Fragment>
        </Fragment>

    );

}