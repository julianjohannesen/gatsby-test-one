import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Helmet from 'react-helmet'

export default function ContactPage() {
    return (
        <Layout>
            <Head />
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <main>
                <p>Call me maybe.</p>
                <p>Call me maybe.</p>
                <p>Call me maybe.</p>
                <p>Call me maybe.</p>
            </main>
        </Layout>
    )
}
