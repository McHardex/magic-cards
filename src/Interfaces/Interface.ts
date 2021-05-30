export interface CardSetParams {
  setCode?: string;
  page?: number;
}

export interface SetDropDownOption {
  value: string;
  label: string;
  releaseDate?: string;
}

enum BorderType {
  white = "white",
  black = "black",
  silver = "silver",
}

enum SetType {
  core = "core",
  expansion = "expansion",
  reprint = "reprint",
  box = "box",
  un = "un",
  fromTheVault = "from the vault",
  premiumDeck = "premium deck",
  dueLdeck = "duel deck",
  starter = "starter",
  commander = "commander",
  planechase = "planechase",
  archenemy = "archenemy",
  promo = "promo",
  vanguard = "vanguard",
  master = "master",
}

export interface MagicCardSet {
  name: string;
  block: string;
  code: string;
  gathererCode?: string;
  oldCode?: string;
  magicCardsInfoCode?: string;
  releaseDate?: string;
  border: BorderType;
  onlineOnly?: boolean;
  booster: string[];
  expansion: SetType;
}

export interface MagicCard {
  name: string;
  type: string;
  rarity: string;
  set: string;
  setName: string;
  text?: string;
  imageUrl?: string;
  id: string;
  manaCost: string;
  cmc: number;
  colors?: Array<string>;
  colorIdentity: Array<string>;
  types: Array<string>;
  subtypes?: Array<string>;
  artist: string;
  number: string;
  power?: string;
  toughness?: string;
  layout?: string;
  multiverseid?: string;
  variations?: Array<string>;
  foreignNames?: Array<{
    name: string;
    text?: string;
    type: string;
    flavor: string | null;
    imageUrl: string;
    language: string;
    multiverseid: number;
  }>;
  printings?: Array<string>;
  originalText?: string;
  originalType?: string;
  legalities?: Array<{
    format: string;
    legality: string;
  }>;
}
