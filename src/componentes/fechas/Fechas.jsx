import './Fechas.css';
import Card from 'react-bootstrap/Card';
import DosDeDiciembre from './DosDeDiciembre.jpg'

function Fechas() {

    return (
            <section className="seccion">
          <Card>
            <Card.Img className="imagen" variant="top" src={DosDeDiciembre} />
            <Card.Body>
              <Card.Title className="titulo">2 de diciembre 2023 19 hs.- Teatro Flores</Card.Title>
              <Card.Text className="texto">
                La Aplanadora se vuelve a presentar en Buenos Aires. Teatro Flores. Avenida del Rock 777. Barrio de RockLandia. Cap.Fed.
              </Card.Text>
              <Card.Link href="https://www.passline.com/eventos?q=DIVIDIDOS&region=&mes=&pais=argentina&page=1" target="_blank" id="comprar">Comprar Entrada</Card.Link>
            </Card.Body>
          </Card>
        </section>
   
  );
}


export default Fechas;