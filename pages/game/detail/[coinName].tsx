import React from 'react';
import Layout from '@components/Layout/Layout';
import GameCoinDetailPage from '@components/pageComponents/GameCoinDetailPage';
import { useRouter } from 'next/router';

const SingleVaultPage = () => {
  const router = useRouter();
  const { coinName } = router.query;
  return (
    <Layout>
      <GameCoinDetailPage vaultInfo={coinName} />
    </Layout>
  );
};

export default SingleVaultPage;
