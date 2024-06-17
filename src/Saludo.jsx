import './App.css';

function Holi(props) {
  return (
    <div id="contenedor">
      {/* encabezado */}
      <div className="texto">
        <h1>{props.lugar}</h1>
      </div>
      {/* encabezado */}
      <div id="parrafo">
        <center>
          <div className='texto2'></div>
          <h3>Contactanos</h3>
           <img src='100.gif'/>
          <h1>SOLO EN {props.ciudad}</h1>
          
        </center>
        
       
        </div>
        <div id='caja2'> 
        <ul>
            <li>Telegram: {props.numero}</li>
            <li>Whattsapp: {props.numero}</li>
            <li>Facebook: {props.pagina}</li>
            <li>Instagram: {props.pagina}</li>
            <li>Tiktok: {props.pagina}</li>
        </ul>
        </div>
        </div>
  );
}

export default Holi;
