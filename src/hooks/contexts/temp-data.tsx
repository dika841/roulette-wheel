import { useState } from "react";
import { TempContext } from "../use-temp-context";

export interface TempItem {
  id: string;
  name: string;
}
const TempProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<TempItem[]>([{ id: "0", name: "SPIN" }]);
  const [winnerData, setWinnerData] = useState<TempItem[]>([]);
  const [winnerName, setWinnerName] = useState("");
  const [showModalWinner, setModalWinner] = useState(false);
  const removeItem = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };
  const removeAll = () => {
    setWinnerData([]);
  };
  return (
    <TempContext.Provider
      value={{
        data,
        setData,
        removeItem,
        winnerData,
        setWinnerData,
        winnerName,
        setWinnerName,
        setModalWinner,
        showModalWinner,
        removeAll,
      }}
    >
      {children}
    </TempContext.Provider>
  );
};

export default TempProvider;
