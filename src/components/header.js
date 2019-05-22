import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import HeaderStyles from '../styles/header.module.scss'

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
        <header className={HeaderStyles.header}>
            <div>
                <h1 className={HeaderStyles.title}>{data.site.siteMetadata.title}</h1>
                <h2 className={HeaderStyles.subtitle}>{data.site.siteMetadata.subtitle}</h2>
            </div>
            <nav className={HeaderStyles.nav}>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}
