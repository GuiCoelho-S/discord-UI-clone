import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import { HomeButton } from '../../../ui/HomeButton';
import * as S from './style';
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import { StateContext } from '../../../../context/useGlobalState';

function DropdownHome() {
  const { setDropdownState } = useContext(StateContext);

  return (

    <S.HomeContent>
      <header>
        <HomeButton svgColor='#101' textColor="#101">
          <FaDiscord />
          <h2>Discord</h2>
        </HomeButton>
        <S.CloseDropDown onClick={() => setDropdownState(false)} >
          <AiOutlineClose />
        </S.CloseDropDown>

      </header>
      <ul>
        <Link href="/" passHref>
          <S.LinkStyled>Início</S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>Baixar</S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>Nitro</S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>
            <span>Segurança</span>
            <AiOutlineRight />
          </S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>
            <span>Academia de moderadores</span>
            <AiOutlineRight />
          </S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>Suporte</S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>Blog</S.LinkStyled>
        </Link>
        <Link href="/" passHref>
          <S.LinkStyled>Carreiras</S.LinkStyled>
        </Link>
      </ul>
    </S.HomeContent>);
}

export default DropdownHome;
