import Link from 'next/link'
import Head from 'next/head'
import Base from '../components/base'
import Footer from '../components/footer'

export default function About() {
  return (
    <>
     <Head>
        <title>About | Web3pedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-header-2'>
        <span className='header-2'>Web3pedia</span><br></br>
        <span className='subheading-2'>Helping People With Web3</span>
      </div>
      <br></br>
      <br></br>
      <div className='about-content'> 
        <p>Web3pedia, built-in 2022, is a one-stop-shop for all queries related to web3. Our mission is to help people build on web3 by providing them everything in one place.</p>
        
        <h2>💡 Behind The Idea</h2>
        <p>With a keen interest in exploring emerging technologies, I (<Link href="/user/SohamSaoji"><a className='b-link'>Soham Saoji</a></Link>) came across the concept of Web3. Out of curiosity, I started digging up more about this technology and got intrigued about its applications. I thought of sharing my learnings about this technology with my friends by creating a DAO and helping them understand the creation of a wallet, its connection and usage.</p>
        <p>However, soon I realised that there will be a lot of people out in the world, who would be interested in knowing about web3 but are getting lost in the information overload. Hence, I thought of curating a website, which will act as an enclyopedia for web3. Anyone seeking out any information on web3 should not look beyond that website.</p>
        <p>Thus, it gave rise to Web3pedia- an online community where people can learn about web3, can fetch different courses/blogs on web3 across platforms, learn about different events happening in and about web3. Eventually, people will also be able to share their own innovations and experiments on web3 with the community. Thus, Web3pedia aims to become a first source of information on web3.</p>
        <h2>🔥 Products</h2>
        <div className='product-block'>
          
            <div className='product'>
                <div className='product-title'>Explore</div>
                <div className='product-description'>Search &#38; Explore articles, hackathons, events etc..</div>
                <a href='/explore' className='b-link' target="_blank">Let&apos;s Go!</a>
            </div>

            <div className='product'>
                <div className='product-title'>News</div>
                <div className='product-description'>Find latest news and articles related to web3</div>
                <a href='/news' className='b-link' target="_blank">Let&apos;s Go!</a>
            </div>
            <br></br>
        </div>
        <br></br>
        <h2>Contact Us</h2>
        <span>You can <Link href="/contact"><a className='b-link'>leave us a message at contact us page</a></Link></span>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  )
}
