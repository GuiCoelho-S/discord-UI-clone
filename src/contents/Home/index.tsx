//  this show all components in HomePage on discord clone

import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from '../../components/HeaderComponent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discord | Home </title>
      </Head>
      <HeaderComponent />
    </>)
}
export default Home

