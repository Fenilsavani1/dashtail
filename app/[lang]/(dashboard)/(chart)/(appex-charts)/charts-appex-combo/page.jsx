
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MultipleYAxis from "./multiple-yaxis";
import LineColumnArea from "./line-column-area";


const ComboChartPage = () => {
  return (
    <div className=" grid xl:grid-cols-2  grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Multiple Y-Axis Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <MultipleYAxis />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Line Column Area</CardTitle>
        </CardHeader>
        <CardContent>
          <LineColumnArea />
        </CardContent>
      </Card>
    </div>
  );
};

export default ComboChartPage;
