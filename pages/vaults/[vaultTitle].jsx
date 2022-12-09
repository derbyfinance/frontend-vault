import React from 'react';
import { useRouter } from 'next/router';
import SingleVaultPageComponent from '@components/pageComponents/SingleVaultPage';
import Layout from '@components/Layout/Layout';


const SingleVaultPage = () => {
  const router = useRouter();
  const { vaultTitle } = router.query;
  return (
    <Layout>
      <SingleVaultPageComponent vaultInfo={vaultTitle} />
    </Layout>
  );
};

export default SingleVaultPage;
