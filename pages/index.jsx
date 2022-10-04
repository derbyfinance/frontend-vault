import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { useAccount, useNetwork } from 'wagmi';
import { SendTransaction } from '../components/sendTransaction';
import SignIn from '../components/signin';
import User from '../components/user';
import ContractInfo from '../components/contractInfo';

export default function Home({ session }) {
  const account = useAccount();

  return (
    <div>
      {session && <User user={session.user} />}
      <SignIn />
      <SendTransaction />
      <ContractInfo />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session: session },
  };
}
