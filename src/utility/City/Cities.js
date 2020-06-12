import React from 'react';
import City from './City';
import SlickSlider from '../Slider/Slider';

function Cities(props){

    let cities = props.cities.map((city, i)=>{
        return (
            <div className="col s3">
                <City key={i} cityObj={city} />
            </div>
        )
    })

    return (
        <div className="cities-wrapper" key={cities.i}>
            <h1 className="main-header-text">{props.header}</h1>
            <SlickSlider elements={cities}/>
        </div>
    );
}
export default Cities;