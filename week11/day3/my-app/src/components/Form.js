import React, { Component } from 'react'
import '../App.css';

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
        apt: "",
        postal: "",
        city: "",
        state: "",
        country: "",
        phone: "",
    }

    handleInputFormValues = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (e) => {
        const {firstName,
            lastName,
            address,
            apt,
            postal,
            city,
            state,
            country,
            phone,
        } = this.state
        e.preventDefault();
        const formSubmissionData = {
            username: firstName + lastName,
            address: address + "" + apt + "" + city + "" + state + "" + postal + "" + country + "",
            phone: phone,
        }
    }

    render() {
        return (
            <div>
                <h1>Forms React</h1>
                    <div className="shipping-container">
                        <form
                            className="shipping-form"
                            onSubmit={this.handleSubmit}
                            >
                            <input 
                                type="text"
                                className="input-item"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName} 
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                id="street" placeholder="Street Address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                id="apt" placeholder="Apt, Suite"
                                name="apt"
                                value={this.state.apt}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="Postal Code"
                                name="postal"
                                value={this.state.postal}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="City"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="State"
                                name="state"
                                value={this.state.state}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="Country"
                                name="country"
                                value={this.state.country}
                                onChange={this.handleInputFormValues}
                            />
                            <input 
                                type="text" 
                                className="input-item" 
                                placeholder="Phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleInputFormValues}
                            />
                            <input
                                type="submit" 
                                className="input-item" 
                                id="btn" 
                                value="Submit"
                            />
                        </form>
                    </div>
            </div>
        )
    }
}
