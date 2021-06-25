import Link from 'next/link'
import Layout from '../components/Layout'

const Page404 = () => (
  <Layout title="404">
    <h1>404 Page Not Found</h1>
    <p>This is the 404 page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Page404
