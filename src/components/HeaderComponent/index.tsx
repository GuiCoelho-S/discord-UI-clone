import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import * as S from './style';
import { SimpleButton } from '../ui/Button';
import { HomeButton } from '../ui/HomeButton';
import DropDown from './Dropdown';
import { CSSTransition } from 'react-transition-group';
import { useContext } from 'react';
import { StateContext } from '../../context/useGlobalState';

function HeaderComponent() {
  const { dropDownState, setDropDownState } = useContext(StateContext);
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

        <button onClick={() => setDropDownState(true)}>Testar</button>
      </S.NavList>
      <SimpleButton>
        <p>Entrar</p>
      </SimpleButton>
    </header>
    <CSSTransition in={dropDownState} timeout={200} classNames="dropdown" unmountOnExit>
      <DropDown />
    </CSSTransition>
  </S.HeaderContainer>);
};

export default HeaderComponent;
