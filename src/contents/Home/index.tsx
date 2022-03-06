//  this show all components in HomePage on discord clone
import * as S from './style';

import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderComponent from '../../components/HeaderComponent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discord | Home </title>
      </Head>
      <HeaderComponent />
      <S.HomeContainer>
        <h1>IMAGINE UM <br /> LUGAR...</h1>
        <section>
          <article>
            <h2>Aqui é fácil se encontrar</h2>
            <p>Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver a entrar imediamente, sem nem ter que fazer a chamada</p>
          </article>
        </section>
      </S.HomeContainer>
    </>)
}
export default Home

