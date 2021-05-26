// "App" 
// - componente di 1° livello che sarà comune a tutte le pagine
// - utilizzare il componente per mantenere lo "stato" durante la navigazione tra le pagine
// - IMPORTARE IL CSS GLOBALE SOLO IN QUESTO COMPONENTE!!!!!!!

import '../styles/global.css'

export default function App({Component, pageProps}) {
    return <Component {...pageProps}/>
}