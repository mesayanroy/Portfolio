# Chatbot Troubleshooting Guide

## Current Setup Status ✅

Your chatbot is configured with:
- **API Key**: Configured in `.env.local`
- **Model**: Gemini 1.5 Flash (Fast & Reliable)
- **Rate Limiting**: 15 requests/min with 1s cooldown
- **Description**: Simplified profile (see below)

## How to Test the Chatbot

1. **Start the development server:**
   ```bash
   pnpm dev
   ```

2. **Open your browser:**
   - Go to `http://localhost:3001`

3. **Open the chatbot:**
   - Look for the chat icon (bottom-right corner)
   - Click to open the chat window

4. **Send a test message:**
   - Try: "Tell me about Sayan"
   - Try: "What is Sayan working on?"
   - Try: "What are Sayan's hobbies?"

## Chatbot Profile (What It Knows)

The chatbot responds based on this information:
```
"I'm Sayan Roy, a full-stack developer and Web3 enthusiast. 
I'm in my second year at Sister Nivedita University. 
I have hands-on experience with Solidity, smart contracts, and blockchain. 
Currently building Oregano Finance. 
I'm learning LLMs, blockchain wallets, and quant finance. 
My hobbies are football, music, and traveling. 
I'm based in Kolkata, India."
```

## Common Issues & Solutions

### Issue: "Oops! Something went wrong"
**Cause**: Generic catch-all error message  
**Solution**: 
- Check browser console (F12) for detailed error message
- Look for specific error codes (401, 429, 403, etc)
- Verify `.env.local` has your API key

### Issue: "Rate limit exceeded"
**Cause**: Too many requests sent too quickly  
**Solution**:
- Wait 30 seconds before trying again
- The chatbot enforces 1-second cooldown between messages
- Google free tier allows 15 requests/minute

### Issue: "Invalid API key"
**Cause**: API key in `.env.local` is incorrect  
**Solution**:
1. Go to https://makersuite.google.com/app/apikey
2. Create a new API key
3. Update `.env.local` with the new key:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_new_key_here
   ```
4. Restart dev server: `pnpm dev`

### Issue: "Network error"
**Cause**: Internet connection issue or API unreachable  
**Solution**:
- Check your internet connection
- Try again in a few moments
- Check if Google's API is up (status.google.com)

## Testing Checklist

- [ ] Dev server running (`pnpm dev`)
- [ ] `.env.local` exists with API key
- [ ] Browser console shows no TypeScript errors
- [ ] Chatbot window opens when clicked
- [ ] Can type in input field
- [ ] Send button is clickable
- [ ] Chatbot responds to messages (after ~2-3 seconds)
- [ ] Responses are based on Sayan's profile

## Debug Mode

To see detailed logs:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for "Chatbot Error:" messages
4. Copy the error and check troubleshooting guide above

## Production Deployment

When deploying to production:

1. **Vercel**: 
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GEMINI_API_KEY=your_key`

2. **Netlify**:
   - Go to Site Settings → Build & Deploy → Environment
   - Add: `NEXT_PUBLIC_GEMINI_API_KEY=your_key`

3. **Docker/Self-hosted**:
   - Set environment variable in deployment config

⚠️ **Important**: Never commit your API key to git. It's already in `.gitignore`.

## Quick API Key Generation

1. Visit: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the generated key
4. Paste in `.env.local`
5. Restart dev server

## Supported Questions

The chatbot can answer questions like:
- "Tell me about yourself"
- "What technologies do you know?"
- "What are you building?"
- "What are your hobbies?"
- "Where are you from?"
- "What are you learning?"

## Rate Limit Details

- **Free Tier**: 15 requests per minute
- **Chatbot Limit**: 15 requests/min (matches free tier)
- **Cooldown**: 1 second between messages (prevents burst)
- **Per Day**: Unlimited as long as you stay under 15/min average

## Still Having Issues?

1. Check all error messages in browser console
2. Verify API key is valid and has no typos
3. Try restarting dev server (`Ctrl+C`, then `pnpm dev`)
4. Check Google API status: https://status.google.com/
5. Try a different question to test if API is responding

Happy chatting! 🤖
