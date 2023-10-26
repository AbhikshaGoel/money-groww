import { create } from "zustand";

import { Style } from "@/registry/styles";
import { Theme } from "@/registry/themes";

type Config = {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
};

const useConfig = create<Config>((set) => ({
  style: "default",
  theme: "zinc",
  radius: 0.5,
}));

export { useConfig };
