import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


export default function AboutPage() {
	return (
		<Layout>
		
			<main className='main'>
				<p>Hi! I'm full-stack web developer living in the Boston area.</p>
				<p>Please feel free to look over my work on my <Link to='/portfolio'>portfolio page</Link>.</p>
				<p>Need a developer? <Link to='/contact'>Contact me</Link>.</p>
      		</main>
	
		</Layout>
	)
}
