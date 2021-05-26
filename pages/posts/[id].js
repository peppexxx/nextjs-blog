import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

import Date from '../../components/date'

// Generare pagine statiche con il Router Dinamico
// - 1 - creare una pagina in /pages/posts/[id].js  ([id] sarà il parametro che verrà mappato)
// - 2 - Renderizzare il componente React 
// - 3 - "getStaticPaths" ritorna un array di possibili valori per "l'id"
// - 4 - "getStaticProps" recuperare i dati necessari per il post "id"


import { getAllPostIds, getPostData } from '../../lib/posts'


// Utilizzare "getStaticPaths" per recuperare tutti i possibili post del Blog
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,                  // contiene l'array di percorsi che includono i 'params'

    fallback: false         // se è "false", allora qualsiasi percorso non restituito da getStaticPaths risulterà una pagina 404
                            // se è "true", i percorsi verranno visualizzati in HTML in fase di compilazione
                            // se è "blocking", i percorsi sono memorizzati nella cache per le richieste future cosi accade solo una volta.
  }
} 

// Utilizzare "getStaticProps" per recuperare un post specifico dato un ID.
export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}



export default function Post({postData}) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </Layout>
  )
}