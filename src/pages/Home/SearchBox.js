import React, {Component} from 'react';
import './SearchBox.css'

class SearchBox extends Component {

    state = {
            where: "",
            checkIn: "",
            checkOut: "",
            guests: 0

        }

    changeWhere = (event)=>{
        this.setState({
            where : event.target.value
        })
    }

    changeCheckIn = (event)=>{
        this.setState({
            checkIn : event.target.value
        })
    }

    changeCheckOut = (event)=>{
        this.setState({
            checkOut : event.target.value
        })
    }

    changeGuests = (event)=>{
        this.setState({
            guests : event.target.value
        })
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        alert('Hello, I am being submitted')
    }


    render(){
        return(
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>
                
                {/* where place */}
                <form className="search-box-form" onSubmit={this.handleFormSubmit} >
                    <div className="col m12">
                        <div className="form-label">Where</div>
                        <div className="input-field" id="where">
                            <input className="browser-default" onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where} type="text" />
                        </div>
                    </div>

                    {/* Checkin and checkout */}
                    <div className="col m6">
                        <div className="form-label">Check-In</div>
                        <div className="input-field" id="check-in">
                            <input className="browser-default" onChange={this.changeCheckIn} value={this.state.checkIn} type="date" />
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="form-label">Check-Out</div>
                        <div className="input-field" id="check-in">
                            <input className="browser-default" onChange={this.changeCheckOut} value={this.state.checkOut} type="date" />
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="col m12">
                        <div className="form-label">Guests</div>
                        <div className="input-field" id="where">
                            <input className="browser-default" onChange={this.changeGuests} placeholder="Number of guests" value={this.state.guests} type="number" />
                        </div>
                    </div>

                    {/* Submit the form */}
                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }

}
export default SearchBox;