import Image from "next/image";
import { ArrowDownRight, ArrowRight, MapPin, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "2349033136843"; // Confirm with the boutique before publishing.
const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const products = [
  { name: "Retro Stripe Polo", category: "POLOS & TOPS", image: "/products/striped-retro-polo.jpg", note: "Statement stripes. Easy everyday style." },
  { name: "Classic Embossed Slides", category: "FOOTWEAR", image: "/products/black-slide-sandal.jpg", note: "A clean finish for relaxed days." },
  { name: "Essential Oversized Tees", category: "POLOS & TOPS", image: "/products/oversized-tees.jpg", note: "Easy silhouettes in versatile colours." },
  { name: "Signature Crest Slides", category: "FOOTWEAR", image: "/products/crest-slide-sandal.jpg", note: "Minimal comfort with a bold detail." },
  { name: "Washed Wide-Leg Denim", category: "DENIM", image: "/products/washed-wide-leg-jeans.jpg", note: "Relaxed fit with a vintage wash." },
  { name: "Blue-Trim Polo", category: "POLOS & TOPS", image: "/products/blue-trim-polo.jpg", note: "A fresh detail on a wardrobe staple." },
  { name: "Contrast Collar Polo", category: "POLOS & TOPS", image: "/products/leopard-collar-polo.jpg", note: "A little edge. A lot of personality." },
  { name: "Black Baggy Denim", category: "DENIM", image: "/products/black-baggy-jeans.jpg", note: "Roomy fit for laid-back looks." },
  { name: "Light-Wash Denim", category: "DENIM", image: "/products/light-wash-jeans.jpg", note: "An easy pairing for everyday outfits." }
];

const categories = ["ALL PIECES", "POLOS & TOPS", "DENIM", "FOOTWEAR"];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>HARYOURMIDEY BOUTIQUE</span><span className="announcement-dot">✦</span><span>FASHION AS UNIQUE AS YOU ARE</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Haryourmidey Boutique home">
          <span className="brand-mark">H<span className="brand-mark-b">B</span><span className="brand-crown">♛</span></span>
          <span className="brand-name">HARYOURMIDEY <small>B O U T I Q U E</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collection">Collection</a><a href="#about">Our story</a><a href="#visit">Find us</a>
        </nav>
        <a className="header-cta" href={waLink("Hello Haryourmidey Boutique! I'd like to enquire about your collection.")} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> Chat to order
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> STYLE THAT SPEAKS FOR YOU</p>
          <h1>Find your<br /><em>own kind</em> of<br />fashion.</h1>
          <p className="hero-description">Everyday essentials, standout pieces and finishing touches to make your style unmistakably yours.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collection">Explore the collection <ArrowRight size={17} /></a>
            <a className="text-link" href={waLink("Hello! Please help me find something from your collection.")} target="_blank" rel="noreferrer">Ask us on WhatsApp <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-proof"><span className="proof-star">✦</span><span>YOUR STYLE. YOUR STATEMENT.</span><span className="proof-divider" /><span>ADO-EKITI, NIGERIA</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-main"><Image src="/products/striped-retro-polo.jpg" alt="Black and white striped polo shirt from the sample collection" fill priority sizes="(max-width: 760px) 90vw, 43vw" /></div>
          <div className="hero-image-small"><Image src="/products/washed-wide-leg-jeans.jpg" alt="Washed wide-leg denim from the sample collection" fill sizes="180px" /></div>
          <div className="hero-sticker"><span>STYLE</span><strong>IS<br />PERSONAL</strong><i>✦</i></div>
          <div className="hero-caption">THE EVERYDAY EDIT <span>— 01</span></div>
        </div>
        <div className="hero-bottom-rule" />
      </section>

      <section className="marquee" aria-label="Boutique categories"><div>DENIM <span>✦</span> STREETWEAR <span>✦</span> EVERYDAY ESSENTIALS <span>✦</span> FOOTWEAR <span>✦</span> YOUR NEXT FAVOURITE <span>✦</span> DENIM <span>✦</span></div></section>

      <section className="collection section-wrap" id="collection">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> CURATED FOR YOUR EVERYDAY</p><h2>Pieces worth<br /><em>stepping out in.</em></h2></div>
          <p className="section-intro">From standout tops to laid-back denim, explore a selection of pieces chosen to bring a little more character to your wardrobe.</p>
        </div>
        <div className="category-row">
          <div className="category-chips">{categories.map((category, i) => <a key={category} className={i === 0 ? "category-chip active" : "category-chip"} href="#collection">{category}</a>)}</div>
          <span className="item-count">SELECTED PIECES <b>09</b></span>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <a className="product-photo" href={waLink(`Hello Haryourmidey Boutique! I'm interested in the ${product.name}. Please confirm the price, available sizes and stock.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.name}`}>
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 46vw, (max-width: 1000px) 30vw, 23vw" />
                <span className="product-index">0{index + 1}</span>
                <span className="product-quick"><MessageCircle size={14} /> ENQUIRE</span>
              </a>
              <div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3><span className="product-note">{product.note}</span></div><a className="product-arrow" href={waLink(`Hello! Is the ${product.name} available? Please send me the price and sizes.`)} target="_blank" rel="noreferrer" aria-label={`Ask about ${product.name}`}><ArrowDownRight size={18} /></a></div>
              <div className="price-placeholder">PRICE & AVAILABILITY ON REQUEST</div>
            </article>
          ))}
        </div>
        <div className="collection-foot"><span>CAN&apos;T FIND YOUR PIECE?</span><a href={waLink("Hello Haryourmidey Boutique! I'm looking for a particular item. Can you help me?")} target="_blank" rel="noreferrer">Tell us what you’re looking for <ArrowRight size={16} /></a></div>
      </section>

      <section className="statement" id="about">
        <div className="statement-symbol">✳</div>
        <p className="eyebrow">MORE THAN WHAT YOU WEAR</p>
        <h2>Fashion as unique<br />as <em>you are.</em></h2>
        <p>Good style isn’t about following every trend. It’s about finding the pieces that feel like you.</p>
        <a className="button button-light" href={waLink("Hello Haryourmidey Boutique! I'd like help choosing a look.")} target="_blank" rel="noreferrer">Let’s find your look <ArrowRight size={17} /></a>
      </section>

      <section className="visit section-wrap" id="visit">
        <div className="visit-left"><p className="eyebrow"><span className="eyebrow-line" /> COME THROUGH</p><h2>Your next<br /><em>favourite find.</em></h2><p>Prefer to shop in person? Visit us in Ado-Ekiti and explore the collection up close.</p><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Rosehanna+Mall+Adebayo+Ado-Ekiti" target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a></div>
        <div className="visit-card"><div className="visit-card-top"><span>H.B. / STORE DETAILS</span><Sparkles size={18} /></div><div className="visit-monogram">H<span>B</span></div><h3>Haryourmidey<br />Boutique</h3><div className="visit-detail"><MapPin size={17} /><p><b>Visit our store</b><span>Rosehanna Mall, Adebayo,<br />Ado-Ekiti, Ekiti State, Nigeria</span></p></div><div className="visit-detail"><MessageCircle size={17} /><p><b>Order & enquiries</b><span>Chat with us directly on WhatsApp</span></p></div><a className="visit-whatsapp" href={waLink("Hello Haryourmidey Boutique! I'd like to ask about your products.")} target="_blank" rel="noreferrer">START A CONVERSATION <ArrowRight size={16} /></a></div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">HARYOURMIDEY <span>BOUTIQUE</span></a>
        <p>Fashion as unique as you are.</p>
        <div className="footer-links"><a href="#collection">Collection</a><a href="#about">Our story</a><a href="#visit">Visit us</a><a href={waLink("Hello Haryourmidey Boutique!")} target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={14} /></a></div>
        <div className="footer-bottom"><span>© 2026 HARYOURMIDEY BOUTIQUE</span><span>MADE WITH CARE IN ADO-EKITI</span><span className="demo-note">CONCEPT PREVIEW — DETAILS TO BE CONFIRMED</span></div>
      </footer>
    </main>
  );
}
