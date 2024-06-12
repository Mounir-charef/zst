import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import { categories } from '../_data/categories';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  return (
    <Card className="border-none">
      <CardHeader className="flex-row flex-wrap justify-between gap-2">
        <CardTitle>Shop by category</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </CardContent>
    </Card>
  );
};

export default memo(CategoryList);
