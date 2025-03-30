import React from 'react'
import { Header } from '../global/haeder/Header'
import { Footer } from '../global/footer/Footer'

export const Layout = (props) => {
  return (
    <>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>
  )
}
