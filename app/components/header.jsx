import { Link} from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'



function Header() {



    return (
        <header className="header">
            <div className="contenedor barra">
                <Link className="logo" to='/'>
                    <img className='logo' src={logo} alt='imgen logo'></img>
                </Link>
                <Navegacion/>

            </div>
        </header>
    )
}

export default Header