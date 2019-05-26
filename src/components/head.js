import React from 'react'
import Helmet from 'react-helmet'

export default function Head() {
    return (
        <div>
            <Helmet
                encodeSpecialCharacters={true}
                titleTemplate="%s | Julian Johannesen"
                defaultTitle="Julian Johannesen"
                onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
            >
                {/* Enable Google's AMP standard */}
                <html lang="en" amp />
                
                {/* Base and canonical URLs 
                <base target="_blank" href="https://awesome-northcutt-7e274f.netlify.com/" />
                <link rel="canonical" href="https://awesome-northcutt-7e274f.netlify.com/" />
                
                {/* Site info */}
                <meta name="description" content="Julian Johannesen is a front-end web developer living and working in the Boston area." />
                <meta name="keywords" cpntent="portfolio,blog,personal,resume,professional" />

                <meta property="og:site_name" content="Julian Johannesen" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://julianjohannesen.com" />
                <meta property="og:locale" content="en" />

                <meta property="og:title" content="Julian Johannesen" />
                <meta property="og:description" content="Julian Johannesen is a front-end web developer living and working in the Boston area.." />
                <meta property="og:image" content="" />
                <meta property="og:image:secure_url" content="" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
            </Helmet>
        </div>
    )
}
