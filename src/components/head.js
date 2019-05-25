import React from 'react'
import Helmet from 'react-helmet'

export default function Head() {
    return (
        <div>
            <Helmet 
                encodeSpecialCharacters={true}
                defaultTitle="Gatsby Test" 
                titleTemplate="%s | Gatsby Test"
                onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
            >
                <html lang="en" amp />
                <base target="_blank" href="https://awesome-northcutt-7e274f.netlify.com/" />
                <link rel="canonical" href="https://awesome-northcutt-7e274f.netlify.com/" />

                <link rel="apple-touch-icon" href="https://awesome-northcutt-7e274f.netlify.com/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://awesome-northcutt-7e274f.netlify.com/apple-touch-icon-72x72.png" />
            </Helmet>
        </div>
    )
}
