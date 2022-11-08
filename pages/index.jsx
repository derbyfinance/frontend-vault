import Head, { defaultHead } from 'next/head';
import { getSession } from 'next-auth/react';
import { useAccount, useNetwork } from 'wagmi';
import User from '../components/user';
import { SendTransaction } from '../components/sendTransaction';
import SignIn from '../components/signin';
import ContractInfo from '../components/contractInfo';
import { Deposit } from '../components/deposit';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Home({ session, ...props }) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') router.push('/vaults');
  }, []);
  const account = useAccount();
  return (
    <>
      <Layout></Layout>
      {session && <User user={session.user} />}
      {/* <SignIn /> */}
      {/* <SendTransaction /> */}
      {/* <ContractInfo /> */}
      {/* <Deposit /> */}
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session: session },
  };
}
