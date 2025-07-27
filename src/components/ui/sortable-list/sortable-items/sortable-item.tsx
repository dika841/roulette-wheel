import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { useTempContext } from "@/hooks/use-temp-context";

export function SortableItem({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const { removeItem } = useTempContext();

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between p-4 border rounded-md bg-white shadow"
    >
      <div ref={setActivatorNodeRef} {...attributes} {...listeners}>
        <span className="cursor-move">≡</span>
      </div>
      <div className="flex-1 px-4">{children}</div>
      <Button variant="secondary" onClick={() => removeItem(id)}>
        Hapus
      </Button>
    </li>
  );
}

export const DragHandle = () => null; // tidak digunakan karena handle ada di dalam
