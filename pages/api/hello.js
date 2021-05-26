// req = HTTP incoming message  -   res = HTTP server response
export default function handler(req,res) {
    res.status(200).json({text: 'Hello'})
}

// INFO: 
// - Non recuperare un percorso API da "getStaticProps" o "getStaticPaths", scrivere il codice lato server direttamente in "getStaticProps" o "getStaticPaths"
// - "getStaticProps" o "getStaticPaths" funziona solo su lato server! Non verrà mai eseguito sul lato client. Non sarà nemmeno incluso nel pacchetto JS per il browser.

// CASI D'USO DEI PERCORSI API
// - Salvataggio dei dati in arrivo (modulo di form) nel database   
// - Comunicazione sicura con un'API di terze parti
// - Anteprima della bozza di contenuto dal tuo CMS

