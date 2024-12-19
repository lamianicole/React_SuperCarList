import { Link } from "react-router-dom";
import dataCar from "../../data.json"
import { ICar } from "../../interface/ICar";

const CarList = () => {
  return (
    <section className="grid">
      {dataCar.map((singleCar: ICar) => (
        <div className="card App">
          <h3>{singleCar.carModel}</h3>
          <Link to={`car/${singleCar.id}`}>Read more</Link>
        </div>
      ))}
    </section>
  );
};

export default CarList;