import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import Head, { defaultHead } from 'next/head';
import { useRouter } from 'next/router';
import { useAccount, useNetwork } from 'wagmi';
import ContractInfo from '../components/ContractInfo';
import Deposit from '../components/Deposit';
import Layout from '../components/Layout/Layout';
import SendTransaction from '../components/SendTransaction';
import SignIn from '../components/SignIn/SignIn';
import User from '../components/User';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session: session },
  };
};

const Home = ({ session, ...props }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') router.push('/vaults');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const account = useAccount();

  return (
    <>
      <SignIn />
      <Layout></Layout>
      {session && <User user={session.user} />}
      <SendTransaction />
      <ContractInfo />
      <Deposit />
    </>
  );
};

export default Home;
