# Safe Haven

**Keeping schools safe. Be proactive, not reactionary.**

Landing page for Safe Haven - incident tracking and reporting for schools.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (email delivery)
- **Vercel Analytics** (free tier)

## 📦 Setup

1. **Clone and install:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with:
   - `RESEND_API_KEY`: Get from [resend.com/api-keys](https://resend.com/api-keys) (free tier: 100 emails/day)
   - `CONTACT_EMAIL`: Your email to receive contact form submissions

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

Vercel Analytics is automatically enabled on deployment.

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. **Important:** By default, Resend uses `onboarding@resend.dev` as sender
   - To use your own domain (like `hello@safehaven.dev`), verify your domain in Resend
   - Free tier still works with the default sender

## 🎨 Customization

### Adding Your Logo

Replace the placeholder logo in `app/page.tsx`:
```tsx
<div className="w-10 h-10 bg-blue-600 rounded-lg">
  {/* Replace with your logo */}
</div>
```

### Colors

Main brand color is blue-600. Update in `tailwind.config.ts` or directly in components.

## 📊 Analytics

Vercel Analytics is included (free tier):
- Automatic page view tracking
- No configuration needed
- View stats in Vercel dashboard

## 📁 Project Structure

```
safehaven/
├── app/
│   ├── api/contact/        # Contact form API endpoint
│   ├── layout.tsx          # Root layout with analytics
│   └── page.tsx            # Landing page
├── components/
│   └── ContactForm.tsx     # Contact form component
└── public/                 # Static assets
```

## 🔜 Future Routes

- `/dashboard` - User login and organization management (coming soon)

## 📝 License

All rights reserved - Safe Haven 2026
