import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Celebration = () => {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      tweenDuration={1000}
      gravity={0.1}
      numberOfPieces={200}
    />
  );
};
