import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const modelsDir = path.resolve("public/assets/models");
const optimizedDir = path.resolve("public/assets/models/optimized");

if (!fs.existsSync(modelsDir)) {
  console.log("No models directory found.");
  process.exit(0);
}

fs.mkdirSync(optimizedDir, { recursive: true });

const files = fs
  .readdirSync(modelsDir)
  .filter((file) => file.endsWith(".glb") || file.endsWith(".gltf"));

for (const file of files) {
  const input = path.join(modelsDir, file);
  const output = path.join(optimizedDir, file.replace(/\.gltf$/, ".glb"));
  console.log(`Optimizing ${file}...`);
  execSync(`npx gltf-transform optimize "${input}" "${output}" --compress draco`, {
    stdio: "inherit",
  });
}
