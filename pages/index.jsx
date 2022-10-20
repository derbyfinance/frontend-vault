import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { useAccount, useNetwork } from 'wagmi';
import { SendTransaction } from '../components/sendTransaction';
import SignIn from '../components/signin';
import User from '../components/user';
import ContractInfo from '../components/contractInfo';
import { Deposit } from '../components/deposit';
import NavBar from '../components/NavBar/NavBar';
import GlobalStyle from '../styled/ThemeConfig';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
// import { Navbar } from '../styled/Navbar.styled';

export default function Home({ session, ...props }) {
  const account = useAccount();
  return (
    <>
      <Layout></Layout>
      {session && <User user={session.user} />}
      {/* <SignIn />
      <SendTransaction />
      <ContractInfo />
      <Deposit />
    </Navbar> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session: session },
  };
}
