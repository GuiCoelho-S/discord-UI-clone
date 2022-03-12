import { FaDiscord } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import * as S from './style';
import { SimpleButton } from '../ui/Button';
import { HomeButton } from '../ui/HomeButton';
import { CSSTransition } from 'react-transition-group';
import { useContext } from 'react';
import { StateContext } from '../../context/useGlobalState';
import { MainMode } from './Dropdown/MainMode';
import { SecurityMode } from './Dropdown/SecurityMode';
import { ModsMode } from './Dropdown/ModeratorsMode/ModsMode';

function HeaderComponent() {
  const { dropdownState, setDropdownState, dropdownActive } = useContext(StateContext);

  return (
    <S.HeaderContainer>
      <header>
        <HomeButton textSize={"1.8rem"} svgSize={40} >

          <FaDiscord />
          <p>Discord</p>
        </HomeButton>
        <S.NavList>
          <ul>
            <li>
              <Link href="/" >Baixar</Link>
               </li>   
             <li>
              <Link href="/" >Nitro</Link>
            </li>
            <li>
              <Link href="/" >Segurança</Link>
            </li>
            <li>
            <Link href="/" >Suporte</Link>
            </li >
            <li>
              <Link href="/" >Blog</Link>
            </li>
            <li >
              <Link href="/" >Carreiras</Link>
            </li>
          </ul>
        </S.NavList>
        <div>
          <SimpleButton>
            <p>Entrar</p>
          </SimpleButton>
          <S.OpenDropdown onClick={() => setDropdownState(true)} >
            <GiHamburgerMenu />
          </S.OpenDropdown>
        </div>
      </header>

      <CSSTransition in={dropdownState === true} timeout={200} classNames="dropdown" unmountOnExit>
        <S.ContainerDropdown>
          <CSSTransition in={dropdownState && dropdownActive === 'main'} timeout={200} classNames="dropdown" unmountOnExit>
            <MainMode />
          </CSSTransition>
          <CSSTransition in={dropdownState && dropdownActive === 'security'} timeout={200} classNames="dropdown" unmountOnExit>
            <SecurityMode />
          </CSSTransition>
          <CSSTransition in={dropdownState && dropdownActive === 'mods'} timeout={200} classNames="dropdown" unmountOnExit>
            <ModsMode />
          </CSSTransition>
        </S.ContainerDropdown>
      </CSSTransition>


    </S.HeaderContainer>);
};

export default HeaderComponent;
