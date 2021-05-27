import "../App.css";

function Card(props) {
  return (
    <div className="card card_img">
      <div className="card-body">
        {props.img && (
          <img src={props.img} className="card-img-top" alt="foto" />
        )}
        <h5 className="card-title">{props.title}</h5>
        {props.children}

        <a
          href="https://www.ejin.ru/wp-content/uploads/2017/09/4-597.jpg"
          className="btn btn-primary"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
