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

export default function HomePage() {
const raffles = DEMO_RAFFLES;

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

{/* HERO */}
<section className="hero">
<div>
<h1>Win VIP sports experiences from just £1</h1>

<p className="lead">
Enter raffles for hospitality tickets, signed shirts, and once-in-a-lifetime
experiences – while raising money for great causes and your favourite clubs.
</p>

<div className="hero-buttons">
<Link href="/raffles" className="btn-primary">
Explore live raffles
</Link>
<Link href="/how-it-works" className="btn-outline">
How it works
</Link>
</div>

<p className="hero-small">
Transparent draws. Charity-backed campaigns. Built for fans who want a fair shot
at unforgettable matchdays.
</p>
</div>
</section>

{/* FEATURED STAR DRAW */}
<section className="featured-star">
<div className="featured-star-inner">

<div className="featured-star-image">
<img src="/worldcup.jpg" alt="World Cup 2026 Final" />
</div>

<div className="featured-star-content">
<div className="featured-star-badge">STAR DRAW</div>

<h2 className="featured-star-title">World Cup 2026 Final VIP Trip</h2>

<p className="featured-star-text">
Two Category 1 tickets to the 2026 World Cup final + return flights +
4-night hotel stay in the host city. This is the biggest prize we’ve ever run.
</p>

<p className="featured-star-meta">
Supporting <strong>Common Goal</strong> and celebrating global football.
</p>

<Link href="/raffles/world-cup-2026-final" className="btn-primary featured-star-cta">
View Star Draw →
</Link>
</div>

</div>
</section>

{/* HOW IT WORKS */}
<section id="how-it-works" className="how-it-works">
<div>
<h2>How it works</h2>

<div className="hiw-grid">
<div className="hiw-card">
<div className="hiw-step-label">STEP 1</div>
<h3>Pick a raffle</h3>
<p>Choose from curated experiences with top clubs, charities and sponsors.</p>
</div>

<div className="hiw-card">
<div className="hiw-step-label">STEP 2</div>
<h3>Enter from £1</h3>
<p>
Buy low-cost entries. Ticket revenue funds the prize, platform costs, and a
guaranteed donation.
</p>
</div>

<div className="hiw-card">
<div className="hiw-step-label">STEP 3</div>
<h3>Watch the draw</h3>
<p>Draws can be independently verified and live-streamed for transparency.</p>
</div>

<div className="hiw-card">
<div className="hiw-step-label">STEP 4</div>
<h3>Enjoy the experience</h3>
<p>
Hospitality, travel, meet-and-greets – all handled by our team and partners for a
frictionless VIP day.
</p>
</div>
</div>
</div>
</section>

{/* LIVE RAFFLES */}
<section className="raffles">
<div>
<h2>Live raffles</h2>

<p className="section-subtitle">
A rotating line-up of premium, limited-run experiences – each supporting a partner
charity and club.
</p>

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
<div className="raffle-card-title">{raffle.title}</div>

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

{/* IMPACT STATS STRIP */}
<section className="impact-strip">
<div className="impact-inner">
<div>
<div className="impact-label">Funds raised (demo)</div>
<div className="impact-value">£124,000+</div>
</div>
<div>
<div className="impact-label">Fan experiences delivered</div>
<div className="impact-value">12</div>
</div>
<div>
<div className="impact-label">Partner charities</div>
<div className="impact-value">8</div>
</div>
</div>
</section>

{/* FOOTER */}
<footer className="site-footer">
<div className="site-footer-inner">
<div className="footer-main">
<span>© {new Date().getFullYear()} FanFortune. Demo MVP.</span>
<div>
<a href="/how-it-works">How it works</a>
<a href="/raffles">Raffles</a>
<a href="/winners">Past winners</a>
</div>
</div>

<div className="footer-trust">
<span>18+ only · Please play responsibly · Demo site – no real-money play.</span>
</div>
</div>
</footer>
</div>
);
}
