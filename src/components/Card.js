// import logo from './logo.svg';
import '../App.css';

function Card(props) {
  return (
      <div class="card card_img">
          
  <div class="card-body">
      {props.children}
    <a href="https://www.ejin.ru/wp-content/uploads/2017/09/4-597.jpg" class="btn btn-primary">Go somewhere</a>
  </div>
      </div>
   
  );
}

export default Card;
