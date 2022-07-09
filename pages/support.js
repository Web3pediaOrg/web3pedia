import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'

export default function Support() {
  
  return (
    <>
     <Head>
        <title>Web3pedia Help</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <br></br>
      <div className='main-2'>
      <span className='support-header'>What can we help<br></br> you with?</span><br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <div className='support-content'>
           Sorry, support is currently offline. But you can still <Link href="/contact"><a className="b-link">Contact Us</a></Link>.
        </div>
      </div>
    </>
     
     
  )
}
