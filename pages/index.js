import React from 'react'
import { Hero } from 'components/Hero'
import { Container } from '../components/Container'
import { Meta } from '../components/Meta'
export default function Home() {
    return (
        <Container>
            <Meta/>
            <Hero
                title="CUBE"
                subtitle="アウトプットしていくさいと"
                imageOn
            />
        </Container>
    )
}
