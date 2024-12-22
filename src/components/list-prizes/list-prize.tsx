import { Card, CardContent, CardHeader } from "../ui/card";

export const ListPrize = () => {
  return (
    <Card className="w-1/3 justify-start">
      <CardHeader>
        <h1 className="text-text font-heading">List Prize</h1>
      </CardHeader>
      <CardContent>
        <ul className="flex items-start justify-start list-disc list-inside">
          <li className="text-border">Mobil</li>
        </ul>
      </CardContent>
    </Card>
  );
};
