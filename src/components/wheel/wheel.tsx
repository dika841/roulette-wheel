import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wheel } from "react-custom-roulette";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { option: "1", style: { backgroundColor: "green", textColor: "black" } },
  { option: "2", style: { backgroundColor: "red", textColor: "white" } },
  { option: "3", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "4", style: { backgroundColor: "yellow", textColor: "black" } },
];
export function RouletteWheel() {
  const [prizeNumber, setPrizeNumber] = useState(0);

  const [mustSpin, setMustSpin] = useState(false);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  return (
    <Card className="w-full max-w-md mx-auto border-none">
      <CardHeader>
        <CardTitle className="text-center">Roulette Wheel</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <Button onClick={handleSpinClick}>SPIN</Button>
      </CardFooter>
    </Card>
  );
}
