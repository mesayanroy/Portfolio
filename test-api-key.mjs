#!/usr/bin/env node

// Direct test of Gemini API key without any framework
const API_KEY = "AIzaSyBLjSpeCLNYcjt1SXKm3KzZtriAnzwDzew";

// Test multiple models to see which ones work
const models = [
  "gemini-2.0-flash-exp",
  "gemini-1.5-flash", 
  "gemini-1.5-pro",
  "gemini-pro",
  "gemini-1.5-flash-exp-8b"
];

const testModel = async (modelName) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
  
  try {
    console.log(`\n🔍 Testing model: ${modelName}`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Hello, are you working?"
          }]
        }]
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(`✅ SUCCESS: ${modelName} works!`);
      console.log("Response preview:", JSON.stringify(data).substring(0, 200) + "...");
      return true;
    } else {
      const error = await response.text();
      console.log(`❌ FAILED: Status ${response.status}`);
      console.log("Error:", error.substring(0, 300));
      return false;
    }
  } catch (err) {
    console.log(`❌ ERROR: ${err.message}`);
    return false;
  }
};

const main = async () => {
  console.log("🚀 Testing Gemini API Key and Available Models");
  console.log("API Key (first 20 chars):", API_KEY.substring(0, 20) + "...");
  console.log("Testing models...");
  
  let successCount = 0;
  for (const model of models) {
    const worked = await testModel(model);
    if (worked) successCount++;
    await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between tests
  }
  
  console.log(`\n📊 Summary: ${successCount}/${models.length} models working`);
  if (successCount === 0) {
    console.log("\n⚠️  No models responded. Your API key may not be valid or active.");
    console.log("Visit https://makersuite.google.com/app/apikey to verify your key");
  }
};

main().catch(console.error);
