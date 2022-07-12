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
        <span className='docs-cat-head'>Updates</span><br></br>
        <br></br>
        <span style={{"fontSize":"25px","fontWeight":"500"}}>July 2022</span><br></br>
        <div className='update-docs-div' id='profile-update'>
          <span style={{"fontSize":"25px","fontWeight":"400"}}>Profile Update</span><br></br>
          <span style={{"fontSize":"17px","fontWeight":"400"}}>Display your web3 projects on your web3pedia profile.</span><br></br>
        </div>
      </div>
    </>
  )
}
