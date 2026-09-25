const products = [
  { eyebrow: "Everyday carry", title: "The cable that ends cable chaos", description: "A durable 3-in-1 charger for desks, carry-ons, and the bottom of your tote.", image: "https://images.unsplash.com/photo-1609592424824-2e8c4f7a8c83?auto=format&fit=crop&w=1000&q=85", alt: "Braided charging cable on a pale background", query: "3 in 1 charging cable braided" },
  { eyebrow: "Small-space hero", title: "A lamp that gets the mood right", description: "Warm, dimmable light with a slim footprint and a satisfying tactile switch.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85", alt: "Warm table lamp glowing in a calm room", query: "dimmable bedside table lamp warm light" },
  { eyebrow: "Kitchen upgrade", title: "The pan you’ll reach for daily", description: "Even heat, easy cleanup, and roomy enough for a proper weeknight dinner.", image: "https://images.unsplash.com/photo-1584990347449-a6f9d45eb8ea?auto=format&fit=crop&w=1000&q=85", alt: "Minimal skillet on a kitchen counter", query: "12 inch stainless steel frying pan" },
];

const essentials = [
  ["01", "Pour-over kettle", "Precise, quiet, and handsome enough to leave out.", "gooseneck electric kettle"],
  ["02", "Packing cubes", "The simplest way to make a carry-on feel twice as large.", "compression packing cubes travel"],
  ["03", "Magnetic power bank", "Pocketable backup power without a nest of wires.", "magnetic portable charger power bank"],
  ["04", "Soft cooler", "Leak-resistant, shoulder-friendly, and weekend ready.", "soft cooler bag leakproof"],
] as const;

// Approved Amazon Associates tracking ID.
const amazonUrl = (query: string) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=jaggs20`;

export default function Home() {
  return <main>
    <div className="disclosure"><span>Independent picks. Zero clutter.</span><span>As an Amazon Associate, we earn from qualifying purchases.</span></div>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Jaggscorner.com home">JAGGS<span>/</span>CORNER.COM</a>
      <div className="navlinks"><a href="#picks">Picks</a><a href="#edit">The Edit</a><a href="#about">Our rules</a></div>
      <a className="navCta" href="#picks">Shop the list <span aria-hidden="true">↗</span></a>
    </nav>
    <section className="hero" id="top">
      <div className="heroCopy"><p className="kicker"><span /> Thoughtful things, found for you</p><h1>Buy less.<br/><em>Choose better.</em></h1><p className="intro">The useful, beautiful, genuinely worth-it finds we’d text to our closest friends.</p><a className="primaryButton" href="#picks">Explore this week’s picks <span aria-hidden="true">↓</span></a></div>
      <div className="heroVisual" aria-label="A curated collection of everyday essentials"><div className="sun"/><div className="heroTag"><b>07</b><span>new finds<br/>this week</span></div><div className="object objectOne"><span>GOOD<br/>CHOICE</span></div><div className="object objectTwo"/><div className="object objectThree">+</div><p className="sideNote">CURATED FOR REAL LIFE • EST. 2026</p></div>
    </section>
    <section className="manifesto" id="about"><p className="sectionLabel">OUR POINT OF VIEW</p><div><h2>No endless scroll.<br/>No impulse bait.</h2><p>We sift through the noise to find the few things that earn their place in your home. Every pick meets three rules: useful, well-made, and fairly priced.</p></div></section>
    <section className="picks" id="picks">
      <header className="sectionHeader"><div><p className="sectionLabel">THE WEEKLY SHORTLIST</p><h2>Three things worth knowing about.</h2></div><span className="issue">ISSUE 024 — SEP 22</span></header>
      <div className="productGrid">{products.map((product,index)=><article className="product" key={product.title}><a className="productImage" href={amazonUrl(product.query)} target="_blank" rel="sponsored noopener" aria-label={`Shop ${product.title} on Amazon`}><img src={product.image} alt={product.alt}/><span className="number">0{index+1}</span><span className="shopCircle" aria-hidden="true">↗</span></a><p className="productEyebrow">{product.eyebrow}</p><h3>{product.title}</h3><p>{product.description}</p><a className="textLink" href={amazonUrl(product.query)} target="_blank" rel="sponsored noopener">Shop on Amazon <span aria-hidden="true">→</span></a></article>)}</div>
    </section>
    <section className="edit" id="edit"><div className="editIntro"><p className="sectionLabel">THE FOREVER EDIT</p><h2>Small upgrades.<br/><em>Big difference.</em></h2><p>Four low-drama improvements for the way you cook, travel, and keep the lights on.</p></div><div className="editList">{essentials.map(([number,title,copy,query])=><a href={amazonUrl(query)} target="_blank" rel="sponsored noopener" key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></a>)}</div></section>
    <section className="newsletter"><p className="sectionLabel">ONE GOOD EMAIL</p><h2>Seven finds. Every Sunday.<br/>No filler.</h2><form action="#" className="signup"><label className="srOnly" htmlFor="email">Email address</label><input id="email" type="email" placeholder="you@email.com" required/><button type="submit">Join the list <span aria-hidden="true">→</span></button></form><p className="finePrint">Free forever. Unsubscribe whenever.</p></section>
    <footer><a className="brand light" href="#top">JAGGS<span>/</span>CORNER.COM</a><p>Thoughtful things for everyday life.</p><div><a href="#about">How we choose</a><a href="mailto:hello@jaggscorner.com">Contact</a></div><small>© 2026 Jaggscorner.com. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</small></footer>
  </main>;
}
