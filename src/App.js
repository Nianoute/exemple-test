import "./App.css";
import { Container } from "./components/atoms";

function App() {
  return (
    <div className="App">
      <h1>Hello cannard</h1>
      <div>Ouais</div>
      <Container.Base message="totoToto" bgColor="purple">
        ifheouibfouizeuoi
      </Container.Base>
      <Container.Padding blocked={false} padding="20px" bgColor="blue">
        uzdgou ugadzfiu iufgazh
      </Container.Padding>
    </div>
  );
}

export default App;
