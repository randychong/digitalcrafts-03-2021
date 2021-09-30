import React from 'react'
import { Header, Container } from "../styled-components/Sidebar-components"

export default function Sidebar() {
    return (
        <div>
            <Container>
                <Header>Dashboard</Header>
                <Header>Forms</Header>
                <Header>UI Elements</Header>
                <Header>Charts</Header>
                <Header>Tables</Header>
            </Container>
        </div>
    )
}
