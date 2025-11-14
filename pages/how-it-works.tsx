import Link from "next/link";

export default function HowItWorksPage() {
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

{/* MAIN CONTENT */}
<section className="how-layout">
<div className="how-inner">
<h1>How FanFortune works</h1>
<p className="detail-note">
FanFortune runs transparent, charity-backed sports raffles — giving fans
access to VIP experiences while raising money for good causes.
</p>

{/* FAN JOURNEY */}
<div className="how-grid">
<div className="how-card">
<h2>1. Fans pick a raffle</h2>
<p>
Fans browse a curated list of VIP experiences — from derby hospitality
and cup finals to F1 paddock days and once-in-a-lifetime trips.
</p>
</div>

<div className="how-card">
<h2>2. Entries from just £1</h2>
<p>
Entries are low cost and capped per person. Fans can buy a bundle of
tickets with transparent discounts — for example 10 tickets with ~20%
off the single ticket price.
</p>
</div>

<div className="how-card">
<h2>3. Verified live draw</h2>
<p>
At the end of the campaign, a winner is selected using a verifiable
random draw service. Draws can be live-streamed and logged for audit.
</p>
</div>

<div className="how-card">
<h2>4. Prize + charity fulfilled</h2>
<p>
The winner is contacted and the experience is delivered. A fixed
portion of revenue is paid to the partner charity, with full reporting
on funds raised and tickets sold.
</p>
</div>
</div>

{/* PARTNERS / INVESTORS SECTION */}
<section className="how-investors">
<h2>For clubs, charities &amp; investors</h2>
<p className="detail-note">
This demo shows the commercial mechanics behind a typical FanFortune
campaign. Numbers below are illustrative only.
</p>

<div className="how-investors-grid">
<div className="how-investors-card">
<h3>Example campaign</h3>
<ul>
<li>Ticket price: <strong>£2</strong> per entry</li>
<li>Entries sold: <strong>10,000</strong></li>
<li>Gross revenue: <strong>£20,000</strong></li>
</ul>
</div>

<div className="how-investors-card">
<h3>Illustrative revenue split</h3>
<ul>
<li>Prize &amp; fulfilment: <strong>50%</strong> (£10,000)</li>
<li>Charity donation: <strong>25%</strong> (£5,000)</li>
<li>Platform &amp; operations: <strong>25%</strong> (£5,000)</li>
</ul>
</div>

<div className="how-investors-card">
<h3>Why this works</h3>
<ul>
<li>Clubs &amp; rights holders reach global fans without discounting tickets.</li>
<li>Charities receive predictable, reported donations per campaign.</li>
<li>
FanFortune earns a transparent platform fee, scalable across multiple
sports and markets.
</li>
</ul>
</div>
</div>

<p className="detail-note">
In a production environment, these percentages can be tuned per partner
and geography, with clear disclosure to fans on each raffle page.
</p>
</section>

{/* LINK BACK TO RAFFLES */}
<div style={{ marginTop: "2rem" }}>
<Link href="/raffles" className="btn-primary">
Explore live raffles
</Link>
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
<span>
18+ only · Please play responsibly · Demo site – no real-money play.
</span>
</div>
</div>
</footer>
</div>
);
}