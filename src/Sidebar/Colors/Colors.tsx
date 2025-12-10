import Input from "@/e-com/components/Input";
import "./Colors.css";

type Props = {
  handleChange: (e: any) => void;
};

const Colors = ({ handleChange }: Props) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Colors</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark all"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          color="black"
          title="Black"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          color="blue"
          title="Blue"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="red"
          color="red"
          title="Red"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="green"
          color="green"
          title="Green"
          name="test3"
        />
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test3"
          />
          <span
            className="checkmark"
            style={{
              backgroundColor: "oklch(86.9% 0.005 56.366)",
              border: "1px solid black",
            }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Colors;
