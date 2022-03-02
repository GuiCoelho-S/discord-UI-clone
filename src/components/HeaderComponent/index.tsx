import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import * as S from './style';

function HeaderComponent() {
  return (
    <S.HeaderContainer>
        <header>
          <S.HomeButton>
            <FaDiscord />            
            <h2>Discord</h2>
          </S.HomeButton>
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
        </S.NavList>
        </header>
    </S.HeaderContainer>);
}

export default HeaderComponent;