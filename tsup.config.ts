import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],  // <-- make sure path is correct
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  watch: false
});
