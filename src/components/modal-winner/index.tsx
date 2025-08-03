import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { TModalWinner } from "./type";
import { Button } from "../ui/button";

export const ModalWinner: FC<TModalWinner> = ({
  isOpen,
  onClose,
  setShowModal,
  winnerName,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setShowModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> 🎉 Congratulations</DialogTitle>
          <DialogDescription>
            <span className="text-2xl font-bold">{winnerName}</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
