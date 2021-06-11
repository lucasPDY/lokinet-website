import React, { ReactNode } from 'react'
import Link from 'next/link'




const Header = () => (
    <header className="flex items-center justify-center bg-gray-200">
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
                <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/users">
                <a>Users List</a>
            </Link>{' '}
            | <a href="/api/users">Users API</a>
        </nav>
    </header >
)

export default Header;