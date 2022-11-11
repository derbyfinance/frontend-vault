import { useEffect } from 'react';
import Head, { defaultHead } from 'next/head';
import { useAccount, useNetwork } from 'wagmi';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import User from '../components/user';
import { SendTransaction } from '../components/sendTransaction';
import SignIn from '../components/SignIn/SignIn';
import ContractInfo from '../components/contractInfo';
import { Deposit } from '../components/deposit';
import Layout from '../components/Layout/Layout';

const Home = ({ session, ...props }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') router.push('/vaults');
  }, []);
  const account = useAccount();

  return (
    <>
      <Layout></Layout>
      {session && <User user={session.user} />}
      <SendTransaction />
      <ContractInfo />
      <Deposit />
    </>
  );
};

export default Home;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session: session },
  };
};
