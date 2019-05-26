import React from 'react'
import Helmet from 'react-helmet'
import icon from '../images/icon.png'

export default function Head() {
    return (
        <Helmet encodeSpecialCharacters={true} titleTemplate="%s | Julian Johannesen" defaultTitle="Julian Johannesen" >

            <html lang="en" amp />
            
            <base target="_blank" href="/" />
            <link rel="canonical" href="/" />
            
            <meta name="description" content="Julian Johannesen is a front-end web developer living and working in the Boston area." />
            <meta name="keywords" cpntent="portfolio,blog,personal,resume,professional" />
            
            <meta itemprop="name" content="Julian Johannesen" />
            <meta itemprop="description" content="Julian Johannesen is a front-end web developer living and working in the Boston area." />
            <meta itemprop="image" content={icon} />
            
            <meta property="og:site_name" content="Julian Johannesen" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://julianjohannesen.com" />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content="Julian Johannesen" />
            <meta property="og:description" content="Julian Johannesen is a front-end web developer living and working in the Boston area." />
            <meta property="og:image" content={icon} />
            <meta property="og:image:secure_url" content={icon} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Julian Johannesen" />
            <meta name="twitter:description" content="Julian Johannesen is a front-end web developer living and working in the Boston area." />
            <meta name="twitter:image" content={icon} />

        </Helmet>
    )
}
