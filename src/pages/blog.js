import React from 'react'
import { Link } from 'gatsby'
// Enable Graphql and static query
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export default function BlogPage() {
	
	// Store the Graphql query result. In the query
	// I'm grabbing the post frontmatter, and the
	// full post
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
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	// console.log("This is the edges array", data.allMarkdownRemark.edges)
	
	// For convenience
	const edges = data.allMarkdownRemark.edges
	
	// Map over the edges array to generate posts
	const generatePosts = () => {
		// If there are any edges, then ...
		if(edges.length > 0) {
			// Map over the edges and return an array 
			// of posts
			return edges.map( (edge,index) => (
			<li key={index}>
				<h2>
					<Link to={`/blog/${edge.node.fields.slug}`}>
						{edge.node.frontmatter.title}
					</Link>
				</h2>
				<h3>
					{edge.node.frontmatter.date}
				</h3>
			</li>
		))}
		// Otherwise,  
		else {
			console.warn('No edges found')
			return 'No edges found'
		}
	}

	return (
		<Layout>
		<Head />
			<main>
				<ul>
					{generatePosts()}
				</ul>
			</main>
		</Layout>
	)
}
