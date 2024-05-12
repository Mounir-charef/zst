import React from 'react';
import { FileResponse } from '../../../../../../types/file';
import Image from 'next/image';
import ColumnText from '../../../../../../components/common/columns/ColumnText';

interface ProductColumnInfoProps {
  image: FileResponse;
  name: string;
}

const ProductColumnInfo = ({ name, image }: ProductColumnInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={image.url}
        width={38}
        height={38}
        alt=""
        className="border rounded"
      />
      <ColumnText text={name} />
    </div>
  );
};

export default ProductColumnInfo;
