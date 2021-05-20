import styled from "styled-components"

export const SignUpButton = styled.button `
    background-color: #9ab5e1;
    background-image: linear-gradient(315deg, #9ab5e1 0%, #f39fdc 74%);74%); 74%);
    width: 12rem;
    height: 40px;
    color: white;
    font-family: san-serif;
    font-size: 1.1rem;
    border-radius: 5px;
    border: 0;
    outline: none;
    margin-top: 1rem;
`

export const SignUpFormInput = styled.input `
    height: 2.2rem;
    width: 9rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px black solid;
    padding-left: 20px;
    outline: none;
    margin: 0.5rem;
    background: transparent;
`

export const SignUpFormDiv = styled.form `
    display: grid;
    place-items:center;
    background: rgba(250, 250, 250, 0.9);
    padding: 2rem;
    width: 100%;
    margin: 1rem;
    border-radius: 5px;
`

export const UserDetailsDiv = styled.div `
    display: grid;
    place-items: center;
    background: rgba(250, 250, 250, 0.9);
    padding: 2rem;
    width: 100%;
    margin: 1rem;
    border-radius: 5px;
`