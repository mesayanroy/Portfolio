# Quick Reference Guide

## 🚀 Start Development Server

```bash
pnpm dev
```
Visit: http://localhost:3000

## 🔨 Build for Production

```bash
pnpm build
```

## 🧪 Test Production Build Locally

```bash
pnpm build
pnpm start
```

## ✅ Check Production Readiness

```bash
bash check-production-ready.sh
```

## 🔑 Environment Setup

```bash
# 1. Copy example file
cp .env.example .env.local

# 2. Edit .env.local
# Add your Gemini API key: NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
```

Get API key: https://makersuite.google.com/app/apikey

## 📁 Important Files

| File | Purpose |
|------|---------|
| `.env.local` | Your API keys (DO NOT commit) |
| `.env.example` | Template for environment variables |
| `DEPLOYMENT.md` | Complete deployment guide |
| `FIXES_SUMMARY.md` | Summary of fixes made |
| `check-production-ready.sh` | Production readiness checker |

## 🐛 Troubleshooting

### Chatbot not working?

1. Check browser console (F12)
2. Verify `.env.local` exists with API key
3. Restart dev server after adding env vars
4. Test API key at https://makersuite.google.com/app/apikey

### Build failing?

```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Common Error Messages

| Error | Solution |
|-------|----------|
| "API key not configured" | Check `.env.local` exists and has `NEXT_PUBLIC_GEMINI_API_KEY` |
| "401 Unauthorized" | Invalid API key - get new one from Google |
| "429 Rate Limit" | Too many requests - wait a moment |
| "Failed to fetch" | Network issue - check internet connection |

## 🌐 Deployment Quick Links

- **Vercel:** https://vercel.com/new
- **Netlify:** https://app.netlify.com/
- **Gemini API:** https://makersuite.google.com/app/apikey

## 📝 Deployment Checklist

- [ ] `.env.local` created with API key
- [ ] `pnpm build` runs successfully
- [ ] Test chatbot locally
- [ ] Push to GitHub
- [ ] Deploy on platform (Vercel/Netlify)
- [ ] Add env vars to platform
- [ ] Test deployed site
- [ ] Verify chatbot works on production

---

**Need help?** Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.
