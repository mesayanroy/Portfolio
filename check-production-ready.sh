#!/bin/bash

# Production Readiness Verification Script
# Run this before deploying to production

echo "🔍 Checking Production Readiness..."
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0

# Check 1: Environment file exists
echo "📝 Checking environment configuration..."
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✓${NC} .env.local file exists"
    PASSED=$((PASSED + 1))
else
    echo -e "${RED}✗${NC} .env.local file missing"
    echo "  Run: cp .env.example .env.local"
    FAILED=$((FAILED + 1))
fi

# Check 2: API key is set
if [ -f ".env.local" ]; then
    if grep -q "NEXT_PUBLIC_GEMINI_API_KEY=" ".env.local" && ! grep -q "your_api_key_here" ".env.local"; then
        echo -e "${GREEN}✓${NC} API key is configured"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} API key not properly configured"
        echo "  Edit .env.local and add your Gemini API key"
        FAILED=$((FAILED + 1))
    fi
fi

# Check 3: No hardcoded API keys in code
echo ""
echo "🔒 Checking code security..."
if ! grep -r "AIzaSy" components/ --include="*.tsx" --include="*.ts" 2>/dev/null; then
    echo -e "${GREEN}✓${NC} No hardcoded API keys found in code"
    PASSED=$((PASSED + 1))
else
    echo -e "${RED}✗${NC} Hardcoded API keys found in code!"
    FAILED=$((FAILED + 1))
fi

# Check 4: Dependencies installed
echo ""
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules exists"
    PASSED=$((PASSED + 1))
else
    echo -e "${YELLOW}⚠${NC} node_modules missing"
    echo "  Run: pnpm install"
    FAILED=$((FAILED + 1))
fi

# Check 5: Try to build
echo ""
echo "🔨 Testing production build..."
if pnpm build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✓${NC} Production build successful"
    PASSED=$((PASSED + 1))
else
    echo -e "${RED}✗${NC} Production build failed"
    echo "  Check /tmp/build.log for details"
    FAILED=$((FAILED + 1))
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Summary:"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 Ready for production deployment!${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Push to GitHub: git push origin main"
    echo "  2. Deploy on Vercel/Netlify"
    echo "  3. Add NEXT_PUBLIC_GEMINI_API_KEY to platform env vars"
    echo "  4. Deploy and test!"
    exit 0
else
    echo -e "${RED}❌ Please fix the issues above before deploying${NC}"
    exit 1
fi
