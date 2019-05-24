import React from 'react'
// Enable Graphql and static query
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

export default function BlogPage() {
	
	// Store the Graphql query result
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges{
					node {
						frontmatter {
							title
							date
						}
						html
						excerpt
					}
				}
			}
		}
	`)
    console.log(data.allMarkdownRemark.edges)
	
	// Map over the edges array to generate posts
	const generatePosts = () => {
		// If there are any edges, then ...
		if(data.allMarkdownRemark.edges.length > 0) {
			// Map over the edge and return an array 
			// of posts
			return data.allMarkdownRemark.edges.map( (edge,index) => (
			<li key={index}>{edge.node.frontmatter.title}</li>
		))}
		// Otherwise,  
		else {
			console.warn('No edges found')
			return 'No edges found'
		}
	}

	return (
		<Layout>
			<main>
				<ul>
					{generatePosts()}
				</ul>
			</main>
		</Layout>
	)
}
