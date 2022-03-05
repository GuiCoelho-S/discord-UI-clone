import { useContext } from 'react';
import { AiOutlineClose, AiOutlineDownload, AiOutlineLeft } from 'react-icons/ai';
import { StateContext } from '../../../../context/useGlobalState';
import styled from 'styled-components';
import * as S from '../style';
import { SimpleButton } from '../../../ui/Button';
import Link from 'next/link';

export function SecurityMode() {
  const { setDropdownState, setDropdownActive } = useContext(StateContext);

  const DropdownHeader = styled(S.DropdownHeader)`
    height:70px;

    button: last-child {
      background-color: inherit;
      border-radius: 50%;
      border: 2px solid transparent;
      position:absolute;
      top:10px;
      right:10px;

      width:40px;
      height:40px;
      
      display:grid;
      place-items: center;
      
      svg {
        width: 20px;
        height: 20px;
        fill: #333;
      }
      :hover {
        background-color:rgba(0,0,0,.2);
      }
    }
   
`;

  return (
    <S.DropDownContainer>
      <DropdownHeader>
        <S.BackToMain onClick={() => setDropdownActive('main')}>
          <AiOutlineLeft />
          <p>Voltar</p>
        </S.BackToMain>
        <button onClick={() => setDropdownState(false)}>
          <AiOutlineClose />
        </button>
      </DropdownHeader>
      <S.DropdownUl>
        <S.SubTitle> Central de Segurança</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Visão Geral</span>
          </S.ItemLink>
        </Link>
        <S.SubTitle>Controle sua Experiência</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Quatro passos para uma conta supersegura</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Quadro passos para um servidor super seguro</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Cargo de administrador e moderador no disocrd</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Reportar problemas ao Discord</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Saúde mental no discord</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Conteúdo adulto no discord</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Dicas contra spam e hackers</span>
          </S.ItemLink>
        </Link>
        <S.SubTitle>Pais e educadores</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>O que é discord?</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>O compromisso do discord para uma experiência segura e confiável</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Ajudando seu filho a ficar seguro no discord</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Conversando sobre segurança online com seu filho adolescente</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Respondendo as perguntas mais recorrentes para pais e educadores</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Se o seu filho encontrar um problema</span>
          </S.ItemLink>
        </Link>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Trabalhando com a CARU para proteger usuários no discord</span>
          </S.ItemLink>
        </Link>

      </S.DropdownUl>
      <S.DropdownFooter>
        <SimpleButton bg="var(--brand)" textColor="#fff">
          <AiOutlineDownload />
          <p>Baixar para windows</p>
        </SimpleButton>
      </S.DropdownFooter>
    </S.DropDownContainer >
  )
}
