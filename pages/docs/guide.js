import Link from 'next/link'
import Head from 'next/head'
import Base from '../../components/base'

export default function Guide() {
  return (
    <>
     <Head>
        <title>Updates | Web3pedia Documentation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-2'>
            <div className='docs-path'>
            <Link href="/docs"><a>Docs</a></Link> &gt; <Link href="/docs/guide"><a>Guide</a></Link>
            </div>
            <span className='docs-cat-head'>Guide</span><br></br>
            <br></br>
            <div className='pg-content-list'>
                <span style={{"fontSize":"19px","fontWeight":"600"}}>Content</span><br></br>
                <ul>
                    <li><Link href="/docs/guide#Overview"><a className='pg-content-link'>Overview</a></Link></li>
                    <li><Link href="/docs/guide#Web3pediaExplore"><a className='pg-content-link'>Web3pedia Explore</a></Link></li>
                    {/* <li><Link href="/docs/guide#Web3pediaBuild"><a className='pg-content-link'>Web3pedia Build</a></Link></li> */}
                </ul>
            </div>
            <br></br>
            <div className='guide-content'>
                <h2 id='#Overview'>Overview</h2>
                ...
                <h2 id='#Web3pediaExplore'>Web3pedia Explore</h2>
                ...
                {/* <h2 id='#Web3pediaBuild'>Web3pedia Build</h2> */}
            </div>
        </div>
    </>
  )
}
