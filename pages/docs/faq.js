import Link from 'next/link'
import Head from 'next/head'
import Base from '../../components/base'

export default function Docs() {
  return (
    <>
     <Head>
        <title>Web3pedia Documentation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-2'>
        <div className='docs-path'>
          <Link href="/docs"><a>Docs</a></Link> &gt; <Link href="/docs/faq"><a>Faq</a></Link>
        </div>
        <span className='docs-cat-head'>Frequently Asked Questions</span>
      </div>
    </>
  )
}
