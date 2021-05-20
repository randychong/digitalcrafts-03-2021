import {SignUpButton, SignUpFormInput, SignUpFormDiv} from "./styledComponents/SignUpFormStyles"

const SignUpForm = (props) => {
    console.log(props)
    return (
        <div>
            <SignUpFormDiv>
                <h1>Create Account</h1>
                <SignUpFormInput onChange={(e) => props.setFirstName(e.target.value)} className="form-input" type="text" placeholder="Firstname"/>

                <SignUpFormInput onChange={(e) => props.setLastName(e.target.value)} className="form-input" type="text" placeholder="Lastname"/>

                <SignUpFormInput onChange={(e) => props.setEmail(e.target.value)} className="form-input" type="text" placeholder="Email"/>

                <SignUpFormInput onChange={(e) => props.setPassword(e.target.value)} className="form-input" type="password" placeholder="Password"/>

                <SignUpFormInput onChange={(e) => props.setPassword2(e.target.value)} className="form-input" type="password" placeholder="Re-type password"/>

                <SignUpButton type="submit">Sign Up</SignUpButton>
            </SignUpFormDiv>
        </div>
    )
};

export default SignUpForm