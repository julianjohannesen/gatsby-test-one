import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// We can't use useStaticQuery here, b/c
// Gatsby doesn't allow us to access the
// context property of our created pages,
// which is where we've got the slug.
// Instead, we need to create a separate
// query variable. We also need to export
// the query, so that Gatsby runs it
export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields:{slug: {eq: $slug}}) {
        frontmatter {
            title
            date
        }
        html
    }
    }
`

export default function Blog(props) {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={ {__html: props.data.markdownRemark.html} }></div>
        </Layout>
        )
    }
    