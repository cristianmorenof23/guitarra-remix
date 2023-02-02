import { getGuitarras } from "~/models/guitarras.server"
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from "~/components/listado-guitarras"


export function meta() {
    return {
        title: 'GuitarraLA - Tienda de Guitarras',
        description: 'GuitarraLA - Nuestra coleccion de Guitarras'
    }
}


export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}



function Tienda() {

    const guitarras = useLoaderData()
    return (

        <ListadoGuitarras
            guitarras={guitarras} />

    )
}

export default Tienda