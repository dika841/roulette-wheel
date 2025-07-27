import { createContext, useContext } from "react";
import { TempItem } from "./contexts/temp-data";

interface TempContextType {
  data: TempItem[];
  setData: React.Dispatch<React.SetStateAction<TempItem[]>>;
  removeItem: (id: string) => void;
  winnerData: TempItem[];
  setWinnerData: React.Dispatch<React.SetStateAction<TempItem[]>>;
}
export const TempContext = createContext<TempContextType | undefined>(
  undefined
);

export const useTempContext = () => {
  const ctx = useContext(TempContext);
  if (!ctx) throw new Error("useTempContext must be used within TempProvider");
  return ctx;
};
