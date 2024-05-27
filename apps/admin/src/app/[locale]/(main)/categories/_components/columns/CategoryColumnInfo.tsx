import Image from 'next/image';
import React from 'react';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import { FileResponse } from '../../../../../../types/file';

interface CategoryColumnInfoProps {
  image: FileResponse;
  name: string;
}

const CategoryColumnInfo = ({ image, name }: CategoryColumnInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={image.url}
        width={38}
        height={38}
        alt=""
        className="rounded border"
      />
      <ColumnText text={name} />
    </div>
  );
};

export default CategoryColumnInfo;
