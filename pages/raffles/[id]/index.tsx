import { useRouter } from "next/router";
import Link from "next/link";
import { useState, FormEvent } from "react";

type Raffle = {
id: string;
title: string;
description: string;
imageUrl: string;
ticketPricePence: number;
drawDate: string;
charityName: string;
clubName: string;
status: string;
entriesSoFar: number;
timeLeftLabel: string;
};

const DEMO_RAFFLES: Raffle[] = [
{
id: "world-cup-2026-final",
title: "World Cup 2026 Final VIP Trip",
description:
"Two Category 1 tickets to the 2026 World Cup final plus return flights and a 4-night hotel stay in the host city.",
imageUrl: "/worldcup.jpg",
ticketPricePence: 250,
drawDate: "2026-07-19T19:00:00.000Z",
charityName: "Common Goal",
clubName: "FIFA Partner Charity",
status: "open",
entriesSoFar: 4123,
timeLeftLabel: "30 days left",
},
{
id: "manchester-derby-vip",
title: "VIP Manchester Derby Hospitality",
description:
"Win VIP hospitality for you and a friend at the Manchester derby, with food, drinks and behind-the-scenes access.",
imageUrl: "/manchester.jpg",
ticketPricePence: 100,
drawDate: "2026-05-20T19:30:00.000Z",
charityName: "Street Soccer UK",
clubName: "Manchester United",
status: "open",
entriesSoFar: 1823,
timeLeftLabel: "12 days left",
},
{
id: "champions-league-final",
title: "Champions League Final Package",
description:
"Tickets, flights and hotel for two to the Champions League final. Includes stadium tour and merch bundle.",
imageUrl: "/ucl.jpg",
ticketPricePence: 200,
drawDate: "2026-06-01T18:00:00.000Z",
charityName: "Football For Good",
clubName: "UEFA Partner Club",
status: "open",
entriesSoFar: 2960,
timeLeftLabel: "20 days left",
},
{
id: "silverstone-f1",
title: "Silverstone F1 Paddock Experience",
description:
"Grid walk, paddock access and race-day hospitality at the British Grand Prix for you and a guest.",
imageUrl: "/f1.jpg",
ticketPricePence: 150,
drawDate: "2026-07-10T10:00:00.000Z",
charityName: "Motorsport Youth Trust",
clubName: "Silverstone Circuit",
status: "open",
entriesSoFar: 1047,
timeLeftLabel: "7 days left",
},
];

export default function RaffleDetailPage() {
const router = useRouter();
const { id } = router.query;

const raffle = DEMO_RAFFLES.find((r) => r.id === id);

const [email, setEmail] = useState("");
const [quantity, setQuantity] = useState(1);
const [isModalOpen, setIsModalOpen] = useState(false);

const basePrice = raffle ? raffle.ticketPricePence / 100 : 0;
const hasBulkDiscount = quantity >= 10;
const discountedPricePerTicket = hasBulkDiscount ? basePrice * 0.8 : basePrice;
const totalCost = discountedPricePerTicket * quantity;

const handleSubmit = (e: FormEvent) => {
e.preventDefault();
if (!raffle) return;

const query = new URLSearchParams({
title: raffle.title,
total: totalCost.toFixed(2),
tickets: quantity.toString(),
}).toString();

router.push(`/raffles/success?${query}`);
};

return (
<div>
{/* NAV */}
<nav className="navbar">
<div className="navbar-inner">
<Link href="/" className="navbar-name">
FanFortune
</Link>

<div className="navbar-links">
  <Link href="/raffles">Raffles</Link>
  <Link href="/how-it-works">How it works</Link>
  <Link href="/live-draw">Live draw demo</Link>
<Link href="/my-entries">My entries</Link>
<Link href="/winners">Past winners</Link>
  <Link href="/admin">Admin demo</Link>
</div>
</div>
</nav>

{/* DETAIL */}
<section className="raffle-detail-layout">
<div className="raffle-detail">
<div className="raffle-detail-banner">
{raffle?.imageUrl && (
<img
src={raffle.imageUrl}
alt={raffle.title}
className="raffle-detail-image"
/>
)}
</div>

<div>
{raffle ? (
<>
<h1>{raffle.title}</h1>

<p>{raffle.description}</p>

<p className="detail-meta">
In partnership with <strong>{raffle.clubName}</strong>, supporting{" "}
<strong>{raffle.charityName}</strong>.
</p>

<p className="detail-meta">
Draws on{" "}
{new Date(raffle.drawDate).toLocaleString("en-GB", {
dateStyle: "long",
timeStyle: "short",
})}
</p>

<p className="detail-meta">
{raffle.entriesSoFar.toLocaleString()} entries so far ·{" "}
{raffle.timeLeftLabel}
</p>

<div
style={{
marginTop: "1rem",
fontSize: "1rem",
color: "#e2e8f0",
}}
>
Standard ticket price:{" "}
<strong>£{basePrice.toFixed(2)}</strong> each
</div>

<p className="detail-note">
Buy <strong>10+ tickets</strong> and get a{" "}
<strong>20% bulk discount</strong>.
</p>

<button
type="button"
className="btn-primary"
onClick={() => setIsModalOpen(true)}
style={{ marginTop: "1rem" }}
>
Enter this raffle
</button>

<p className="detail-note">
You’ll confirm quantity and total cost in the pop-up.
</p>
</>
) : (
<p>Raffle not found.</p>
)}
</div>
</div>
</section>

{/* MODAL */}
{isModalOpen && raffle && (
<div className="modal-backdrop">
<div className="modal">
<button
type="button"
className="modal-close"
onClick={() => setIsModalOpen(false)}
>
×
</button>

<h2>Enter raffle</h2>
<p className="detail-meta">
{raffle.title} — in partnership with <strong>{raffle.clubName}</strong>, supporting{" "}
<strong>{raffle.charityName}</strong>.
</p>

<form className="detail-form" onSubmit={handleSubmit}>
<label>
Your email
<input
type="email"
required
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="you@example.com"
/>
</label>

<label>
Number of tickets
<input
type="number"
min={1}
max={100}
required
value={quantity}
onChange={(e) =>
setQuantity(
Math.max(1, parseInt(e.target.value || "1", 10))
)
}
/>
</label>

<p className="detail-note">
{hasBulkDiscount ? (
<>
Bulk discount applied: 20% off. Price per ticket:{" "}
<strong>£{discountedPricePerTicket.toFixed(2)}</strong>.
</>
) : (
<>
Price per ticket:{" "}
<strong>£{discountedPricePerTicket.toFixed(2)}</strong>. Buy{" "}
<strong>10+</strong> to unlock 20% off.
</>
)}
</p>

<p className="detail-note">
Total cost: <strong>£{totalCost.toFixed(2)}</strong>
</p>

<div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
<button type="submit">Confirm & continue</button>
<button
type="button"
className="btn-outline"
onClick={() => setIsModalOpen(false)}
>
Cancel
</button>
</div>
</form>
</div>
</div>
)}

{/* FOOTER */}
<footer className="site-footer">
<div className="site-footer-inner">
<span>© {new Date().getFullYear()} FanFortune. Demo MVP.</span>
<div>
<a href="/how-it-works">How it works</a>
<a href="/raffles">Raffles</a>
</div>
</div>
</footer>
</div>
);
}