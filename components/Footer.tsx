import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Footer = () => (
    <footer className='p-x-5'>
        <hr />
        <span>This is the footer (Footer)</span>
    </footer>
)

export default Footer;