import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from 'antd';

const IndexPage = () => (
  <Layout title="Home">
    <div className='flex flex-col py-6'>
      <h1>Welcome to the Lokinet Page 👋</h1>
      <p className='self-center'>
        <Link href="/about">
          {/* <a>About</a> */}
          <Button type='primary'>About</Button>
        </Link>
      </p>
    </div>

  </Layout>
)

export default IndexPage
