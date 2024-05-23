import React from 'react';
import EditProductPageContent from './_components/EditProductPageContent';
import useServerData from '../../../../../../hooks/useServerData';
import { TypedParamsWithId } from '../../../../../../types/page';
import { getProductDetailsQueryOptions } from '../../../../../../apis/productApis';

const EditProductPage = async ({
  params: { id },
}: {
  params: TypedParamsWithId;
}) => {
  const { ServerData } = await useServerData({
    ...getProductDetailsQueryOptions(id),
  });

  return (
    <ServerData>
      <EditProductPageContent />
    </ServerData>
  );
};

export default EditProductPage;
