import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export default function PortfolioPage() {
    return (
        <Layout>
        <Head />
            <main>
                <p>Here's some of my work.</p>
                <p>Here's some of my work.</p>
                <p>Here's some of my work.</p>
                <p>Here's some of my work.</p>
                <p>Need a developer? <Link to='/contact'>Contact me</Link>.</p>
            </main>
        </Layout>
    )
}
