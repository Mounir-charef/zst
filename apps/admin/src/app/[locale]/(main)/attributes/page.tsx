import { SearchParams } from '../../../../apis/_api-utils';
import { getAttributesQueryOptions } from '../../../../apis/attributeApis';
import useServerData from '../../../../hooks/useServerData';
import AttributesPageContent from './_components/AttributesPageContent';

const AttributesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getAttributesQueryOptions(searchParams),
  });
  return (
    <ServerData>
      <AttributesPageContent />
    </ServerData>
  );
};

export default AttributesPage;
