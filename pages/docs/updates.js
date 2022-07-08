import Link from 'next/link'
import Head from 'next/head'
import DocsBase from '../../components/DocsBase'

export default function Updates() {
  return (
    <>
     <Head>
        <title>Updates | Web3pedia Documentation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <DocsBase></DocsBase>
      <div className='docs-main'>
        <div className='docs-path'>
          <Link href="/docs"><a>Docs</a></Link> &gt; <Link href="/docs"><a>Updates</a></Link>
        </div>
        <span className='docs-cat-head'>Updates</span>
      </div>
    </>
  )
}
