import Link from "next/link";
import { useState } from "react";

type Winner = {
id: string;
name: string;
location: string;
};

const DEMO_RAFFLE = {
name: "VIP Manchester Derby Hospitality (demo)",
entries: 1823,
charity: "Street Soccer UK",
club: "Manchester United",
};

// Simple helper to pick N random unique items from a pool
function sample<T>(pool: T[], count: number): T[] {
const copy = [...pool];
const result: T[] = [];
const max = Math.min(count, copy.length);

for (let i = 0; i < max; i++) {
const idx = Math.floor(Math.random() * copy.length);
result.push(copy[idx]);
copy.splice(idx, 1);
}

return result;
}

const MAIN_WINNER_POOL: Winner[] = [
{ id: "FF-104382", name: "Alex M", location: "Manchester, UK" },
{ id: "FF-219041", name: "Hannah W", location: "London, UK" },
{ id: "FF-330582", name: "Josh D", location: "Leeds, UK" },
];

const TIER2_POOL: Winner[] = [
{ id: "FF-441903", name: "Riya S", location: "Leicester, UK" },
{ id: "FF-452019", name: "Connor B", location: "Liverpool, UK" },
{ id: "FF-467221", name: "Chloe R", location: "Cardiff, UK" },
{ id: "FF-489013", name: "Mohammed A", location: "Birmingham, UK" },
{ id: "FF-501734", name: "Emma C", location: "Glasgow, UK" },
{ id: "FF-518902", name: "Lewis P", location: "Newcastle, UK" },
{ id: "FF-529118", name: "Sophie L", location: "Brighton, UK" },
];

const TIER3_POOL: Winner[] = [
{ id: "FF-600112", name: "Daniel K", location: "Dublin, IE" },
{ id: "FF-601945", name: "Tom B", location: "Bristol, UK" },
{ id: "FF-605318", name: "Eve T", location: "Nottingham, UK" },
{ id: "FF-609771", name: "James P", location: "Sheffield, UK" },
{ id: "FF-612304", name: "Lauren G", location: "Norwich, UK" },
{ id: "FF-618920", name: "Ben H", location: "Southampton, UK" },
{ id: "FF-622118", name: "Katie F", location: "Reading, UK" },
{ id: "FF-629003", name: "Owen S", location: "Swansea, UK" },
{ id: "FF-633512", name: "Mia K", location: "Hull, UK" },
{ id: "FF-639821", name: "Luke J", location: "Coventry, UK" },
{ id: "FF-642390", name: "Isla N", location: "Aberdeen, UK" },
{ id: "FF-648231", name: "Harvey C", location: "Blackpool, UK" },
];

export default function LiveDrawPage() {
const [status, setStatus] = useState<"idle" | "drawing" | "done">("idle");

const [mainWinner, setMainWinner] = useState<Winner | null>(null);
const [tier2Winners, setTier2Winners] = useState<Winner[]>([]);
const [tier3Winners, setTier3Winners] = useState<Winner[]>([]);

const handleRunDemo = () => {
if (status === "drawing") return;

setStatus("drawing");
setMainWinner(null);
setTier2Winners([]);
setTier3Winners([]);

// simulate draw delay
setTimeout(() => {
const [grand] = sample(MAIN_WINNER_POOL, 1);
const t2 = sample(TIER2_POOL, 4); // 3–5 Tier 2 prizes (we're using 4)
const t3 = sample(TIER3_POOL, 10); // 10 Tier 3 prizes

setMainWinner(grand || null);
setTier2Winners(t2);
setTier3Winners(t3);
setStatus("done");
}, 2000);
};

const isDrawing = status === "drawing";

return (
<div className="live-layout">
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

{/* MAIN CONTENT */}
<main className="live-inner">
<section className="live-card">
<header className="live-card-header">
<h1>Live draw demo</h1>
<p>
This is a front-end simulation of how a FanFortune live draw could
look. In the full product this would be a live video of a host
drawing the winners on camera, connected to a verifiable random
draw service.
</p>
</header>

<div className="live-content">
{/* Fake “video” frame */}
<div className="live-video">
<div className="live-badge">LIVE</div>
<div className="live-viewers">1,842 watching</div>

<div className="live-video-body">
<p className="live-video-label">Demo studio view</p>
<p className="live-video-sub">
In production this area will show the live video of the host
running the draw and revealing all prize tiers to fans.
</p>
</div>
</div>

{/* Raffle + controls */}
<aside className="live-meta">
<h2>{DEMO_RAFFLE.name}</h2>
<p className="live-meta-small">
Entries:{" "}
<strong>{DEMO_RAFFLE.entries.toLocaleString()}</strong>
</p>
<p className="live-meta-small">
Charity: <strong>{DEMO_RAFFLE.charity}</strong>
</p>
<p className="live-meta-small">
Club / partner: <strong>{DEMO_RAFFLE.club}</strong>
</p>

<button
onClick={handleRunDemo}
className={`live-run-button ${
isDrawing ? "live-run-button--spinning" : ""
}`}
disabled={isDrawing}
>
{status === "idle" && "Run demo draw"}
{status === "drawing" && "Drawing winners…"}
{status === "done" && "Run again"}
</button>

<p className="live-disclaimer">
Demo only. In production the draw would be logged and verified,
with an auditable result for clubs, charities and regulators.
</p>
</aside>
</div>

{/* WINNERS SECTION */}
{status === "done" && mainWinner && (
<section className="live-winners">
<div className="live-winners-main">
<div className="live-winner-badge live-winner-badge--main">
Main prize winner
</div>
<h3>{mainWinner.name}</h3>
<p className="live-winner-prize">
VIP Manchester Derby Hospitality package
</p>
<p className="live-winner-id">Ticket {mainWinner.id}</p>
<p className="live-winner-location">{mainWinner.location}</p>
</div>

<div className="live-winners-columns">
<div className="live-winners-column">
<h4>Tier 2 prizes · Signed team shirts</h4>
<ul>
{tier2Winners.map((w) => (
<li key={w.id}>
<span className="live-winner-name">{w.name}</span>
<span className="live-winner-meta">
{" "}
· {w.location} · {w.id}
</span>
</li>
))}
</ul>
</div>

<div className="live-winners-column">
<h4>Tier 3 prizes · Match balls</h4>
<ul>
{tier3Winners.map((w) => (
<li key={w.id}>
<span className="live-winner-name">{w.name}</span>
<span className="live-winner-meta">
{" "}
· {w.location} · {w.id}
</span>
</li>
))}
</ul>
</div>
</div>

<p className="live-winners-note">
Names, ticket numbers and locations shown here are demo data
only. In production, results would come directly from the
verified draw service and be stored in a permanent audit log.
</p>
</section>
)}
</section>
</main>
</div>
);
}