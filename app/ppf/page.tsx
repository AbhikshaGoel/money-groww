"use client";
import React, { useState } from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Pie,
  PieChart,
  Sector,
} from "recharts";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const PPFCalculator = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [amount, setAmount] = useState(15000);
  const [timePeriod, setTimePeriod] = useState(15);

  const toggleFrequency = () => {
    setIsYearly(!isYearly);
  };
  const handleAmountSlider = (amount: React.SetStateAction<number>[]) => {
    setAmount(amount[0]);
  };

  const handleInterestSlider = (interest: React.SetStateAction<number>[]) => {
    setTimePeriod(interest[0]);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>PPF Calculator</CardTitle>
          <CardDescription>Choose Investment Yearly or Monthly</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Input
              id="investment-amount"
              type="number"
              placeholder={
                isYearly ? "Yearly Investment" : "Monthly Investment"
              }
              value={amount}
            />
            <Label
              className={isYearly ? `text-green-400` : ``}
              htmlFor="investment-mode"
            >
              Yearly
            </Label>
            <Switch id="investment-mode" onCheckedChange={toggleFrequency} />
            <Label
              className={isYearly ? `` : `text-green-400`}
              htmlFor="investment-mode"
            >
              Monthly
            </Label>
          </div>
          <Slider
            onValueChange={handleAmountSlider}
            defaultValue={[20000]}
            max={150000}
            step={1000}
            className="w-[60%]"
          />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Label className="w-[60%]" htmlFor="number">
              Time Period (In Years)
            </Label>
            <Input id="time-period" placeholder="15" value={timePeriod} />
          </div>
          <Slider
            onValueChange={handleInterestSlider}
            defaultValue={[15]}
            max={100}
            step={1}
            className="w-[60%]"
          />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Label className="w-[60%]" htmlFor="number">
              Rate of Interest
            </Label>
            <Input id="time-period" placeholder="15%" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant={"emerald"} className="w-full">
            Calculate Returns
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PPFCalculator;
