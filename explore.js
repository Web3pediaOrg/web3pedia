import Head from 'next/head'
import Link from 'next/link'
import ExploreBase from '../components/ExploreBase'
// import BuildBase from '../components/BuildBase'


export default function Explore() {
    return (
        <>
            <Head>
                <title>Web3pedia Explore</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <ExploreBase></ExploreBase>
            
        </>
    )
}