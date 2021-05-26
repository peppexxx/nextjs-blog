// "Head" è simile al tag <head></head> di HTML, serve per inserire i metatag, title, link ecc..
import Head from 'next/head'

// "Link" è utilizzato per la navigazione tra pagine, senza effettuare il refresh di pagina, viene gestito in JS
import Link from 'next/link'

// "Image" è utilizzato per aggiungere un imamgine, nextjs ottimizza l'immagine, carica le immagini quando vengono visualizzate, e garantisce la reattività!
import Image from 'next/image'

import Layout, {siteTitle} from '../components/layout'  // Layout dell'applicazione
import utilStyles from '../styles/utils.module.css' 
import Date from '../components/date'


// Utilizzare "getStaticProps" per passare i dati al componente "Home" in fase di compilazione!!!!!!!
// - In sviluppo,   viene eseguito su ogni richiesta
// - In produzione, viene eseguito in fase di compilazione.
//
// - Può essere esportato SOLO in una pagina, non puoi esportarlo in un file non di pagina
import {getSortedPostsData} from '../lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// Utilizzare "getServerSideProps" per passare i dati al componente "Home" al momento della richiesta!!!!!!
// - Poichè viene chiamato in ogni richiesta, contiene i parametri specifici di richiesta (context)
// - Utilizzarlo solo se si devono recuperare dati prima della richiesta, sarà piu lento di "getStaticProps"
//
//  export async function getServerSideProps(context) {
//    return {
//      props: {
//        props for your component
//      }
//    }
//  }



export default function Home({allPostsData}) {
  console.log(allPostsData)
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>My name is Giuseppe, i have 26 years old and i like programming web</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        
        {/*Caricamento dei dati nella pagina*/}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
  )
}




/*
  <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
*/