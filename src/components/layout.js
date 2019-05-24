import React from 'react'
import PageHeader from '../components/header'
import PageFooter from '../components/footer'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'

export default function Layout(props) {
    return (
        <div className={LayoutStyles.wrapper}>
            <div className={LayoutStyles.content}>
                <PageHeader />
                {props.children}
            </div>
            <PageFooter />
        </div>
    )
}
