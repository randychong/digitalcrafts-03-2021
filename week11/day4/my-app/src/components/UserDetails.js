import React from 'react'
import {UserDetailsDiv} from "./styledComponents/SignUpFormStyles"

export default function UserDetails(props) {
    console.log("User Details", props.userDetails)
    return (
        <div className="user-details">
            <UserDetailsDiv>
                <h1>User Details</h1>
            </UserDetailsDiv>
        </div>
    )
}
