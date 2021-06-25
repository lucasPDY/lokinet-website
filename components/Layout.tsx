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
      <div
        className="flex flex-col items-center "
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
