import Input from "@/components/Input";
import "./Price.css";

type Props = {
  handleChange: (e: any) => void;
};

const Price = ({ handleChange }: Props) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$51 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$101 - $150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
