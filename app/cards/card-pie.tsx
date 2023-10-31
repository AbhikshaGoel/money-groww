import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LineChart, PieChart } from "lucide-react";
import { themes } from "@/registry/themes";

import React from "react";
import { ResponsiveContainer, Tooltip, Line, Pie } from "recharts";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";

interface CardPieProps {
  dataPie?: Object;
}
const CardPie = () => {
  const { theme: mode } = useTheme();
  const [config] = useConfig();

  const theme = themes.find((theme) => theme.name === config.theme);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription>
          Your excercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data}
                dataKey="average"
                nameKey="today"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPie;
