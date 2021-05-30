/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";

// Components
import Card from "Components/Card/index";
import SetsDropDown from "Components/Card/SetsDropdown";
import Pagination from "@material-ui/lab/Pagination";

// Utils
import modifySetResponse from "utils/modifySetResponse";

// Interfaces
import { SetDropDownOption, MagicCard } from "Interfaces/Interface";
import { OptionTypeBase } from "react-select";

// Api
import ApiService from "services/api";

import "./App.css";
import Loader from "Components/Loader";

const App = () => {
  const [selectedOption, setSelectedOption] = useState<OptionTypeBase>({
    value: "",
    label: "",
  });

  const [magicSets, setMagicSets] = useState<SetDropDownOption[]>([]);

  const [loadingMagicCards, setLoadingMagicCards] = useState<boolean>(false);

  const [magicCards, setMagicCard] = useState<MagicCard[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalCount, setTototalCount] = useState(0);

  const [releaseDate, setReleaseDate] = useState(selectedOption.releaseDate);

  const getCardsBySetCode = async () => {
    setLoadingMagicCards(true);
    try {
      const res = await ApiService.getCardsBySetCode({
        setCode: selectedOption.value,
        page: currentPage,
      });

      setMagicCard(res.data.cards);
      setTototalCount(res.headers["total-count"]);
      setLoadingMagicCards(false);
    } catch (error) {
      console.log("Error occured", error);
      setLoadingMagicCards(false);
    }
  };

  useEffect(() => {
    const getAllSets = async () => {
      try {
        const res = await ApiService.getAllSets();
        const newSetResponse: SetDropDownOption[] = modifySetResponse(
          res.data.sets
        );
        setMagicSets(newSetResponse);
      } catch (error) {
        console.log("Error occurred", error);
      }
    };

    const getDefaultCardsBySetCode = async () => {
      setLoadingMagicCards(true);
      try {
        const res = await ApiService.getCardsBySetCode({
          setCode: "",
          page: 1,
        });

        setMagicCard(res.data.cards);
        setTototalCount(res.headers["total-count"]);
        setLoadingMagicCards(false);
      } catch (error) {
        console.log("Error occured", error);
        setLoadingMagicCards(false);
      }
    };

    getAllSets();
    getDefaultCardsBySetCode();
  }, []);

  useEffect(() => {
    const getPaginatedCardsBySetCode = async () => {
      setLoadingMagicCards(true);
      try {
        const res = await ApiService.getCardsBySetCode({
          setCode: selectedOption.value,
          page: currentPage,
        });

        setMagicCard(res.data.cards);
        setLoadingMagicCards(false);
      } catch (error) {
        console.log("Error occured", error);
        setLoadingMagicCards(false);
      }
    };
    getPaginatedCardsBySetCode();
  }, [currentPage]);

  const handleSetDropDownChange = (selectedOption: any): void => {
    setSelectedOption(selectedOption);
  };

  const handleGatherCards = (): void => {
    setCurrentPage(1);
    getCardsBySetCode();
    setReleaseDate(selectedOption.releaseDate);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="app-content">
        <SetsDropDown
          selectedOption={selectedOption}
          options={magicSets}
          onChange={handleSetDropDownChange}
          handleGatherCards={handleGatherCards}
        />

        {loadingMagicCards ? (
          <Loader message="Loading magic cards..." />
        ) : (
          <>
            <div>
              {!magicCards.length ? (
                <p>Opps!!! No magic cards found</p>
              ) : (
                <div className="cards-container">
                  {magicCards.map((card, i) => (
                    <Card
                      key={card.number}
                      cardIndex={i}
                      card={card}
                      releaseDate={releaseDate}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="pagination">
              <Pagination
                page={currentPage}
                onChange={handlePageChange}
                count={Math.ceil(Number(totalCount) / 12)}
                color="primary"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
