import { useEffect, useState } from "react";
import { ICar } from "../../interface/ICar";
import { useParams, Link } from "react-router-dom";
import data from "../../data.json"
import Loader from "../../components/loader/Loader";

const DetailPage = () => {
  // wenn null, dann Loader, ansonsten Detailkarte anzeigen
  const [cardCar, setCardCar] = useState<null | ICar>(null);
  const { carId } = useParams();

  // find method für ein einziges/erstes passendes element (wenn nichts gefunden, gibt es undefined zurück)
  useEffect(() => {
    if (carId && data) {
      const findCarById = data.find(
        (cardCar) => Number(cardCar.id) === Number(carId)
      );
      setCardCar(findCarById || null);
    }
  }, [carId]);

  if (!cardCar) return <Loader />;
  return (
    <>
      <section className="details">
        <h2>{cardCar.carModel}</h2>
        <h3>{cardCar.CarMake}</h3>
        <h4>{cardCar.CarYear}</h4>
        <Link to="/" className="link-home">⬅ Back to SuperCarList</Link>
      </section>
    </>
  );
};

export default DetailPage;