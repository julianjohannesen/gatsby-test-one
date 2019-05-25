import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function PageHeader() {

    const data = useStaticQuery(graphql`
        query {
                site {
                siteMetadata {
                    title,
                    subtitle
                }
            }
        }
    `)

    return (
        <header>
            <div>
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>{data.site.siteMetadata.subtitle}</h2>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}
