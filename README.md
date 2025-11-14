# Sports Experience Raffle – Simple MVP

This is a **very simple, investor-friendly MVP** for your Sports Experience Raffle concept.

- Built with **Next.js 14 + React**
- Uses **Firebase Firestore** to store:
  - Raffles
  - Ticket "entries"
- No real payments in this version (to keep setup simple).
  - A dev can later plug Stripe into the buy-flow.
  - For now, it shows the end-to-end experience flow for investors.

## 1. Install dependencies

```bash
npm install
```

## 2. Configure Firebase

1. Create a Firebase project at console.firebase.google.com
2. Add a Web App and copy the config values:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId
3. Create a Firestore Database (in test mode for local dev).
4. Create a collection **raffles** with documents like:

Fields (example):
- title: "VIP Manchester Derby Hospitality"
- description: "Win VIP hospitality for you and a friend at the Manchester derby."
- imageUrl: "https://example.com/image.jpg" (or empty string)
- ticketPricePence: 100
- drawDate: (timestamp in the future)
- charityName: "Street Soccer UK"
- clubName: "Manchester United"
- status: "open"

## 3. Create `.env.local`

Copy `.env.local.example` to `.env.local` and paste in your Firebase config values.

## 4. Run the dev server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## 5. What you can demo

- Home page:
  - Hero section ("Win VIP sports experiences from £1")
  - How it works
  - Live raffles list (from Firestore)
- Raffles listing:
  - All open raffles
- Raffle detail:
  - Full description
  - Simple email + ticket quantity form
  - On submit, writes a "ticket" record into Firestore.
  - Shows a confirmation message.

This is enough for a clear investor pitch of the user journey. Payments and advanced admin tools can be added later.