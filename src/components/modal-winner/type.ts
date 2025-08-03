export type TModalWinner = {
  isOpen: boolean;
  onClose: () => void;
  setShowModal: (value: boolean) => void;
  winnerName: string;
};
