import React from 'react';
import { formatearFecha } from '../components/helpers';

const Date = ({ fecha }) => {
  return (
    <div>
      <p className="fecha-gasto">
    <span>{formatearFecha(fecha)}</span>
      </p>
    </div>
  );
};

export default Date;


