import Layout from '@components/Layout/Layout';
import SingleVaultPageComponent from '@components/pageComponents/SingleVaultPage';
import { useRouter } from 'next/router';
import React from 'react';

const SingleVaultPage = () => {
  const router = useRouter();
  const { vaultId } = router.query;
  return (
    <Layout>
      <SingleVaultPageComponent vaultInfo={vaultId} />
    </Layout>
  );
};

export default SingleVaultPage;
