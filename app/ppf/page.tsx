"use client";
import React, { useState } from "react";

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
import { Switch } from "@/components/ui/switch";
import { CardsMetric } from "../cards/metric";
const data1 = [
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
const PPFCalculator = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [amount, setAmount] = useState(15000);
  const [timePeriod, setTimePeriod] = useState(15);
  const [finalAmount, setFinalAmount] = useState(406823);
  const [interestRate, setInterestRate] = useState("7.1");
  const [investedAmount, setInvestedAmount] = useState(225000);
  const [interestAmount, setInterestAmount] = useState(181823);
  var d: { i: number; interest: number; amount: number }[] = [];
  //var investedAmount = 0;

  const [data, setData] = useState(d); // Use state to store the data

  const calculatePpfReturns = () => {
    const principal = amount;
    const maxAllowedAmount = 150000;
    setInvestedAmount(principal * timePeriod);

    // Check if the principal amount is greater than the maximum allowed amount
    if (principal > maxAllowedAmount) {
      alert("Cannot invest more than 150,000 in a year.");
      return;
    }

    // Validate the interest rate input
    if (interestRate === "") {
      alert("Please enter a valid interest rate.");
      return;
    }

    // Calculate PPF returns based on the provided inputs
    const interestRateDecimal = +interestRate / 100;
    const timePeriodInYears = timePeriod;
    let openingBalance = 0;
    var interest;
    var newData = []; // Create a new array to store the fresh data

    for (let i = 1; i <= timePeriodInYears; i++) {
      openingBalance += principal;
      interest = Math.round(openingBalance * interestRateDecimal);
      openingBalance += interest;
      newData.push({ i: i, interest: interest, amount: openingBalance }); // Push data to the new array
    }

    setData(newData); // Update the data state with the fresh data
    setFinalAmount(openingBalance);
  };

  const toggleFrequency = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <div className="p-2 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>PPF Calculator</CardTitle>
            <CardDescription>
              Choose Investment Yearly or Monthly
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="text-emerald-500">&#8377;</div>
              <Input
                className="text-emerald-500"
                id="investment-amount"
                type="number"
                placeholder={
                  isYearly ? "Yearly Investment" : "Monthly Investment"
                }
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value, 10))}
              />
              <Label
                className={isYearly ? "text-green-400" : ""}
                htmlFor="investment-mode"
              >
                Yearly
              </Label>
              <Switch id="investment-mode" onCheckedChange={toggleFrequency} />
              <Label
                className={isYearly ? "" : "text-green-400"}
                htmlFor="investment-mode"
              >
                Monthly
              </Label>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Label className="w-[60%]" htmlFor="number">
                Time Period (In Years)
              </Label>
              <Input
                id="time-period"
                type="number"
                placeholder="15"
                value={timePeriod}
                onChange={(e) => setTimePeriod(parseInt(e.target.value, 10))}
              />
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Label className="w-[60%]" htmlFor="number">
                Rate of Interest (In %)
              </Label>
              <Input
                id="interest-rate"
                placeholder="7.1%"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-center text-base">
                Invested Amount
                <div className="text-lg text-indigo-500 font-bold">
                  &#8377; {investedAmount}
                </div>
              </div>
              <div className="flex flex-col text-center text-base">
                Interest Earned
                <div className="text-lg text-sky-500 font-bold">
                  &#8377; {finalAmount - investedAmount}
                </div>
              </div>
              <div className="flex flex-col text-center text-base">
                Accumulated Amount
                <div className="text-lg text-emerald-500 font-bold">
                  &#8377; {finalAmount}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant={"emerald"}
              className="w-full"
              onClick={calculatePpfReturns}
            >
              Calculate Returns
            </Button>
          </CardFooter>
        </Card>
        {data.length ? (
          <CardsMetric data={data} />
        ) : (
          <CardsMetric data={data1} />
        )}
      </div>
    </>
  );
};

export default PPFCalculator;
