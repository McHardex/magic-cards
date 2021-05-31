import { MagicCard } from "Interfaces/Interface";
import styles from "./Card.module.css";

interface Props {
  card: MagicCard;
  releaseDate?: string;
}

const Card = (props: Props) => {
  const cardDefault =
    "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129529&type=card";

  const { card, releaseDate } = props;

  return (
    <div className={styles.cardWrapper}>
      <p>
        {card.setName} - {card.name}
      </p>
      <img src={card.imageUrl || cardDefault} alt={card.name} />

      {releaseDate && (
        <p>
          Release Date: <span>{releaseDate}</span>
        </p>
      )}
      <p>
        Rarity: <span>{card.rarity}</span>
      </p>
      <p>
        Type: <span>{card.type}</span>
      </p>
    </div>
  );
};

export default Card;
