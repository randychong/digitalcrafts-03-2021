import React from 'react'
import { Header, Input, Button, Paragraph } from "../styled-components/Form.components"
import { Container } from '../styled-components/Form.components'

export default function Form() {
    return (
        <div>
            <Container>
                <Header>LOGIN</Header>
                <Input placeholder="EMAIL" />
                <Input placeholder="PASSWORD" />
            <Paragraph>FORGOT YOUR PASSWORD?</Paragraph>

            <Container button>
                <Button register>REGISTER</Button>
                <Button signup>SIGN IN</Button>
            </Container>
            </Container>
        </div>
    )
}
