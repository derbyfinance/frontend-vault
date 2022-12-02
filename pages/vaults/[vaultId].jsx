import React from 'react';
import { useRouter } from 'next/router';
import SingleVaultPageComponent from '@components/pageComponents/SingleVaultPage';
import Layout from '@components/Layout/Layout';


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
