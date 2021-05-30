import { ReactComponent as ThreeDots } from "assets/images/three-dots.svg";
import styles from "./Loader.module.css";

interface Props {
  message: string;
}

const Loader: React.FC<Props> = ({ message }: Props) => {
  return (
    <div className={styles.loader}>
      <ThreeDots stroke="#000" />
      <span>{message}</span>
    </div>
  );
};

export default Loader;
