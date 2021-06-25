import React, { ReactNode } from 'react'
import Link from 'next/link'

const headerLinks = [
  {
    to: '/faq',
    title: 'FAQ'
  }
]


const Header = () => (
  <header className="flex justify-between bg-gray-200 p-7">
    <img src='lokinet-logo-black.png' className='max-h-10' />
    <div className='flex items-center justify-end flex-grow pl-5 pr-5'>
      <nav>
        <Link href='/faq'>
          FAQ
        </Link>
      </nav>
    </div>
    <div className='flex items-center'>
      <img src='light-switch.png' className='max-h-10' />
    </div>

  </header >
)

export default Header;