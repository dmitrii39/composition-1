// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

const pic = 'https://srisovki.com/wp-content/uploads/2018/12/krasiv-i-legk-9.jpg';
function App() {

  return (
    <div className="App-header">
      <Card>
       <img src={pic} class="card-img-top" alt="..."></img> 
        <h5 class="card-title">Card title</h5>
        <p class="card-text txt">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
      </Card>
      <Card >
        <h5 class="card-title">Spacial title treatment</h5>
        <p class="card-text txt">With supporting text below as a natural lead-in to additional content</p>
      </Card>
      
    </div>
  );
}

export default App;
