import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Frase from './components/Frase';

function App() {

   const [ frase, setFrase ] = useState({});

   useEffect(
      () => {
         consultarAPI();
      }, []
   )


   const consultarAPI = async () => {
      const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

      let resultado = await axios(url);

      setFrase(resultado.data[0]);
   }

   return (
      <div className="contenedor">
         <Frase 
            frase={frase}
         />
         <button
            onClick={consultarAPI}
         >
            Generar Nueva
         </button>
      </div>
   );
}

export default App;
