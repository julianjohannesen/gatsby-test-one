import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function NotFound() {
    return (
        <Layout>
            <p>
                We couldn't find the page you were looking for.
            </p>
            <p>
                <Link to='/'>Head home.</Link>
            </p>
        </Layout>
    )
}
