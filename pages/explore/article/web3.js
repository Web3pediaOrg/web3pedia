import Head from 'next/head'
import Link from 'next/link'
import Base from '../../../components/base'
import { useRouter } from 'next/router'


const  ArticlesContent = () => {
  const router = useRouter()
  return (
    <>
    <Head>
        <title>Web3 | Web3pedia Articles</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <Base></Base>
    <br></br>
    <div className='articles-content'>
      <Link href='/explore'><a className='b-link'>Web3pedia Explore &gt;</a></Link>&nbsp;&nbsp;<Link href='/explore/articles'><a className='b-link'>Articles &gt;</a></Link>
      <h2>What is Web3?</h2>
      <p>
        <h3>The Evolution of the Web</h3>
        The web has evolved a lot over the years, and the applications of it today are almost unrecognizable from its most early days. The evolution of the web is often partitioned into three separate stages: Web 1.0, Web 2.0, and Web 3.0.
        <h3>What is Web 1.0?</h3>
        Web 1.0 was the first iteration of the web. Most participants were consumers of content, and the creators were typically developers who build websites that contained information served up mainly in text or image format. Web 1.0 lasted approximately from 1991 to 2004.<br></br>
        <br></br>
        Web 1.0 consisted of sites serving static content instead of dynamic HTML. Data and content were served from a static file system rather than a database, and sites didn&apos;t have much interactivity at all.
        <h3>What is Web 2.0?</h3>
        Most of us have primarily experienced the web in its current form, commonly referred to as web2. You can think of web2 as the interactive and social web.<br></br>
        <br></br>
        In the web2 world, you don&apos;t have to be a developer to participate in the creation process. Many apps are built in a way that easily allows anyone to be a creator.<br></br>
        <br></br>
        If you want to craft a thought and share it with the world, you can. If you want to upload a video and allow millions of people to see it, interact with it, and comment on it, you can do that too.<br></br>
        <br></br>
        Web2 is simple, really, and because of its simplicity more and more people around the world are becoming creators
        <h3>What is Web 3.0?</h3>
        There are a few fundamental differences between web2 and web3, but decentralization is at its core.<br></br>
        <br></br>
        Web3 enhances the internet as we know it today with a few other added characteristics. web3 is:
        <ul>
            <li>Verifiable</li>
            <li>Trustless</li>
            <li>Self-governing</li>
            <li>Permissionless</li>
            <li>Distributed and robust</li>
            <li>Stateful</li>
            <li>Native built-in payments</li>
        </ul>
        <br></br>
        In web3, developers don&apos;t usually build and deploy applications that run on a single server or that store their data in a single database (usually hosted on and managed by a single cloud provider).<br></br>
        <br></br>
        Instead, web3 applications either run on blockchains, decentralized networks of many peer to peer nodes (servers), or a combination of the two that forms a cryptoeconomic protocol. These apps are often referred to as dapps (decentralized apps), and you will see that term used often in the web3 space.<br></br>
        <br></br>
        <b>Summary:</b>
        <ul>
            <li>Web1: Read</li>
            <li>Web2: Read-Write</li>
            <li>Web3: Read-Write-Own</li>
        </ul>
      </p>
      <a href='https://forms.gle/NrNGBusMu93Lf9r59' className='b-link' target="_blank" rel="noreferrer">Suggest Edits</a>
    </div>
    <br></br>
    <br></br>
    </>
    
    
  )
}

export default ArticlesContent