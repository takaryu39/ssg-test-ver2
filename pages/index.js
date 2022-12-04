import React from 'react'
import { Hero } from 'components/Hero'
import { Container } from '../components/Container'

export default function Home() {
    return (
        <Container>
            <Hero
                title="CUBE"
                subtitle="アウトプットしていくさいと"
                imageOn
            />
        </Container>
    )
}
