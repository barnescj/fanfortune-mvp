import Link from "next/link";

type EntryStatus =
| "open"
| "lost"
| "won-main"
| "won-tier2"
| "won-tier3";

type Entry = {
id: string;
raffle: string;
date: string;
tickets: number;
totalPaid: number; // in pounds
status: EntryStatus;
prizeLabel?: string;
};

const ENTRIES: Entry[] = [
// Open raffles (demo)
{
id: "FF-2026-WC",
raffle: "World Cup 2026 Final VIP Trip",
date: "1 Nov 2025 at 21:15",
tickets: 12,
totalPaid: 24,
status: "open",
},
{
id: "FF-2026-MAN-DERBY",
raffle: "VIP Manchester Derby Hospitality",
date: "10 Mar 2025 at 18:42",
tickets: 8,
totalPaid: 8,
status: "open",
},

// Past draws – user has won / lost different tiers
{
id: "FF-2027-UCL",
raffle: "Champions League Final Package",
date: "5 Oct 2025 at 14:05",
tickets: 7,
totalPaid: 14,
status: "lost",
},
{
id: "FF-2027-FA-CUP",
raffle: "FA Cup Final Hospitality",
date: "12 Apr 2025 at 20:30",
tickets: 5,
totalPaid: 10,
status: "won-tier2",
prizeLabel: "Tier 2 · Signed team shirt",
},
{
id: "FF-2027-F1",
raffle: "Silverstone F1 Paddock Experience",
date: "20 Mar 2025 at 16:10",
tickets: 4,
totalPaid: 8,
status: "won-tier3",
prizeLabel: "Tier 3 · Match ball",
},
{
id: "FF-2027-EURO-FINAL",
raffle: "European Championship Final VIP Trip",
date: "2 Mar 2025 at 19:45",
tickets: 25,
totalPaid: 50,
status: "won-main",
prizeLabel: "Main prize · VIP trip",
},
{
id: "FF-2027-TEST-CLUB",
raffle: "Club Foundation Charity Dinner",
date: "15 Feb 2025 at 19:00",
tickets: 2,
totalPaid: 4,
status: "lost",
},
];

export default function MyEntriesPage() {
const totalEntries = ENTRIES.reduce((sum, e) => sum + e.tickets, 0);
const openRaffles = ENTRIES.filter((e) => e.status === "open").length;
const wins = ENTRIES.filter((e) =>
["won-main", "won-tier2", "won-tier3"].includes(e.status)
).length;

const formatMoney = (value: number) => `£${value.toFixed(2)}`;

const statusLabel = (status: EntryStatus): string => {
switch (status) {
case "open":
return "Open";
case "lost":
return "Not selected";
case "won-main":
return "Won – main prize";
case "won-tier2":
return "Won – Tier 2";
case "won-tier3":
return "Won – Tier 3";
default:
return status;
}
};

return (
<div className="entries-layout">
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

{/* PAGE CONTENT */}
<main className="entries-inner">
<section className="entries-card">
<header className="entries-header">
<div>
<h1>My entries</h1>
<p>
Demo view for a fan account. In production this would show
entries linked to the logged-in user.
</p>
</div>

<div className="entries-stats">
<div className="entries-stat entries-stat--total">
<span className="entries-stat-label">Total entries</span>
<span className="entries-stat-value">
{totalEntries.toLocaleString()}
</span>
</div>

<div className="entries-stat entries-stat--open">
<span className="entries-stat-label">Open raffles</span>
<span className="entries-stat-value">
{openRaffles.toLocaleString()}
</span>
</div>

<div className="entries-stat entries-stat--wins">
<span className="entries-stat-label">Wins (demo)</span>
<span className="entries-stat-value">
{wins.toLocaleString()}
</span>
</div>
</div>
</header>

{/* TABLE */}
<div className="entries-table-wrapper">
<table className="entries-table">
<thead>
<tr>
<th>Raffle</th>
<th>Date entered</th>
<th>Tickets</th>
<th>Total paid</th>
<th>Status</th>
<th></th>
</tr>
</thead>
<tbody>
{ENTRIES.map((entry) => (
<tr key={entry.id}>
<td className="entries-raffle-cell">
<div className="entries-raffle-name">{entry.raffle}</div>
{entry.prizeLabel && (
<div className="entries-prize-label">
{entry.prizeLabel}
</div>
)}
</td>
<td>{entry.date}</td>
<td>{entry.tickets}</td>
<td>{formatMoney(entry.totalPaid)}</td>
<td>
<span
className={[
"status-pill",
`status-pill--${entry.status}`,
].join(" ")}
>
{statusLabel(entry.status)}
</span>
</td>
<td className="entries-view-cell">
<Link href="/raffles" className="btn-secondary">
View raffle
</Link>
</td>
</tr>
))}
</tbody>
</table>
</div>

<p className="entries-footnote">
Statuses and prizes shown here are demo data only. In a live
environment this page would reflect real draws, wins and refunds.
</p>
</section>
</main>
</div>
);
}