import { useState } from "react";
import "./App.css";

import { RouletteWheel } from "./components/wheel/wheel";
import { SortableList } from "./components/ui/sortable-list/sortable-list";
import { ListPrize } from "./components/list-prizes/list-prize";
export function createRange<T>(
  length: number,
  initializer: (index: number) => T
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}
function getMockItems() {
  return createRange(50, (index) => ({ id: index + 1 }));
}
function App() {
  const [items, setItems] = useState(getMockItems);
  return (
    <main>
      <section className="flex items-center">
        <RouletteWheel />
        <ListPrize />
      </section>
      <div style={{ maxWidth: 400, margin: "30px auto" }}>
        <SortableList
          items={items}
          onChange={setItems}
          renderItem={(item) => (
            <SortableList.Item id={item.id}>
              {item.id}
              <SortableList.DragHandle />
            </SortableList.Item>
          )}
        />
      </div>
    </main>
  );
}

export default App;
