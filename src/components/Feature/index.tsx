import "./index.css";

interface Value {
  id: number;
  image_url: string;
  heading: string;
  para: string;
}
interface Props {
  id: number;
  value: Value;
}
function Feature({ value }: Props) {
  const { image_url, heading, para } = value;
  return (
    <div className="featurebackground">
      <div className="feature">
        <img src={image_url} alt="image" className="image" />
        <h1 className="headingcenter">{heading}</h1>
        <p className="paracenter">{para}</p>
      </div>
    </div>
  );
}

export default Feature;
