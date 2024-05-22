import "./index.css";

interface Value {
  id: number;
  image_url: string;
  stars: string;
  score: string;
}
interface Props {
  id: number;
  value: Value;
}

function Starrated({ value }: Props) {
  const { image_url, stars, score } = value;
  return (
    <div className="starrow">
      <img src={image_url} alt="image" className="roundimage" />
      <div>
        <img src={stars} alt="starts" className="starimage" />
        <p className="score">{score}</p>
      </div>
    </div>
  );
}

export default Starrated;
