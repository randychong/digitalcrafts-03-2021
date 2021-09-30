import {SignUpButton, SignUpFormInput, SignUpFormDiv} from "./styledComponents/SignUpFormStyles"

const SignUpForm = (props) => {
    return (
        <div>
            <SignUpFormDiv>
                <h1>Create Account</h1>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="firstName" className="form-input" type="text" placeholder="First Name"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="lastName" className="form-input" type="text" placeholder="Last Name"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="birth" className="form-input" type="text" placeholder="Date of Birth"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="address" className="form-input" type="text" placeholder="Address"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="city" className="form-input" type="text" placeholder="City"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="state" className="form-input" type="text" placeholder="State"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="zip" className="form-input" type="text" placeholder="Zip"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="username" className="form-input" type="text" placeholder="Username"/>
                <SignUpFormInput onChange={(e) => props.setForm({...props.form, [e.target.name]: e.target.value})} name="email" className="form-input" type="text" placeholder="Email"/>
                <SignUpButton onClick={() => props.submitForm} type="submit">Sign Up</SignUpButton>
            </SignUpFormDiv>
        </div>
    )
};

export default SignUpForm