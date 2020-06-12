import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';

import axios from 'axios';

class Home extends Component{

    // componentDidMount(){
    //     let recommendedCities = axios.get(`${window.apiHost}/cities/recommended`);

    //     recommendedCities.then((res)=>{
    //         console.log(res)
    //         return res.data
    //     })
    // }

    state={
        cities: [],
        europeCitiesUrl : {},
        asiaCitiesUrl : {},
        exoticCitiesUrl : {}

    }

    async componentDidMount(){
        const citiesUrl = `${window.apiHost}/cities/recommended`;
        const europeCitiesUrl = `${window.apiHost}/cities/europe`;
        const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
        const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

        // let recommendedCities = await axios.get(citiesUrl);
        // console.log(recommendedCities.data);

        const citiesPromise = [];
        citiesPromise.push(axios.get(citiesUrl));
        citiesPromise.push(axios.get(europeCitiesUrl));
        citiesPromise.push(axios.get(asiaCitiesUrl));
        citiesPromise.push(axios.get(exoticCitiesUrl));

        Promise.all(citiesPromise).then((data)=>{
            const recommendedCities= data[0].data;
            const europeCities = data[1].data;
            const asiaCities = data[2].data;
            const exoticCities = data[3].data;

            this.setState({
                cities : recommendedCities,
                europeCities,
                asiaCities,
                exoticCities
            })
        })
        
    }  

    render(){

        console.log(this.state.cities)
        console.log(this.state.europeCities)
        console.log(this.state.asiaCities)
        console.log(this.state.exoticCities)


        if((this.state.cities).length === 0){
            return(<><Spinner/></>)
        }

        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="home col s12">
                            <div className="upper-fold">
                                <SearchBox />
                            </div>
                        </div>
                        <div className="col s12">
                            <Cities cities={this.state.cities} header="Recommended Cities For You" />
                        </div>
                        
                    </div>
                </div>
                <div className="container-fluid lower-fold">

                </div>
            </>
        )
    }
}

export default Home;
