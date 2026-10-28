# Haryourmidey Boutique — Demo Storefront

A mobile-first Next.js + TypeScript storefront concept for Haryourmidey Boutique.

## Run locally in VS Code

1. Install Node.js LTS if it is not already installed: https://nodejs.org/
2. Extract this ZIP.
3. Open the extracted `haryourmidey-boutique-demo` folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open http://localhost:3000

## Deploy to Vercel

1. Create a new GitHub repository and upload/push the contents of this folder.
2. In Vercel, choose **Add New → Project**, import the repository, and keep the detected Next.js settings.
3. Click **Deploy**. No environment variables are required for this demo.

## Before presenting as an official client site

- This is a concept demo, not an approved live store. Keep the “CONCEPT PREVIEW” note until the boutique approves it.
- Confirm the WhatsApp number and exact store address with the owner. The demo currently uses `09033136843` converted to international format in the WhatsApp link.
- Confirm all product names, photos, prices, sizes, stock, delivery policy, return policy, and store details with the owner. Prices are intentionally not invented; product cards say “Price & availability on request.”
- The uploaded product photos were supplied for this demo. Get the owner's permission before public launch.
- The generated logo is a concept. Let the owner approve it before replacing her official brand logo.
- Product cards link to WhatsApp for enquiries; there is no cart, online payment, inventory system, or automatic order management.
- Replace `example.com` in `app/layout.tsx` metadataBase with the actual domain after one is chosen.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind not required; styling is in `app/globals.css`
- Lucide icons

## Important

The product category links are visual demo filters only at this stage; they do not filter the grid. The site is a front-end demo with WhatsApp enquiry links.
