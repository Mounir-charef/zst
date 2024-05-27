import { Badge, Card, CardContent, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
const RELATED_CATEGORIES = [
  't-shirts',
  'black-t-shirst',
  'white-t-shirts',
  'red-t-shirts',
  'blue-t-shirts',
  'green-t-shirts',
  'yellow-t-shirts',
  'pink-t-shirts',
];
const RelatedCategories = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Categories</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {RELATED_CATEGORIES.map((category) => (
          <Badge variant="outline">{category}</Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default memo(RelatedCategories);
