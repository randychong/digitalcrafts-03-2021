import styled from "styled-components"

export const Header = styled.h1`
margin-bottom: 2rem;
`
export const Input = styled.input`
width: 80%;
border-top: none;
border-right: none;
border-left: none;
margin-bottom: 1rem;
padding-left: 1rem;
padding-bottom: 1rem;
outline: none;
`

export const Button = styled.button`
height: 3rem;
width: 50%;
border: none;
background: ${(props) => (props.register ? "#05445E" : "")};
color: ${(props) => (props.register ? "white" : "")};
background: ${(props) => (props.signup ? "#D4F1F4" : "")};
border-radius: 3px;
transition: 200ms ease;

&:hover {
    cursor: pointer;
    background: #75E6DA;
    color: black;
}
`
export const Paragraph = styled.p`
`
export const Container = styled.div`
 display: flex;
 flex-direction: ${(props) => (props.button ? "" : "column")};
 width: 20rem;
`