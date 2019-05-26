import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Helmet from 'react-helmet'

export default function AboutPage() {
	return (
		<Layout>
			<Head />
			<Helmet>
				<title>About</title>
			</Helmet>
			<main>
				<p>Hi! I'm full-stack web developer living in the Boston area.</p>
				<p>Please feel free to look over my work on my <Link to='/portfolio'>portfolio page</Link>.</p>
				<p>Need a developer? <Link to='/contact'>Contact me</Link>.</p>
      		</main>
		</Layout>
	)
}
