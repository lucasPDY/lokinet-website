import Link from 'next/link'
import Layout from '../components/Layout'

const FaqPage = () => (
  <Layout title="FAQ">
    <h1>FAQ</h1>
    <p>This is the FAQ page</p>
    <p>Building in process</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default FaqPage
