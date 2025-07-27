import { RouletteWheel } from "./components/wheel/wheel";
import { SortableList } from "./components/ui/sortable-list/sortable-list";
import { useTempContext } from "./hooks/use-temp-context";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { AddItemForm } from "./components/ui/add-item-input";

function SortableSection() {
  const { data, setData } = useTempContext();

  return (
    <div className="flex flex-col gap-4">
      <AddItemForm />
      <SortableList
        items={data}
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
  const { winnerData } = useTempContext();

  return (
    <main className="min-h-1/2 bg-gray-50 py-10 px-6 rounded-xl w-full">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        🎉 Wheel of Fortune
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="min-h-[500px] shadow-md">
          <CardHeader>
            <h1 className="text-xl font-semibold text-gray-800">
              🎯 List Peserta
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
            <h1 className="text-xl font-semibold text-gray-800">
              🏆 List Pemenang
            </h1>
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
        </Card>
      </div>
    </main>
  );
}

export default App;
