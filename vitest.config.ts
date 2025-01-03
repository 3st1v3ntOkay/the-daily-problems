import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@leetcode": resolve(__dirname, "./leetcode"),
  //     "@typescript": resolve(__dirname, "./typescript"),
  //   },
  // },
  test: {
    environment: "node",
  },
});
