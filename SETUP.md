# Haven Setup Guide

## ✅ What's Done

Your Haven landing page is ready to deploy!

- ✅ Next.js 14 + TypeScript + Tailwind CSS
- ✅ Professional landing page with hero, features, benefits, and contact form
- ✅ Resend email integration (free: 100 emails/day)
- ✅ Vercel Analytics (free tier)
- ✅ GitHub repo created: [github.com/Daniel-Cross/safehaven](https://github.com/Daniel-Cross/safehaven)
- ✅ Code pushed to main branch

## 🚀 Next Steps

### 1. Get Resend API Key (2 minutes)

1. Go to [resend.com](https://resend.com) and sign up
2. Navigate to API Keys in the dashboard
3. Create a new API key
4. Copy the key (starts with `re_...`)

### 2. Deploy to Vercel (3 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repo: `Daniel-Cross/safehaven`
3. Before deploying, add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: Your email (where inquiries will be sent)
4. Click "Deploy"
5. Done! Your site will be live at `safehaven.vercel.app`

### 3. Configure Custom Domain (2 minutes)

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add `safehaven.dev`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (~5 minutes)

### 4. Add Your Logo

Replace the placeholder in `app/page.tsx`:

```tsx
// Line ~14 - Replace this:
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
  SH
</div>

// With your logo image:
<Image src="/logo.png" alt="Safe Haven" width={40} height={40} />
```

Add your logo file to `/public/logo.png`

### 5. (Optional) Custom Email Domain in Resend

By default, emails come from `onboarding@resend.dev`. To use `hello@safehaven.dev`:

1. In Resend dashboard, go to Domains
2. Add `safehaven.dev`
3. Configure DNS records (SPF, DKIM)
4. Update sender in `app/api/contact/route.ts`:
   ```ts
   from: 'Haven <hello@safehaven.dev>'
   ```

## 📊 What You Get

**Free tiers used:**
- Resend: 100 emails/day (3,000/month)
- Vercel: Unlimited bandwidth & analytics
- Total cost: $0/month

**Contact form captures:**
- Name
- Email
- School/Institution
- Role (dropdown)
- Message (optional)

**Tracking:**
- Vercel Analytics automatically tracks page views
- View stats in Vercel dashboard

## 🎨 Customization Ideas

Once live, you might want to:
- Add testimonials section
- Add pricing page (`/pricing`)
- Add case studies/success stories
- Add FAQ section
- Integrate with a CRM (HubSpot, Pipedrive)

## 📱 Mobile Responsive

The site is fully responsive and tested on:
- Desktop (1920px+)
- Tablet (768px-1024px)
- Mobile (320px-767px)

## Need Help?

All code is documented in the README. For questions:
- Check the README.md
- Review component files (they're commented)
- Test locally: `npm run dev`

---

**Ready to go live!** 🚀
