import Link from "next/link";
import { FormEvent, useState } from "react";

type AdminRaffle = {
title: string;
description: string;
clubName: string;
charityName: string;
ticketPricePounds: number;
imageUrl: string;
entriesSoFar: number;
timeLeftLabel: string;
};

export default function AdminPage() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [clubName, setClubName] = useState("");
const [charityName, setCharityName] = useState("");
const [ticketPrice, setTicketPrice] = useState("1.00");
const [imageUrl, setImageUrl] = useState("/manchester.jpg");

const [preview, setPreview] = useState<AdminRaffle | null>(null);

const handleSubmit = (e: FormEvent) => {
e.preventDefault();

const price = parseFloat(ticketPrice || "1");
const safePrice = isNaN(price) ? 1 : price;

setPreview({
title: title || "Untitled experience",
description:
description ||
"Describe the VIP experience your fans could win in a sentence or two.",
clubName: clubName || "Partner club",
charityName: charityName || "Partner charity",
ticketPricePounds: safePrice,
imageUrl: imageUrl || "/manchester.jpg",
entriesSoFar: 0,
timeLeftLabel: "Just created",
});
};

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

{/* ADMIN LAYOUT */}
<section className="admin-layout">
<div className="admin-grid">
<div className="admin-panel">
<h1>Create a raffle (demo)</h1>
<p className="detail-note">
This is a front-end only demo for investors – in the real product this
would connect to your admin API and database.
</p>

<p className="detail-note">
Want to see how winners are revealed? Try the{" "}
<Link href="/live-draw">live draw demo</Link>.
</p>

<form className="admin-form" onSubmit={handleSubmit}>
<label>
Raffle title
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="e.g. VIP Manchester Derby Hospitality"
/>
</label>

<label>
Short description
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="e.g. Hospitality, food, drinks and behind-the-scenes access for two."
/>
</label>

<label>
Partner club
<input
type="text"
value={clubName}
onChange={(e) => setClubName(e.target.value)}
placeholder="e.g. Manchester United"
/>
</label>

<label>
Partner charity
<input
type="text"
value={charityName}
onChange={(e) => setCharityName(e.target.value)}
placeholder="e.g. Street Soccer UK"
/>
</label>

<label>
Ticket price (per entry, £)
<input
type="number"
min={0.5}
step={0.1}
value={ticketPrice}
onChange={(e) => setTicketPrice(e.target.value)}
/>
</label>

<label>
Image URL (for demo, use an existing one)
<input
type="text"
value={imageUrl}
onChange={(e) => setImageUrl(e.target.value)}
placeholder="/manchester.jpg or /ucl.jpg or /f1.jpg"
/>
</label>

<button type="submit">Create preview</button>
</form>
</div>

<div className="admin-preview">
<h2>Live preview</h2>
<p className="detail-note">
This shows how your new raffle would appear to fans on the platform.
</p>

{preview ? (
<div className="raffle-card" style={{ marginTop: "1rem" }}>
<div className="raffle-card-banner">
{preview.imageUrl && (
<img
src={preview.imageUrl}
alt={preview.title}
className="raffle-card-image"
/>
)}
</div>

<div className="raffle-card-body">
<div className="raffle-card-title">{preview.title}</div>

<div className="raffle-card-desc">{preview.description}</div>

<div className="raffle-meta">
In partnership with <strong>{preview.clubName}</strong>, supporting{" "}
<strong>{preview.charityName}</strong>.
</div>

<div className="raffle-price">
Tickets from{" "}
<strong>£{preview.ticketPricePounds.toFixed(2)}</strong>
</div>

<div className="raffle-stats">
<span>{preview.entriesSoFar} entries so far</span>
<span>· {preview.timeLeftLabel}</span>
</div>

<div className="raffle-cta">
<button
type="button"
className="btn-outline"
style={{ width: "100%", justifyContent: "center" }}
>
View as fan (demo)
</button>
</div>
</div>
</div>
) : (
<div className="admin-empty">
<p>
Fill in the form and click <strong>Create preview</strong> to see how
your campaign would appear.
</p>
</div>
)}
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