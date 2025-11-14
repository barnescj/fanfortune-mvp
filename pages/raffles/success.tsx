import Link from "next/link";
import { useRouter } from "next/router";

export default function RaffleSuccessPage() {
const router = useRouter();
const { title, total, tickets } = router.query;

const displayTitle =
typeof title === "string" ? title : "Your raffle";
const displayTotal =
typeof total === "string" ? total : "0.00";
const displayTickets =
typeof tickets === "string" ? tickets : "1";

return (
<div>
{/* NAVBAR */}
<nav className="navbar">
<div className="navbar-inner">
<Link href="/" className="navbar-name">FanFortune</Link>

<div className="navbar-links">
<Link href="/raffles">Raffles</Link>
<Link href="/how-it-works">How it works</Link>
</div>
</div>
</nav>

{/* SUCCESS CARD */}
<section className="success-layout">
<div className="success-card">
<h1>Entry confirmed 🎉</h1>
<p>
You’ve entered <strong>{displayTickets}</strong> ticket(s) for:
</p>
<p>
<strong>{displayTitle}</strong>
</p>
<p>
Total amount (demo only):{" "}
<strong>£{displayTotal}</strong>
</p>
<p className="detail-note">
This is a demo MVP – no real payment has been taken. In the
production platform this screen would show your payment
reference and entry ID.
</p>

<div className="success-actions">
<Link href="/raffles" className="btn-primary">
View more raffles
</Link>
<Link href="/" className="btn-outline">
Back to homepage
</Link>
</div>
</div>
</section>

{/* FOOTER */}
<footer className="site-footer">
<div className="site-footer-inner">
<span>© {new Date().getFullYear()} SportsRaffle. Demo MVP.</span>
<div>
<a href="/#how-it-works">How it works</a>
<a href="/raffles">Raffles</a>
</div>
</div>
</footer>
</div>
);
}