import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface Habits {
  habits: Habit[];
}

const useHabitStore = create<Habits>()(() => {
  return {
    habits: [],
  };
});

export default useHabitStore;
