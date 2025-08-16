import logo from '../../imagens/logo.svg';
import './style.css'

function Logo(){
    return(
        <div className="logo">
          <img src={logo} alt="logo" className='logo-img'/>
          <p> <strong>Zara</strong>Books</p>
        </div>
    )
}

export default Logo