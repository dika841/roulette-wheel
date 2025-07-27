import { useState } from "react";
import { TempContext } from "../use-temp-context";

export interface TempItem {
  id: string;
  name: string;
}
const TempProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<TempItem[]>([]);
  const [winnerData, setWinnerData] = useState<TempItem[]>([]);
  const removeItem = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TempContext.Provider
      value={{ data, setData, removeItem, winnerData, setWinnerData }}
    >
      {children}
    </TempContext.Provider>
  );
};

export default TempProvider;
