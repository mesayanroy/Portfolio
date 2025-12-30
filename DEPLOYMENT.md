# Deployment Checklist

## Pre-Deployment Steps

### 1. Environment Variables
- [ ] Create `.env.local` file (copy from `.env.example`)
- [ ] Add your Gemini API key: `NEXT_PUBLIC_GEMINI_API_KEY`
- [ ] Get API key from: https://makersuite.google.com/app/apikey
- [ ] **IMPORTANT:** Never commit `.env.local` to Git (already in `.gitignore`)

### 2. Build Test
Run a production build locally to check for errors:

```bash
pnpm build
```

Expected output: Build completes without errors

### 3. Test Production Build Locally
```bash
pnpm start
```

Visit `http://localhost:3000` and test:
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Chatbot opens and responds (test with a question)
- [ ] 3D animations render properly
- [ ] All interactive elements work

## Deployment Platforms

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production ready build"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `pnpm build` (or leave default)
     - Output Directory: `.next` (default)
   
3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GEMINI_API_KEY` = `your_api_key`
   - Apply to: Production, Preview, Development
   
4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your site at the provided URL

### Option 2: Netlify

1. **Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   
2. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GEMINI_API_KEY`
   
3. **Deploy**
   - Connect your Git repository
   - Netlify will auto-deploy on push

### Option 3: Custom Server

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

3. **Use PM2 for process management (optional)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

## Post-Deployment

### Verify Functionality
- [ ] Visit your deployed URL
- [ ] Test all pages and navigation
- [ ] Test chatbot functionality
- [ ] Check console for errors (F12 → Console)
- [ ] Test on mobile devices
- [ ] Verify 3D animations work

### Performance Checks
- [ ] Run Lighthouse audit (F12 → Lighthouse)
- [ ] Check page load speed
- [ ] Verify images are loading
- [ ] Test on different browsers

### Security
- [ ] Ensure no API keys are exposed in client-side code
- [ ] Check that `.env.local` is in `.gitignore`
- [ ] Verify HTTPS is enabled on your domain

## Troubleshooting

### Chatbot Not Working
1. **Check API Key**
   - Verify `NEXT_PUBLIC_GEMINI_API_KEY` is set in platform environment variables
   - Check key is valid at https://makersuite.google.com/app/apikey
   
2. **Check Console Errors**
   - Open browser DevTools (F12)
   - Look for error messages in Console tab
   - Common errors:
     - "API key not configured" → Environment variable missing
     - "401 Unauthorized" → Invalid API key
     - "429 Rate Limit" → Too many requests, wait a moment

3. **Verify API Model**
   - Current model: `gemini-2.0-flash-exp`
   - If model is deprecated, update in `chatbot-overlay.tsx`

### Build Failures
1. **Clear cache and rebuild**
   ```bash
   rm -rf .next node_modules
   pnpm install
   pnpm build
   ```

2. **Check Node version**
   - Required: Node.js 18.x or higher
   ```bash
   node --version
   ```

### Performance Issues
1. **Optimize images** in `/public` folder
2. **Check bundle size**: `pnpm build` shows bundle analysis
3. **Enable caching** on your hosting platform

## Monitoring

### After Deployment
- Set up error tracking (e.g., Sentry)
- Monitor API usage in Google Cloud Console
- Check analytics for user engagement

### Regular Maintenance
- Update dependencies: `pnpm update`
- Check for security vulnerabilities: `pnpm audit`
- Rotate API keys periodically

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the deployment logs on your platform
3. Verify all environment variables are set correctly
4. Test locally with `pnpm build && pnpm start`

---

**Last Updated:** December 30, 2025
