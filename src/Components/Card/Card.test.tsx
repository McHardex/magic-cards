import { render, screen } from "@testing-library/react";
import Card from "./index";

const defaultProps = {
  card: {
    name: "Ancestor's Chosen",
    manaCost: "{5}{W}{W}",
    cmc: 7.0,
    colorIdentity: ["W"],
    type: "Creature — Human Cleric",
    types: ["Creature"],
    rarity: "Uncommon",
    set: "10E",
    setName: "Tenth Edition",
    artist: "Pete Venters",
    number: "1",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
    id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c",
  },
  releaseDate: "",
};

describe("Card Component", () => {
  test("renders required card texts", () => {
    render(<Card {...defaultProps} />);
    const artistElement = screen.getByText(/Tenth Edition/i);
    const rarityElement = screen.getByText(/Uncommon/i);
    const typeElement = screen.getByText(/Creature — Human Cleric/i);
    const releaseDateElement = screen.queryByText(/27-05-21/i);
    
    expect(artistElement).toBeInTheDocument();
    expect(rarityElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(releaseDateElement).not.toBeInTheDocument();
  });

  test("renders release date when present", () => {
    render(<Card {...defaultProps} releaseDate="27-05-21" />);
    const releaseDateElement = screen.getByText(/27-05-21/i);
    expect(releaseDateElement).toBeInTheDocument();
  });

  test("renders default image src", async () => {
    render(
      <Card
        card={{ ...defaultProps.card, imageUrl: "" }}
        releaseDate="27-05-21"
      />
    );
    const image = screen.getByRole("img");

    expect(image).toHaveAttribute(
      "src",
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129529&type=card"
    );
  });
});
