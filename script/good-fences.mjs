import { goodFences } from "@good-fences/api";

goodFences({
  paths: ["../components", "../pages"],
  project: "../tsconfig.json",
});
