import React from 'react'
import PageHeader from '../components/header'
import PageFooter from '../components/footer'

export default function Layout(props) {
    return (
        <div>
            <div>
                <PageHeader />
                {props.children}
            </div>
            <PageFooter />
        </div>
    )
}
