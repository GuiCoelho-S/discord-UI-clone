import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import * as S from './style';
import { SimpleButton } from '../ui/Button';
import { HomeButton } from '../ui/HomeButton';
import DropDown from './Dropdown';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function HeaderComponent() {

  const [ dropdown, setDropDown ] = useState(false);

  return (
    <S.HeaderContainer>
        <header>
          <HomeButton>
            <FaDiscord />            
            <h2>Discord</h2>
          </HomeButton>
          <S.NavList>
          <ul>
            <li>
              <Link href="/ffddfdfdf" >Baixar</Link>
            </li>
            <li>
              <Link href="/" >Nitro</Link>
            </li>
            <li>  
              <Link href="/" >Segurança</Link>
            </li>
            <li>
              <Link href="/" >Suporte</Link>
            </li>
            <li>
              <Link href="/" >Blog</Link>
            </li>
            <li>
              <Link href="/" >Carreiras</Link>
            </li>            
          </ul>
          <button onClick={() => setDropDown(!dropdown)}>Testar</button>
        </S.NavList>
          <SimpleButton><p>Entrar</p></SimpleButton>
        </header>
        <CSSTransition in={dropdown} timeout={200} classNames="dropdown" unmountOnExit>
          <DropDown />
        </CSSTransition>
    </S.HeaderContainer>);
}

export default HeaderComponent;