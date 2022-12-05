import React from "react";
import imagen1 from '../assets/img/imagen1.jpg';
const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span>
            <ul type="square">
              <h1 className="text-center mt-3 mb-4" >Rubrica Web</h1>
              <center>
              
              <div>
    <img src={imagen1}/>
   </div>

             
              </center>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
