import { RouletteWheel } from "./components/wheel/wheel";
import { SortableList } from "./components/ui/sortable-list/sortable-list";
import { useTempContext } from "./hooks/use-temp-context";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { AddItemForm } from "./components/ui/add-item-input";
import { ModalWinner } from "./components/modal-winner";
import { Button } from "./components/ui/button";

function SortableSection() {
  const { data, setData } = useTempContext();
  const startDataIndex = data.filter((_, idx) => idx > 0);

  return (
    <div className="flex flex-col gap-4">
      <AddItemForm />
      <SortableList
        items={startDataIndex}
        onChange={(newItems) => setData(newItems)}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            <span className="text-base text-gray-800">{item.name}</span>
          </SortableList.Item>
        )}
      />
    </div>
  );
}

function App() {
  const {
    winnerData,
    winnerName,
    showModalWinner,
    setModalWinner,
    setWinnerName,
    removeAll,
  } = useTempContext();

  return (
    <main className="min-h-1/2 bg-gray-50 py-10 px-6 rounded-xl w-full">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        🎉 Wheel of Fortune
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="min-h-[500px] shadow-md">
          <CardHeader>
            <h1 className="text-xl font-semibold text-gray-800">
              🎯 List Target
            </h1>
          </CardHeader>
          <CardContent>
            <SortableSection />
          </CardContent>
        </Card>

        <div className="flex justify-center items-center">
          <RouletteWheel />
        </div>

        <Card className="min-h-[500px] shadow-md">
          <CardHeader>
            <h1 className="text-xl font-semibold text-gray-800">🏆 Winner</h1>
          </CardHeader>
          <CardContent>
            {winnerData.length > 0 ? (
              <ol className="list-decimal list-inside">
                {winnerData.map((item, index) => (
                  <li key={index} className="text-gray-800">
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-800 text-center">Belum ada pemenang</p>
            )}
          </CardContent>
          <CardFooter>
            {winnerData.length > 0 && (
              <Button onClick={() => removeAll()}>Hapus Semua</Button>
            )}
          </CardFooter>
        </Card>
      </div>
      <ModalWinner
        isOpen={showModalWinner}
        onClose={() => {
          setModalWinner(false);
          setWinnerName("");
        }}
        setShowModal={setModalWinner}
        winnerName={winnerName}
      />
    </main>
  );
}

export default App;
