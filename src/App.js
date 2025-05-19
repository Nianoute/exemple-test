import "./App.css";
import { Container } from "./components/atoms";
import { NightModeProvider } from "./NigthModeProvider";

function App() {
  return (
    <NightModeProvider value={false}>
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
    </NightModeProvider>
  );
}

export default App;
