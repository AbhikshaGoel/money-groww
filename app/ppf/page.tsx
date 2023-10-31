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
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>PPF Calculator</CardTitle>
          <CardDescription>Choose Investment Yearly or Monthly</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Input id="name" placeholder="Yearly Investment" />
            <Label htmlFor="airplane-mode">Yearly</Label>
            <Switch id="investment-mode" />
            <Label htmlFor="airplane-mode">Monthly</Label>
          </div>
          <Slider
            defaultValue={[10000]}
            max={150000}
            step={1000}
            className="w-[60%]"
          />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Label className="w-[60%]" htmlFor="number">
              Time Period (In Years)
            </Label>
            <Input id="time-period" placeholder="15" />
          </div>
          <Slider defaultValue={[10]} max={100} step={1} className="w-[60%]" />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Label className="w-[60%]" htmlFor="number">
              Rate of Interest p.a.
            </Label>
            <Input id="time-period" placeholder="15" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PPFCalculator;
