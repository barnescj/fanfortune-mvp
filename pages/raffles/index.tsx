import Link from "next/link";

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

export default function RafflesPage() {
const raffles = DEMO_RAFFLES;

return (
<div className="raffles-page">
{/* NAVBAR */}
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

{/* PAGE HEADER */}
<section className="raffles">
<div>
<h2>All live raffles</h2>

<p className="section-subtitle">
A curated selection of premium sports experiences happening right now.
</p>

<p className="section-subtitle" style={{ marginTop: "-0.5rem" }}>
<Link href="/live-draw" className="live-demo-link"
>
View a live draw demo →
</Link>
</p>

{/* RAFFLE GRID */}
<div className="raffles-grid">
{raffles.map((raffle) => {
const price = (raffle.ticketPricePence / 100).toFixed(2);

return (
<div key={raffle.id} className="raffle-card">
<div className="raffle-card-banner">
{raffle.imageUrl && (
<img
src={raffle.imageUrl}
alt={raffle.title}
className="raffle-card-image"
/>
)}
</div>

<div className="raffle-card-body">
<div className="raffle-card-title">
{raffle.title}
{raffle.id === "world-cup-2026-final" && (
<span className="star-badge">STAR DRAW</span>
)}
</div>

<div className="raffle-card-desc">{raffle.description}</div>

<div className="raffle-meta">
In partnership with <strong>{raffle.clubName}</strong>, supporting{" "}
<strong>{raffle.charityName}</strong>.
</div>

<div className="raffle-price">
Tickets from <strong>£{price}</strong>
</div>

<div className="raffle-stats">
<span>{raffle.entriesSoFar.toLocaleString()} entries so far</span>
<span>· {raffle.timeLeftLabel}</span>
</div>

<div className="raffle-cta">
<Link href={`/raffles/${raffle.id}`}>View raffle</Link>
</div>
</div>
</div>
);
})}
</div>
</div>
</section>

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