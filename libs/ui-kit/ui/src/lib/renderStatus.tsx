import { Badge } from './ui/badge';

export function renderStatus(status: string) {
  switch (status) {
    case 'active':
      return <Badge variant="success">Active</Badge>;
    case 'in_review':
      return <Badge variant="info">In Review</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending</Badge>;
    case 'delivered':
      return <Badge variant="elevated">Delivered</Badge>;
    default:
      return null;
  }
}
