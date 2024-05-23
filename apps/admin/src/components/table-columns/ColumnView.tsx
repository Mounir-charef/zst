import React from 'react';
import { Link } from '../../navigation';
import { FiEye } from 'react-icons/fi';

interface ColumnViewProps {
  href?: string;
  onClick?: () => void;
}

const ColumnView = ({ href, onClick }: ColumnViewProps) => {
  const Wrapper = href ? Link : 'span';
  return (
    <Wrapper href={href || '#'} onClick={() => onClick?.()}>
      <FiEye />
    </Wrapper>
  );
};

export default ColumnView;
