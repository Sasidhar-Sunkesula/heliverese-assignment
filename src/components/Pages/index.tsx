import "./index.css";

interface Value {
  id: number;
  heading: string;
  text: string;
  image: string;
}

interface Props {
  id: number;
  value: Value;
}
function Pages({ value }: Props) {
  const { heading, text, image } = value;
  return (
    <div className="pages2">
      <h1 className="heading">{heading}</h1>
      <p className="pagespara">{text}</p>
      <img src={image} alt="image" />
    </div>
  );
}

export default Pages;
