import React from 'react';
import { ID } from '../../../types/common';

const ColumnID = ({ id }: { id: ID }) => {
  return <span>#ID: {id}</span>;
};

export default ColumnID;
