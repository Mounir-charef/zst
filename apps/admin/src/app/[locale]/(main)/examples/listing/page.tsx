import ListingPageContent from './_components/ListingPageContent';
import useServerData from '../../../../../hooks/useServerData';
import { getUsersQueryOptions } from '../../../../../apis/userApis';
import { SearchParams } from '../../../../../apis/_api-utils';

const ListingPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getUsersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <ListingPageContent />
    </ServerData>
  );
};

export default ListingPage;
