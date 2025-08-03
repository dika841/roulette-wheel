import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wheel } from "react-custom-roulette";
import { useTempContext } from "@/hooks/use-temp-context";
import { Celebration } from "../ui/confetti/confetti";

export function RouletteWheel() {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [dataRoulet, setDataRoulet] = useState<Record<string, unknown>[]>([]);

  const {
    data,
    setWinnerData,
    setData,
    setWinnerName,
    setModalWinner,
    showModalWinner,
  } = useTempContext();

  const [mustSpin, setMustSpin] = useState(false);
  const handleWinnerdata = (index: number) => {
    if (index === 0) return;

    const winner = data[index];
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
      setDataRoulet([{ option: "SPIN" }]);
    }
  }, [data]);

  const handleSpinClick = () => {
    if (!mustSpin && data.length > 1) {
      const newPrizeNumber = Math.floor(Math.random() * (data.length - 1)) + 1;
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {showModalWinner && <Celebration />}
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={dataRoulet.length > 0 ? dataRoulet : [{ option: "SPIN" }]}
          startingOptionIndex={0}
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
            if (prizeNumber === 0) {
              return;
            }

            handleWinnerdata(prizeNumber);

            setModalWinner(true);
            setWinnerName(data[prizeNumber].name);
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
    </>
  );
}
