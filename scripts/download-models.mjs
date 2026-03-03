import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import models from "./models.json" assert { type: "json" };

const SKETCHFAB_API = "https://api.sketchfab.com/v3/models";

async function downloadFile(url, output) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, Buffer.from(arrayBuffer));
}

async function getSketchfabDownloadUrl(modelId) {
  const token = process.env.SKETCHFAB_TOKEN;
  if (!token) {
    throw new Error("Missing SKETCHFAB_TOKEN. Add it to your environment first.");
  }

  const response = await fetch(`${SKETCHFAB_API}/${modelId}/download`, {
    headers: { Authorization: `Token ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Sketchfab request failed: ${response.status}`);
  }

  const payload = await response.json();
  if (!payload.gltf?.url) {
    throw new Error("Sketchfab download URL not found. Ensure the model is downloadable.");
  }

  return payload.gltf.url;
}

async function run() {
  for (const model of models) {
    if (model.url && model.url.startsWith("REPLACE")) {
      console.log(`Skipping ${model.name}. Add a public URL in scripts/models.json.`);
      continue;
    }

    try {
      let downloadUrl = model.url;
      if (!downloadUrl && model.sketchfabId) {
        downloadUrl = await getSketchfabDownloadUrl(model.sketchfabId);
      }

      if (!downloadUrl) {
        console.log(`Skipping ${model.name}. No URL provided.`);
        continue;
      }

      console.log(`Downloading ${model.name} from ${model.source}...`);
      await downloadFile(downloadUrl, model.output);
      console.log(`Saved to ${model.output}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to download model", {
        modelName: model.name,
        error: errorMessage,
      });
    }
  }
}

run();
