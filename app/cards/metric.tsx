import { useTheme } from "next-themes";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useConfig } from "@/hooks/use-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { themes } from "@/registry/themes";

type DataPoint = {
  i: number;
  interest: number;
  amount: number;
};

type DataArray = DataPoint[];

export function CardsMetric({ data }: { data: DataArray }) {
  console.log("Data array", data);
  const { theme: mode } = useTheme();
  const [config] = useConfig();

  const theme = themes.find((theme) => theme.name === config.theme);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Returns</CardTitle>
        <CardDescription>
          Your Total PPF return are
          <span className="text-emerald-400"> &#8377;{"190233"}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="i"
                type="number"
                domain={["dataMin", "dataMax"]}
                label={{ value: "Years", position: "insideBottomRight" }}
              />
              <YAxis
                type="number"
                domain={["dataMin", "dataMax"]}
                label={{
                  value: "Value",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">
                              Interest Earned
                            </span>
                            <span className="font-normal text-emerald-500">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">
                              Total Amount
                            </span>
                            <span className="font-bold text-emerald-500">
                              {payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="interest"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    opacity: 0.25,
                    "--theme-primary": `hsl(${
                      theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                    })`,
                  } as React.CSSProperties
                }
              />
              <Line
                type="monotone"
                dataKey="amount"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "var(--theme-primary)" },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    "--theme-primary": `hsl(${
                      theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                    })`,
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
