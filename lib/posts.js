import fs from 'fs'
import path from 'path'
// gray-matter è una libreria che permette di analizzare i metadati in ogni file di markdown.
import matter from 'gray-matter'    

// remark - remark-html permette di eseguire il rendering del contenuto di markdown in HTML
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')    // otteniamo la directory della cartella posts (contengono i file .md)



// Recuperiamo i dati dal FileSystem    (oppure da un'endpoint API - oppure da un database client es: firebase)
export function getSortedPostsData() {
  // Ottieni i nomi dei file sotto /post
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Rimuove ".md" dal nome del file per ottenere ID
    const id = fileName.replace(/\.md$/, '')

    // Legge il file di "markdown" come stringa
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Usa gray-matter per analizzare la sezione post metadati
    const matterResult = matter(fileContents)

    // Combina i dati con l'ID
    return {
      id,
      ...matterResult.data
    }
  })
  // Ordina post per data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Recupera gli "id dei post" per le rotte
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    // Restituisce un Array che assomiglia a questo:
    // [ {params: {id: 'ssg-ssr'}} , {params: {id: 'pre-rendering'}}]

    return fileNames.map(fileName => {
        // Ogni oggetto deve avere la 'params' chiave e contenere un oggetto con la 'id' chiave, altrimenti "getStaticPaths" fallirà
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

// Recuperiamo i dati del "post id" e il contenuto del markdown in html
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Usiamo 'gray-matter' per parsificare i metadati 
    const matterResult = matter(fileContents)

    // Usiamo 'remark' per convertire il markdown in HTML string
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()


    // Combina i dati con id e contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}








/* MODO 2 - recuperiamo i dati con un endpoint API esterno (Next.js esegue il polyfill 'fetch()' sia sul client che sul server)

    export async function  getSortedPostsDataAPI() {
        // invece del file system,
        // recupera i dati del post da un endpoint API esterno
    const res = await fetch('..')
    return res.json()
    }
*/

/* MODO 3 - recuperiamo i dati interrogando direttamente il database (es: Firebase)

    import someDatabaseSDK from 'someDatabaseSDK'
    const databaseClient = someDatabaseSDK.createClient();
    export function getSortedPostsDataDB() {
    // invece del file system,
    // Recupera i dati del post da un database
    return databaseClient.query('SELECT posts...')
    }
*/