"use client";
import { CardsStats } from "./cards/stats";
import { CardsCalendar } from "./cards/calendar";
import { CardsActivityGoal } from "./cards/activity-goal";

export default function Home() {
  return (
    <div className="p-2">
      <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <CardsStats />
          <div className="grid gap-1 sm:grid-cols-[280px_1fr] md:hidden">
            <CardsCalendar />
            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
              <CardsActivityGoal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
