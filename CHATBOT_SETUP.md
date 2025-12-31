# Chatbot Setup Guide

## Quick Setup

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click on **"Create API Key"** button
3. Select a Google project (or create a new one)
4. Copy the generated API key

### 2. Configure the API Key

The `.env.local` file is already created in the project root. Update it with your API key:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:**
- Replace `your_actual_api_key_here` with your actual Gemini API key
- **NEVER** commit this file to git (it's in `.gitignore`)
- Keep your API key secret

### 3. Verify Setup

Run the development server:
```bash
pnpm dev
```

Open the chatbot (bottom right corner) and test it out!

## Rate Limiting

The chatbot now has built-in rate limiting to prevent hitting API limits:
- **Maximum 10 requests per minute**
- **5-second cooldown between messages**
- Clear warning messages if limits are exceeded

This helps prevent the "429 Rate Limit Exceeded" error.

## Troubleshooting

| Error | Solution |
|-------|----------|
| "API key is not configured" | Make sure `.env.local` exists and has `NEXT_PUBLIC_GEMINI_API_KEY` set |
| "Invalid API key" | Verify the API key in `.env.local` matches your Gemini API key exactly |
| "Rate limit exceeded" | Wait a moment and try again. The chatbot enforces a 5s cooldown |
| "Network error" | Check your internet connection |

## Free Tier Limits

Google's free Gemini API has these limits:
- **15 requests per minute** (Gemini 2.0 Flash)
- The chatbot limits to 10/min to be safe

If you need higher limits, upgrade to a paid plan in Google Cloud Console.

## Deployment

When deploying to production:
1. Set `NEXT_PUBLIC_GEMINI_API_KEY` in your hosting provider's environment variables
2. Examples:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Docker/Self-hosted**: Set in `.env` or deployment config

## Need Help?

- [Google AI Studio Docs](https://ai.google.dev/gemini-api/docs)
- [Gemini API Reference](https://ai.google.dev/api/rest/)
