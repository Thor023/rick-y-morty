import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = () => {
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filtro</div>
      <div style={{cursor: "pointer"}} className='text-center text-decoration-underline text-primary mb-4 '>
        Limpiar Filtros
      </div>


      <div className="accordion" id="accordionExample">
        <Status/>
        <Species/>
        <Gender/>
      </div>


    </div>
  );
}

export default Filters
