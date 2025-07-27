import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wheel } from "react-custom-roulette";

import { useTempContext } from "@/hooks/use-temp-context";
import { Celebration } from "../ui/confetti/confetti";

const dataDefault = [{ option: "1" }, { option: "2" }, { option: "3" }];

export function RouletteWheel() {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [dataRoulet, setDataRoulet] =
    useState<Record<string, unknown>[]>(dataDefault);
  const { data, setWinnerData, winnerData, setData } = useTempContext();
  const [mustSpin, setMustSpin] = useState(false);
  const handleWinnerdata = (index: number) => {
    const winner = data.find((_, idx) => idx === index);
    if (winner) {
      setWinnerData((prev) => [...prev, winner]);
      setData((prev) => prev.filter((item) => item.id !== winner.id));
    }
  };
  useEffect(() => {
    if (data.length > 0) {
      setDataRoulet(
        data.map((item) => ({
          option: item.name,
        }))
      );
    } else {
      setDataRoulet(dataDefault);
    }
  }, [data]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsWinner(false);
    }
  };
  console.log(winnerData);
  return (
    <div className="flex flex-col gap-4">
      {isWinner && <Celebration />}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={dataRoulet}
        innerBorderColor="#ffff00"
        innerBorderWidth={7}
        innerRadius={10}
        outerBorderColor="#000000"
        outerBorderWidth={7}
        radiusLineWidth={5}
        radiusLineColor="#ffff00"
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          setMustSpin(false);
          handleWinnerdata(prizeNumber);
          setIsWinner(true);
          setTimeout(() => {
            setIsWinner(false);
          }, 5000);
        }}
      />
      <Button
        className="bg-primary w-1/2 mx-auto"
        variant={"destructive"}
        onClick={handleSpinClick}
        isLoading={mustSpin}
      >
        SPIN
      </Button>
    </div>
  );
}
