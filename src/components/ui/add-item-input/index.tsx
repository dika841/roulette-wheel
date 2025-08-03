import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTempContext } from "@/hooks/use-temp-context";
import { v4 as uuidv4 } from "uuid";

export function AddItemForm() {
  const { setData } = useTempContext();
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    setData((prev) => [...prev, { id: uuidv4(), name }]);
    setName("");
  };

  return (
    <div className="flex justify-center md:justify-start gap-2 mb-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className="flex flex-col md:flex-row  gap-2 mb-4"
      >
        <Input
          placeholder="Input data"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Tambah</Button>
      </form>
    </div>
  );
}
