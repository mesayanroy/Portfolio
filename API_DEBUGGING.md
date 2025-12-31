# Chatbot API Debugging Guide

## Current Configuration

**API Endpoint**: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent`  
**Model**: `gemini-pro` (Stable, reliable model)  
**Authentication**: API key from `.env.local`

## Testing the Chatbot API

### Step 1: Verify API Key

Make sure your `.env.local` has the correct API key:
```bash
# View your .env.local file
cat .env.local
```

You should see:
```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyBLjSpeCLNYcjt1SXKm3KzZtriAnzwDzew
```

### Step 2: Test in Browser Console

1. Open your portfolio in browser
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. When you send a message in the chatbot, look for logs like:
   ```
   Calling Gemini API with message: "your question here..."
   API Key configured: Yes
   ```

### Step 3: Check Network Tab

1. In Developer Tools, go to **Network** tab
2. Send a message to the chatbot
3. Look for a request to `generativelanguage.googleapis.com`
4. Check the response:
   - **Status 200**: Success ✅
   - **Status 404**: Model or endpoint not found ❌
   - **Status 401/403**: Invalid API key ❌
   - **Status 429**: Rate limited ⏱️

### Step 4: Manual API Test

You can test the API directly using curl:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyBLjSpeCLNYcjt1SXKm3KzZtriAnzwDzew" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{
        "text": "Hello, who are you?"
      }]
    }]
  }'
```

### Expected Successful Response

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "I am Claude, an AI assistant..."
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "safetyRatings": [...]
    }
  ]
}
```

## Troubleshooting

### Issue: "API Error: 404"

**Cause**: The endpoint or model name is incorrect

**Solutions**:
1. ✅ Using `gemini-pro` model (stable)
2. Verify API key has correct permissions
3. Check that the endpoint URL is correct
4. Visit [Google AI Studio](https://makersuite.google.com/app/apikey) to verify API key

### Issue: "API Error: 401"

**Cause**: Invalid or missing API key

**Solutions**:
1. Generate new API key from https://makersuite.google.com/app/apikey
2. Update `.env.local` with new key
3. Restart dev server: `pnpm dev`

### Issue: "API Error: 429"

**Cause**: Rate limit exceeded

**Solutions**:
1. Wait 30 seconds before trying again
2. The chatbot enforces 1-second cooldown to prevent this
3. Free tier allows 15 requests/minute

## API Models Available

| Model | Status | Speed | Quality |
|-------|--------|-------|---------|
| `gemini-pro` | ✅ Stable | Fast | Good |
| `gemini-1.5-flash` | ⚠️ Beta | Very Fast | Good |
| `gemini-1.5-pro` | ⚠️ Beta | Slower | Excellent |

**Current**: Using `gemini-pro` for reliability

## Console Logs to Watch For

When sending a message, you should see in browser console:

```
Calling Gemini API with message: "Tell me about yourself..."
API Key configured: Yes
```

Then shortly after:

```
API Response received successfully
Message from AI: "I'm Sayan Roy..."
```

Or if there's an error:

```
Chatbot Error: Error: API Error: 404...
API Error Details: {status: 404, statusText: "Not Found", ...}
```

## Quick Checklist

- [ ] `.env.local` exists with correct API key
- [ ] API key starts with `AIza...`
- [ ] Dev server running (`pnpm dev`)
- [ ] Browser console shows "API Key configured: Yes"
- [ ] Network requests show 200 status
- [ ] Chatbot responds within 3-5 seconds

## Testing Locally

```bash
# Start dev server
pnpm dev

# Open browser to http://localhost:3001
# Click chatbot icon
# Type a message
# Check console for logs
```

## Production Deployment

When deploying, ensure:
1. Set `NEXT_PUBLIC_GEMINI_API_KEY` in production environment
2. Verify the same API key works in production
3. Test chatbot functionality before going live
4. Monitor API usage in Google Cloud Console

## Still Having Issues?

1. **Check API key validity**: https://makersuite.google.com/app/apikey
2. **Verify `.env.local` format**: No quotes around the key value
3. **Clear browser cache**: Hard refresh (Ctrl+Shift+R)
4. **Restart dev server**: Stop with Ctrl+C, then `pnpm dev`
5. **Check API status**: https://status.google.com/

