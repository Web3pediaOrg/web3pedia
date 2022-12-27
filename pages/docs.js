import Link from 'next/link'
import Head from 'next/head'
import Base from '../components/base'

export default function Docs() {
  return (
    <>
     <Head>
        <title>Web3pedia Documentation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <br></br>
      <div className='main-2'>
        <span className='docs-cat-head'>Web3pedia Docs</span><br></br>

        <div className='docs-content'>

          <Link href="/docs/guide">
            <a className='docs-link'>
              <span className='docs-link-head'>Guide</span><br></br>
              <span className='docs-link-decr'>Descriptive how-to content with both high-level introductions and step-by-step workflows for using Web3pedia products.</span>
            </a>
          </Link>

          <Link href="/docs/updates">
            <a className='docs-link'>
              <span className='docs-link-head'>Updates</span><br></br>
              <span className='docs-link-decr'>Get the timeline of the latest updates made to the site .</span>
            </a>
          </Link>

          <Link href="/docs/faq">
            <a className='docs-link'>
              <span className='docs-link-head'>FAQ</span><br></br>
              {/* <span className='docs-link-decr'>Get the timeline of the latest updates made to the site .</span> */}
            </a>
          </Link>

        </div>

      </div>
      </>
  )
}
