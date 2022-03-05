import * as S from '../style';
import { HomeButton } from '../../../ui/HomeButton';
import { AiOutlineClose, AiOutlineDownload, AiOutlineRight } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import { SimpleButton } from '../../../ui/Button';
import { useContext } from 'react';
import { StateContext } from '../../../../context/useGlobalState';

export function MainMode() {

  const { setDropdownState, setDropdownActive } = useContext(StateContext);
  return (
    <S.DropDownContainer>
      <S.DropdownHeader>
        <HomeButton textColor="#333" svgColor="#333" textSize={"1rem"} svgSize={30} >
          <FaDiscord />
          <p>Discord</p>
        </HomeButton>
        <button onClick={() => setDropdownState(false)}>
          <AiOutlineClose />
        </button>
      </S.DropdownHeader>

      <S.DropdownUl>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Início</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Baixar</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Nitro</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ChangeMode onClick={() => setDropdownActive('security')}>
            <span>Segurança</span>
            <AiOutlineRight />
          </S.ChangeMode>
        </Link>
        <Link href="/" passHref>
          <S.ChangeMode onClick={() => setDropdownActive('mods')}>
            <span>Academia de Moderadores</span>
            <AiOutlineRight />
          </S.ChangeMode>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>Suporte</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Blog</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>Carreiras</span>
          </S.ItemLink>
        </Link>


      </S.DropdownUl>

      <S.DropdownFooter>
        <SimpleButton bg="var(--brand)" textColor="#fff">
          <AiOutlineDownload />
          <p>Baixar para windows</p>
        </SimpleButton>
      </S.DropdownFooter>
    </S.DropDownContainer>);
}
