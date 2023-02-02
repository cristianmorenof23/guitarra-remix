import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return {
        title: 'GuitarLA - Sobre Nosotros',
        description: 'Venta de guitarras, blog de musica'
    }
}

export function links () {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}


function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt='imagen sobrenosotros'/>

                <div>
                    <p>Pellentesque ultrices luctus dui a facilisis. Phasellus blandit eget ex eu ultricies. Pellentesque quis feugiat mi. Vivamus conseest congue consequat eu id augue. Morbi rutrum ipsum in velit sodales ullamcorper. Cras finibus, mi non laoreet interdum, dui massa hendrerit velit, at laoreet lacus orci vitae mauris. Vivamus ut gravida ipsum, non faucibus odio. Nam vitae neque non nibh tincidunt lobortis at eu augue. Proin laoreet risus vel quam faucibus, eget sagittis leo tristique.</p>

                    <p>Pellentesque ultrices luctus dui a facilisis. Phasellus blandit eget ex eu ultricies. Pellentesque quis feugiat mi. Vivamus consequon laoreet interdum, dui massa hendrerit velit, at laoreet lacus orci vitae mauris. Vivamus ut gravida ipsum, non faucibus odio. Nam vitae neque non nibh tincidunt lobortis at eu augue. Proin laoreet risus vel quam faucibus, eget sagittis leo tristique.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros