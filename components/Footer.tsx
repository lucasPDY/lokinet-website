import React, { ReactNode } from 'react'


type Props = {
    children?: ReactNode
    title?: string
}

const Footer = () => (
    <footer className="flex items-center justify-center bg-gray-200">
        < hr />
        <span>This is the footer (Footer)</span>
    </footer >
)

export default Footer;