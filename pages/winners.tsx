import Link from "next/link";

type Winner = {
id: string;
raffleTitle: string;
raffleId: string;
winnerName: string;
location: string;
charityName: string;
drawDate: string;
entries: number;
imageUrl: string;
};

const DEMO_WINNERS: Winner[] = [
{
id: "W-001",
raffleTitle: "VIP Manchester Derby Hospitality",
raffleId: "manchester-derby-vip",
winnerName: "S. Wreford",
location: "London, UK",
charityName: "Street Soccer UK",
drawDate: "2025-03-20T19:30:00.000Z",
entries: 18234,
imageUrl: "/manchester.jpg",
},
{
id: "W-002",
raffleTitle: "Champions League Final Package",
raffleId: "champions-league-final",
winnerName: "J. Barnes",
location: "Nottingham, UK",
charityName: "Football For Good",
drawDate: "2025-06-10T20:00:00.000Z",
entries: 29608,
imageUrl: "/ucl.jpg",
},
{
id: "W-003",
raffleTitle: "Silverstone F1 Paddock Experience",
raffleId: "silverstone-f1",
winnerName: "A. Rivera",
location: "Manchester, UK",
charityName: "Motorsport Youth Trust",
drawDate: "2025-07-20T10:00:00.000Z",
entries: 10478,
imageUrl: "/f1.jpg",
},
];

export default function WinnersPage() {
const winners = DEMO_WINNERS;

return (
<div>
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

{/* CONTENT */}
<section className="winners-layout">
<div className="winners-inner">
<h1>Past winners (demo)</h1>
<p className="detail-note">
Example winners to show how FanFortune campaigns convert into real experiences
and charity impact.
</p>

<div className="winners-grid">
{winners.map((w) => {
const drawDate = new Date(w.drawDate).toLocaleDateString("en-GB", {
dateStyle: "long",
});

return (
<article key={w.id} className="winner-card">
<div className="winner-image">
<img src={w.imageUrl} alt={w.raffleTitle} />
</div>

<div className="winner-body">
<div className="winner-badge">WINNER STORY</div>
<h2 className="winner-title">{w.raffleTitle}</h2>

<p className="winner-meta">
Winner: <strong>{w.winnerName}</strong> · {w.location}
</p>

<p className="winner-meta">
Drawn on {drawDate} · {w.entries.toLocaleString()} entries
</p>

<p className="winner-charity">
Supporting <strong>{w.charityName}</strong>
</p>

<div className="winner-actions">
<Link href={`/raffles/${w.raffleId}`} className="btn-outline">
View raffle details
</Link>
</div>
</div>
</article>
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