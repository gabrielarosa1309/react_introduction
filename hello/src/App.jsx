import './App.css';
import CardEvent from './Components/CardEvent/CardEvent';
import Container from './Components/Container/Container';
import Title from './Components/Title/Title'

function App() {
  return (
    <div className="App">
      <Title text="Eduardo Costa"/>
      <br /><br />
      <Container>
      <CardEvent titulo="Debora" descricao="Obrigada por me deixar dormir no seu quarto pq o meu ta com cheiro de tinta" conectar="Te amo"/>
      <CardEvent titulo="Marido" descricao="Amor vc é muito lindo e cheiroso e fofinho e eu te amo demais estou com sdds <3" conectar="Te amo"/>
      </Container>
    </div>
  );
}

export default App;
