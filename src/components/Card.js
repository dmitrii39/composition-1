
import '../App.css';

function Card(props) {
  return (
      <div className="card card_img">
          
  <div className="card-body">
       
       {props.children[0]}
      <h5 className="card-title">{props.title}</h5>
      {props.children.length === 2 ?  props.children[1] : props.children}
    
    <a href="https://www.ejin.ru/wp-content/uploads/2017/09/4-597.jpg" className="btn btn-primary">Go somewhere</a>
  </div>
  {console.log(props.children)}
      </div>
    
  );
}

export default Card;
