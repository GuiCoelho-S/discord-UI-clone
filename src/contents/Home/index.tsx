//  this show all components in HomePage on discord clone
import * as S from './style';
import Image from 'next/image';
import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderComponent from '../../components/HeaderComponent';
import ChatSvg from '../../assets/Home/01.svg';
import ChannelSvg from '../../assets/Home/02.svg';
import UsersSvg from '../../assets/Home/03.svg';
import CallSessionSvg from '../../assets/Home/04.svg';
import { SimpleButton } from '../../components/ui/Button';
import { AiOutlineDownload } from 'react-icons/ai';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discord | Home </title>
      </Head>
      <HeaderComponent />
      <S.HomeContainer>
        <h1>IMAGINE UM <br /> LUGAR...</h1>
        <S.Content bg={'#fff'}>
          <section>
            <aside>
              <Image src={ChatSvg}
                alt="Imagem estilizada de um servidor do Discord com vários canais para fotos de animaizinhos, estudo, jogos e culinária"
              />
            </aside>
            <article>
              <h2>Crie um espaço controlado por convite onde você se sinta em casa</h2>
              <p>Os servidores do discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplismente falarem do dia sem entupir o chat geral</p>
            </article>
          </section>
        </S.Content>
        <S.Content bg={'whitesmoke'}>
          <section>
            <article>
              <h2>Aqui é fácil de encontrar</h2>
              <p>Ente no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer chamada.</p>
            </article>
            <aside>
              <Image src={ChannelSvg} alt="Imagem estilizada de amigos se reunindo em vários canais e voz" />

            </aside>
          </section>
        </S.Content>
        <S.Content bg={'#fff'}>
          <section>
            <aside>
              <Image src={UsersSvg} alt="Imagem estilizada de smigos em um servidor organizados em funções de Treinador, Líder estudantil e Animal crossing" />
            </aside>
            <article>
              <h2>Para poucos e para muitos</h2>
              <p>Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros, monte canais privados e muito mais.</p>
            </article>
          </section>
        </S.Content>

        <S.FooterContent bg={'#fff'}>
          <section>
            <article>
              <h2>Tecnologia de conexão confiável</h2>
              <p> Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera para desenhar na tela compartilhada</p>
            </article>
            <aside>
              <Image src={CallSessionSvg} alt="Imagem estilizada de amigos conversando por vídeo pelo computador e pelo celular" />
            </aside>

          </section>

          <section>
            <SimpleButton bg={'var(--brand)'} textColor={'#fff'}>
              <AiOutlineDownload />
              <p>Baixar para windows</p>
            </SimpleButton>
          </section>
        </S.FooterContent>
      </S.HomeContainer>
    </>)
}
export default Home

