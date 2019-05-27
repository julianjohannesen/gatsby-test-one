import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/header'
import PageFooter from '../components/footer'

const LayoutStyled = styled.div`
    
`

export default function Layout(props) {
    return (
        <LayoutStyled>
            <div>
                <PageHeader />
                {props.children}
            </div>
            <PageFooter />
        </LayoutStyled>
    )
}
