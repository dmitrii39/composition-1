import kotik from "./kotik.jpg";
import "./App.css";
import Card from "./components/Card";

const txt1 =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";
const txt2 =
  "With supporting text below as a natural lead-in to additional content";

function App() {
  return (
    <div className="App-header">
      <Card title={"Card title"} img={kotik}>
        <p className="card-text txt">{txt1}</p>
      </Card>
      <Card title={"Spacial title treatment"} img={null}>
        <p className="card-text txt">{txt2}</p>
      </Card>
    </div>
  );
}

export default App;
