#!/usr/bin/env node

// List available Gemini API models
const API_KEY = "AIzaSyBLjSpeCLNYcjt1SXKm3KzZtriAnzwDzew";

const main = async () => {
  try {
    console.log("🔍 Listing available Gemini API models...\n");
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("❌ Error:", response.status);
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    const data = await response.json();
    console.log("✅ Available models:\n");
    
    if (data.models && Array.isArray(data.models)) {
      data.models.forEach((model) => {
        const modelName = model.name.replace("models/", "");
        const supportedMethods = model.supportedGenerationMethods || [];
        console.log(`📌 ${modelName}`);
        console.log(`   Methods: ${supportedMethods.join(", ")}`);
        if (model.displayName) console.log(`   Display: ${model.displayName}`);
        console.log();
      });
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};

main();
