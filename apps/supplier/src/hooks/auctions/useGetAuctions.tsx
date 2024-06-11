'use client';

import { getAuctions } from '../../lib/data/auctions/getAuctions';
import { useAuthQuery } from '../useAuthQuery';

export function useGetAuctions() {
  return useAuthQuery(['auctions'], getAuctions);
}
