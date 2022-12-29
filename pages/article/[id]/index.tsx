import {server} from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ServiceShowcase from '../../../components/ServiceShowcase'
import Head from 'next/head'
// import Meta from '../../../components/Meta'

const article = ({ article }:any) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <div className=''>
       <Head key={3}>
        <title>Services</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Meta title={article.title} description={article.excerpt} /> */}
      <ServiceShowcase article={article} />
    </div>
  )
}

export const getStaticProps = async (context:any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = JSON.parse(articles).map((article:any) => article.id)
  const paths = ids.map((id:any) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article