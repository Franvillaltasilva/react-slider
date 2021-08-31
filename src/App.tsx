import "./styles.css";
import Slider from "./components/Slider";

const min = 1;
const max = 100;
const multiple = true;

export default function App() {
  return (
    <div className="App">
      <Slider min={min} max={max} multiple={multiple} />
    </div>
  );
}
