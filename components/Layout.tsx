import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Lokinet' }: Props) => {
  const formattedTitle: string = `${title} | Anonymous Internet Access}`
  return (
    <div>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* Put Common CSS Across different pages here */}
      <div
        className="flex flex-col items-center py-5"
      >
        {children}
      </div>
      <div className='flex justify-center h-40 pb-4'>
        <h3>Work in progress</h3>
        <img src='wip.png' />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
