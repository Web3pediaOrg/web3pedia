import Link from 'next/link'
import Head from 'next/head'
import Base from './base'


export default function DocsBase() {
  return (
    <>
     <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Base></Base>
      <br></br>
      <div className="docs-sidenav">
        <div className='docs-cat docs-side-active'>
          <Link href="/docs"><a>Overview</a></Link>
        </div>
      {/* <div className='docs-cat'>
          <Link href="/docs#get-started"><a>Get Started</a></Link>
        </div> */}
        <button className='docs-cat'>Guide <span style={{"float":"right"}}><i className="fa fa-caret-down"></i></span></button>
        <div className='docs-subcat'>
          <Link href="/docs/guide/explore"><a>Explore<sup style={{"fontSize":"9px"}}>Beta</sup></a></Link>
        </div>
        <br></br>
        <button className='docs-cat'>Build <span style={{"float":"right"}}><i className="fa fa-caret-down"></i></span></button>
        <div className='docs-subcat'>

        </div>
        <div className='docs-cat'>
          <Link href="/docs/updates"><a>Updates</a></Link>
        </div>
        <div className='docs-cat'>
          <Link href="/docs/faq"><a style={{"fontSize":"15px"}}>Frequestly Asked Question</a></Link>
        </div>
      </div>
      
    </>
  )
}
