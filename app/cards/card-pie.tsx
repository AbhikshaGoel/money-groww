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
const data = [
  {
    i: 0,
    interest: 400,
    amount: 240,
  },
  {
    i: 1,
    interest: 300,
    amount: 139,
  },
  {
    i: 2,
    interest: 200,
    amount: 980,
  },
  {
    i: 3,
    interest: 278,
    amount: 390,
  },
  {
    i: 4,
    interest: 189,
    amount: 480,
  },
  {
    i: 5,
    interest: 239,
    amount: 380,
  },
  {
    i: 6,
    interest: 349,
    amount: 430,
  },
];
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
