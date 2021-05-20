import React from 'react'
import {UserDetailsDiv} from "./styledComponents/SignUpFormStyles"

export default function UserDetails(props) {
    return (
        <div className="user-details">
            <UserDetailsDiv>
                <h1>User Details</h1>
                {console.log(props.newUser)}
                {/* <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <p>Re-typed Password: {props.password2}</p> */}
            </UserDetailsDiv>
        </div>
    )
}
