import React from 'react';
import { Link } from '../../navigation';
import { FiEdit } from 'react-icons/fi';

interface ColumnEditProps {
  href?: string;
  onClick?: () => void;
}

const ColumnEdit = ({ href, onClick }: ColumnEditProps) => {
  const Wrapper = href ? Link : 'span';
  return (
    <Wrapper href={href || '#'} onClick={() => onClick?.()}>
      <FiEdit />
    </Wrapper>
  );
};

export default ColumnEdit;
