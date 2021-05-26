// useRouter permette di accedere al router e di navigare tra le pagine o mappare eventi
import {useRouter} from 'next/router'

export async function getStaticPaths() {
    return [
        {
          params: {
            // Genera staticamente /posts/a/b/c
            id: ['a', 'b', 'c']
          }
        }
        //...
      ]
}

export async function getStaticProps({params}) {
    // params.id sarà come ['a', 'b', 'c']
    return {
        props: {
            
        }
    }
}


export default function Test() {
    const router = useRouter()
    router.push('/url')

    return <h1>Prova</h1>
}