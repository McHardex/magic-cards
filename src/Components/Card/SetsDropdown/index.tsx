import Select, { Props } from "react-select";
import styles from "./SetsDropdown.module.css";

interface DropDownProps extends Props {
  handleGatherCards: () => void;
}

const SetsDropDown: React.FC<DropDownProps> = (props: Props) => {
  const { selectedOption, onChange, options, handleGatherCards } = props;
  return (
    <div className={styles.dropdownWrapper}>
      <label>Select a Set:</label>
      <div className={styles.dropdownContainer}>
        <div className={styles.selectWrapper}>
          <Select
            value={selectedOption}
            onChange={onChange}
            options={options}
          />
        </div>
        <button onClick={handleGatherCards} type="button">
          Gather
        </button>
      </div>
    </div>
  );
};

export default SetsDropDown;
