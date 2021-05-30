import { MagicCardSet, SetDropDownOption } from "Interfaces/Interface";

const modifySetResponse = (cardSets: MagicCardSet[]): SetDropDownOption[] =>
  cardSets.map((cardSet) => ({
    value: cardSet.code,
    label: cardSet.name,
    releaseDate: cardSet.releaseDate
  }));

export default modifySetResponse;
