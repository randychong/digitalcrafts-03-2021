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
    render() {
        return (
            <div>
                <h1>Forms React</h1>
                    <div className="shipping-container">
                        <form className="shipping-form">
                            <input type="text"
                                className="input-item"
                                placeholder="First Name" 
                                value={this.state.firstName} 
                                onChange={(e) =>
                                    this.setState({
                                    firstName: e.target.value
                                    })
                                }
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="Last Name"
                            />
                            <input type="text" 
                            className="input-item" 
                            id="street" placeholder="Street Address"
                            />
                            <input type="text" 
                            className="input-item" 
                            id="apt" placeholder="Apt, Suite"
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="Postal Code"
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="City"
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="State"
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="Country"
                            />
                            <input type="text" 
                            className="input-item" 
                            placeholder="Phone"
                            />
                            <input type="submit" 
                            className="input-item" 
                            id="btn" 
                            placeholder="Submit"
                            />
                        </form>
                    </div>
            </div>
        )
    }
}
