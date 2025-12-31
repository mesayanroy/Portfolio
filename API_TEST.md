# Quick API Test Command

## Test Your API Key Directly

Run this command in PowerShell to test if your Gemini API key works:

```powershell
$apiKey = "AIzaSyBLjSpeCLNYcjt1SXKm3KzZtriAnzwDzew"
$body = @{
    contents = @(
        @{
            parts = @(
                @{
                    text = "Hello, who are you?"
                }
            )
        }
    )
} | ConvertTo-Json -Depth 10

$response = Invoke-WebRequest `
  -Uri "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=$apiKey" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body

Write-Host "Status: $($response.StatusCode)"
Write-Host "Response:" 
$response.Content | ConvertFrom-Json | ConvertTo-Json
```

## What You Should See

**Success (200)**:
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "I'm Claude..."
          }
        ]
      }
    }
  ]
}
```

**Error (404)**:
```json
{
  "error": {
    "code": 404,
    "message": "The specified model does not exist.",
    "status": "NOT_FOUND"
  }
}
```

**Error (401)**:
```json
{
  "error": {
    "code": 401,
    "message": "Request had invalid authentication credentials.",
    "status": "UNAUTHENTICATED"
  }
}
```

## If Test Passes ✅

Your API key works! The chatbot should work perfectly in your portfolio.

## If Test Fails ❌

1. **Get new API key**:
   - Visit: https://makersuite.google.com/app/apikey
   - Click "Create API Key"
   - Copy the new key

2. **Update `.env.local`**:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_new_key_here
   ```

3. **Restart dev server**:
   ```bash
   pnpm dev
   ```

4. **Test again**

## Current Chatbot Setup ✅

- **Endpoint**: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent`
- **Model**: `gemini-pro`
- **API Key**: Loaded from `.env.local`
- **Rate Limit**: 1 second between messages
- **Auto-Logging**: Console shows API calls and responses

