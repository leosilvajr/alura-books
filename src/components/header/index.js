import './style.css'
import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'

function Header(){
    return (
        <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    )
}

export default Header