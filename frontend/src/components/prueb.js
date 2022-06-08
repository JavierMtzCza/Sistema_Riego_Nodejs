import React, { useState } from 'react';
import { gsap } from 'gsap';

const Prueb = () => {

    const [data, setData] = useState([]);

    const ConsultarData = () => { fetch('http://localhost:3001/data')
        .then(res => 
            res.json()
        )
        .then(response => 
            console.log(response)
        )  
    }

    // setInterval(() => {
    //     ConsultarData();
    //     //console.log(data);
    // },15000)

    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Info'>
                    <div className='CenterInfo'>
                        {/* <div class="chart-wrapper">
                            <ul class="chart-y">
                                <li>€100,000</li>
                                <li>€80,000</li>
                                <li>€60,000</li>
                                <li>€40,000</li>
                                <li>€20,000</li>
                                <li>€0</li>
                            </ul>
                            <ul class="chart-x">
                                <li data-year="2010">2010</li>
                                <li data-year="2012">2012</li>
                                <li data-year="2015">2015</li>
                                <li data-year="2016">2016</li>
                                <li data-year="2018">2018</li>
                            </ul>
                            <ul class="chart-labels">
                                <li>2018 - €95,000</li>
                                <li>2016 - €72,000</li>
                                <li>2015 - €50,000</li>
                                <li>2012 - €35,000</li>
                                <li>2010 - €15,000</li>
                            </ul>
                        </div> */}
                        <button onClick={ConsultarData}>presiona</button>
                        <div className='Termometro'>
                            <div className='Circulo'></div>
                            <div className='Cuadrado'></div>
                            <div className='Circulo-Temp'></div>
                            <div className='Cuadrado-Temp'></div>
                            <div className='Circulo-Temp-1'></div>
                            <div className='Cuadrado-Temp-1'></div>
                        </div>
                        
                    </div>
                </div>
                <div className='Imagenes'></div>
            </div>
        </div>
    )
}

export default Prueb;