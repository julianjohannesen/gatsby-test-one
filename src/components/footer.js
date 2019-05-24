import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

export default function PageFooter() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className='footer'>
            <p>Created by {data.site.siteMetadata.author}, copyright 2019</p>
        </footer>
    )
}
