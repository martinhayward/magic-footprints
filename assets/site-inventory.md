# Santa's Magic Footprints — Site Inventory
Source: https://www.magicfootprints.com (Squarespace). Crawled 2026-10-23 for full static rebuild.

## Site-wide structure

**Header/Nav** (identical on every page): Logo (links to `/`) + nav `Home | Shop | About | Contact`. Mobile has a hamburger toggle (`#mobile-show-nav` / `#mobileNav`) — same links, slide-out canvas.
- Home → `/`
- Shop → `/shop-1`
- About → `/about`
- Contact → `/contact`

**Footer** (identical on every page): `FAQ` link (`/faq`) · `Terms & Conditions` link (`/terms-conditions`), then italic quote, then copyright line.
```
FAQ   Terms & Conditions
"Imagination is more important than knowledge" - Albert Einstein
Copyright 1997 - 2023, Santa's Magic Footprints®. All Rights Reserved.
```
(Copyright year may be worth making dynamic, e.g. `1997 - <current year>`, but original site hardcodes 2023.)

Favicon: `favicon.ico` (16x16 ico, saved locally).

## Color palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#6B0009` (rgb(107,0,9)) | Page background (whole site — dark Christmas red) |
| `--color-text` | `#FFFFFF` | All body text, headings, links, nav, footer |
| `--color-accent-green` | `#007A00` (rgb(0,122,0)) | "ADD TO CART" button background |
| `--color-link` | `#FFFFFF` | Links (no distinct link color — underline/weight is the only differentiator; no visible hover state was captured) |

No other background colors appear anywhere — every section/row/header/footer has `background: transparent`, so the dark red body color shows through the entire site uniformly.

## Fonts

- **Headings / nav / buttons / logo lettering**: `futura-pt` (webfont, loaded via Squarespace's Typekit-style loader — not a Google Font). Bold (700) for H1, regular/400 for H2. Letter-spacing ~3px on the uppercase banner headline, ~1px on buttons. **Recommended substitute if futura-pt license isn't available**: `"Futura PT", "Century Gothic", "Trebuchet MS", sans-serif` — or use a close free alternative like **"Josefin Sans"** or **"Jost"** (Google Fonts) which has a similar geometric-sans look.
- **Body copy / footer / price text**: `"Open Sans"` (Google Font — easy to pull in directly: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`).
- **Product grid titles** (`.summary-title`): `proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif` — uppercase, 20px. Proxima Nova is also a paid webfont; substitute **"Montserrat"** or system `-apple-system/Helvetica Neue` if not licensed.

All headline/title text is CSS `text-transform: uppercase` — the underlying copy is mixed-case in the source but renders all-caps.

## Pages

### `/` — Home
1. **HTML block** (banner, uppercase H1 + H2 + H2):
   - H1: "Order by December 18 For Christmas day delivery!"
   - Body: "Magic Footprints help build your child's imagination and create holiday excitement for the whole family. Start making Childhood Morning Memories!"
   - "Christmas Magic Footprints" (section sub-header)
2. **Product grid ("Featured")** — 4 products, each: thumbnail image, title (link to product page), price:
   - Santa's Magic Footprints® — `thumb-santa.jpg` — $9.95 — → `/shop/santa`
   - Elf Footprints™ — `thumb-elf.jpg` — $9.95 — → `/shop/elf`
   - Reindeer Magic Hoof Prints™ — `thumb-reindeer.jpg` — $8.95 — → `/shop/reindeer`
   - Footprint Bundle — `thumb-bundle.jpg` — Sale Price $24.95 / Original Price $28.85 — → `/shop/bundle`
   - Each grid item also has a "Read more →" link to the product page (text link, white, no button chrome).
3. **HTML block** (footer quote, see site-wide footer above).

Note: `hero-christmas-scene.jpg` (full-res family/living-room Christmas photo, 2500×1662) is present in the page's image set but not visibly placed in the block text I captured — likely used as a Squarespace "Banner Image" (page background/cover image set via `data-edit-main-image="Banner"` on `<section id="page">`). Treat it as a hero/banner background image for the homepage top section if it's not otherwise visible — safe to use as a hero background image behind or near the top banner HTML block.

### `/shop-1` — Shop (index)
1. HTML block: "Order by 12/20 to guarantee Christmas delivery." (H1) + "Shop" (H2) + body copy:
   > "Welcome to the shop of Santa's Magic Footprints®. We're currently providing our most popular December products and due to demand, we're also offering a bundled option with over 10% worth of savings."
   > "All prices include standard shipping."
   + "Christmas Magic Footprints" sub-header
2. Product grid (same 4 as home: Santa/Elf/Reindeer/Bundle, same thumbnails/prices/links)
3. HTML block: "Other Holiday Footprints" sub-header
4. Product grid (1 item): Tooth Fairy Footprints™ — `thumb-fairy.jpg` — $11.95 → `/shop/fairy`
5. Footer quote block (site-wide)

Background image on this page: `santas-workshop.jpg` (Santa's workshop photo, 1600×1000) appears in the page image set — likely a banner/cover image same as home, same treatment.

### Product page template (used by all 5 products — `/shop/santa`, `/shop/elf`, `/shop/reindeer`, `/shop/bundle`, `/shop/fairy`)
Layout: Title (H1, uppercase) → Price → Image gallery (1 large/main image + thumbnail strip of the rest) → Description paragraph(s) → "Kit includes:" bullet list → Quantity selector (number input, default 1) → **ADD TO CART** button (green `#007A00`, white uppercase text, futura-pt, generous padding `19.5px 52px`) → Share link → footer (FAQ/Terms + quote/copyright, site-wide).

No size/color variant pickers on any product — single SKU each, quantity-only.

#### `/shop/santa` — Santa's Magic Footprints®
- Price: $9.95
- Description: "With Santa's Magic Footprints, you'll spark your child's imagination instantly when they've discovered evidence of his arrival. Footprints are easy to place and require no more effort than placing out milk and cookies."
- Kit includes: Footprint Stencil / Package of Magic Glitter (colors may vary) / Flour Applicator / Santa "Thank You" Note / Simple Instructions
- Images (gallery order as found): `santas-workshop.jpg`, `santa-product-main.jpg` (main), `santa-package.jpg`, `glitter.jpg`, `santa-screenshot.png`, `santa-footprint-detail.jpg`

#### `/shop/elf` — Elf Footprints™
- Price: $9.95
- Description: "Imagine your children waking on Christmas morning and discovering tiny footprints throughout the living room. Containing their excitement will be a near impossibility. Kids love the magical and whimsical and these are no exception."
- Kit includes: Footprint Stencil / Package of Magic Glitter (colors may vary) / Flour Applicator / Elf "Merry Christmas" Note / Simple Instructions
- Images: `santas-workshop.jpg`, `elf-product-main.jpg` (main), `elf-package.jpg`, `elf-prints.jpg`, `glitter.jpg`, `elf-screenshot.png`

#### `/shop/reindeer` — Reindeer Magic Hoof Prints™
- Price: $8.95
- Description: "The wild laughter that ensued the very first time my son discovered that Santa's reindeer had entered out house during the night was something to be heard. The very sight of multiple reindeer parading through our living room was a great source for creativity and set my son's imagination a flame." *(sic — "out house" / "a flame" are verbatim typos in the live site; kept as-is as this is the client's existing copy — flag to the user in case they want it fixed, but don't silently correct it)*
- Kit includes: Footprint Stencil / Package of Magic Glitter (colors may vary) / Flour Applicator / Simple Instructions *(no character note card for this one)*
- Images: `santas-workshop.jpg`, `reindeer-product-main.jpg` (main), `reindeer-package.jpg`, `reindeer-hoofprints.jpg`, `glitter.jpg`, `reindeer-screenshot.png`

#### `/shop/bundle` — Footprint Bundle
- Badge: "SALE"
- Price: Sale Price $24.95 (strikethrough Original Price $28.85)
- Description: "The ultimate Christmas bundle. You'll receive all three Holiday Packages including Santa's Magic Footprints®, Elf Magic Footprints™, and Reindeer Magic Hoof Prints™."
- Kit includes: 3 Footprint Stencils (Santa, Elf, Reindeer) / 3 Packages of Magic Glitter (colors may vary) / 3 Flour Applicators / Santa & Elf Notes / Simple Instructions
- Images: `santas-workshop.jpg`, `bundle-product-main.jpg` (main), `santa-package.jpg`, `santa-footprint-detail.jpg`, `bundle-elf-package.jpg`, `elf-prints.jpg`, `reindeer-package.jpg`, `bundle-hoofprints.jpg`, `glitter.jpg`, `santa-screenshot.png`, `reindeer-screenshot.png` *(bundle reuses several single-product images plus its own unique package/hoofprints shots — see dedupe note below)*

#### `/shop/fairy` — Tooth Fairy Footprints™
- Price: $11.95
- Description: "To date, the only proof children have of the Tooth Fairy is compensation for their teeth. Not anymore. Simply place the included leaf on a flat surface and she'll be sure to walk across it to gather lost incisors, bicuspids, etc. Your child will be in awe of the small footprints she's left behind."
- Kit includes: Footprint Stencil / Package of Magic Glitter (colors may vary) / Fairy Feet Applicator / Magic Fairy Dust (Glitter) / Fairy "Thank You" Note / 1 Tooth Holder / 2 Leaf Landing Pads / Simple Instructions
- Images: `santas-workshop.jpg`, `fairy-product-main.jpg` (main), `fairy-package.jpg`, `fairy-footprint.jpg`, `fairy-tooth-print.jpeg`, `fairy-leaf.jpg`, `fairy-dust.jpeg`, `fairy-screenshot.png`

### `/about` — About
H1 "About". Body copy (verbatim):
> In a time where digital devices impede our imagination, let's pretend.
>
> When I was a young child, my parents, continuing a Christmas morning tradition started by my Grandparents, drew an outline of Santa's Magic Footprints® for us to find. Throughout our early years we would discover the footprints on our front steps, near a doorway entrance, or on the fireplace. We were spellbound! To this day at family holiday gatherings each of my brothers and sisters fondly remember their awe and amazement when they found out that Santa Claus had actually visited our house. We had proof! Many a childhood friend was proudly shown Santa's Magic Footprints® along with the toys we had received on Christmas morning.
>
> We have enhanced this memorable tradition by developing a Premium Reusable Stencil Kit that includes everything you need to create Santa's Magic Footprints®. Our kit includes a premium reusable stencil to create right and left footprints. The stencil is intricately designed with snowflakes and Santa's "Elfin Made" treadmark. An applicator to easily apply flour or carpet cleaner along with a package of "magic" glitter to accent and highlight the footprints are also included. Finally we have included a Santa "Thank You" Note Card for you to personalize for your child on Christmas morning. We at Magic Footprints, Inc. hope Santa's Magic Footprints® begins a family holiday tradition which will form lasting childhood memories for many years to come.
>
> "I'll never forget when Mom & Dad showed me Santa's Magic Footprints® on Christmas Day!"

Images: `about-family.jpg` (family/living-room photo, 500×375 — low-res source, this is the best available resolution from the CDN), `about-founder-profile.jpg` (founder portrait, 500×500).

### `/contact` — Contact
H1 "Contact". Body: "Much like Santa, writing to us via the form below is by far the fastest means of communication. You can also call our telephone number: 301-972-5555 (Please leave a message and we will call back in one business day)"

Form fields: First Name (required), Last Name (required), Email Address (required), Message (required), Send button labeled "SEND". **This is a Squarespace native form — for the rebuild it needs its own submit handler** (e.g. mailto fallback, or a simple serverless form endpoint/Formspree-style service, since there's no Squarespace backend anymore). Flag this to the user — decide where form submissions should go.

Image: `contact-letter-to-santa.jpg` (a child's letter-to-Santa photo, 1500×1125).

### `/faq` — FAQ
H1 "Frequently Asked Questions". Q&A list (verbatim):

1. **Q: What will I receive in each product?**
   A: Everything you'll need to start making memories is right inside the package. Each kit includes a footprint stencil, a package of "magic" glitter, a flour applicator, a Santa "Thank You" note, as well as easy to read instructions for applications.
2. **Q: How soon can I expect my order to ship?**
   A: All orders are shipped via USPS within the continental United States. You can anticipate your parcel to arrive within 3 to 4 days after you've placed your order.
3. **Q: How can I draw attention to the footprints?**
   A: The glitter works wonders in drawing children's eyes to the magic footprints. Also placing the personalized card, and a glass of milk and plate of cookies (bite out of the cookies, of course!) adds to your little ones Christmas morning memories!
4. **Q: How large are the stencils?**
   A: Each stencil is 12" tall, 6" Wide.
5. **Q: Are the stencils reusable?**
   A: Yes. They are made of high quality plastic and/or mylar and with proper care should last through your children's "I believe in Santa Claus" years!
6. **Q: What other materials can be used to make the prints?**
   A: You may use Flour, Carpet Deodorizer, Corn Starch, Baking Soda, or Baby Powder to make excellent footprints.
7. **Q: Can the prints be placed on carpets?**
   A: Yes, however the darker the surface, like bricks on a fireplace, driveways, front doorsteps, or wood surfaces, the more defined the prints will look.
   Be mindful ALL powder type materials can be challenging on vacuuming up depending on the quality of your vacuum cleaner, so we DO NOT recommend placing on carpet.
   Vacuuming tips: For the glitter, sprinkle it with a bit of baby powder or baking soda to help minimize the static of the glitter making vacuuming easier.

No images on this page besides logo/nav.

### `/terms-conditions` — Terms & Conditions
H1 "Terms & Conditions". Full body copy (sections, verbatim):

> This page contains the terms & conditions. Please read these terms & conditions carefully before ordering any products from us. You should understand that by ordering any of our products, you agree to be bound by these terms & conditions.
>
> By placing an order at Santa's Magic Footprints, you warrant that you are at least 18 years old (or have parents' permission to buy from us) and accept these terms & conditions which shall apply to all orders placed or to be placed at Santa's Magic Footprints for the sale and supply of any products. None of these terms & conditions affect your statutory rights. No other terms or changes to the terms & conditions shall be binding unless agreed in writing signed by us.
>
> **Personal Information**
>
> All personal information you provide us with or that we obtain will be handled by Santa's Magic Footprints as responsible for the personal information. The personal information you provide will be used to ensure deliveries to you, the credit assessment, to provide offers and information on our catalog to you. The information you provide is only available to Santa's Magic Footprints and will not be shared with other third parties. You have the right to inspect the information held about you. You always have the right to request Santa's Magic Footprints to delete or correct the information held about you. By accepting the Santa's Magic Footprints Conditions, you agree to the above.
>
> **Force Majeure**
>
> Events outside Santa's Magic Footprints's control, which is not reasonably foreseeable, shall be considered force majeure, meaning that Santa's Magic Footprints is released from Santa's Magic Footprints's obligations to fulfill contractual agreements. Example of such events are government action or omission, new or amended legislation, conflict, embargo, fire or flood, sabotage, accident, war, natural disasters, strikes or lack of delivery from suppliers. The force majeure also includes government decisions that affect the market negatively and products, for example, restrictions, warnings, ban, etc.
>
> **Payment**
>
> All products remain Santa's Magic Footprints's property until full payment is made. The price applicable is that set at the date on which you place your order. Shipping costs and payment fees are recognized before confirming the purchase. If you are under 18 years old you must have parents' permission to buy from Santa's Magic Footprints.
>
> All transfers conducted through Santa's Magic Footprints are handled and transacted through third party dedicated gateways to guarantee your protection. Card information is not stored and all card information is handled over SSL encryption. Please read the terms & conditions for the payment gateway choosen for the transaction as they are responsible for the transactions made.
>
> **LOCAL TAXES**
>
> Please note that local charges (sales tax, customs duty) may occur, depending on your region and local customs duties. These charges are at the customers own expense.
>
> **Cookies**
>
> Santa's Magic Footprints uses cookies according to the new Electronic Communications Act, which came into force on 25 July 2003. A cookie is a small text file stored on your computer that contains information that helps the website to identify and track the visitor. Cookies do no harm to your computer, consist only of text, can not contain viruses and occupies virtually no space on your hard drive. There are two types of cookies: "Session Cookies" and cookies that are saved permanently on your computer.
>
> The first type of cookie commonly used is "Session Cookies". During the time you visit the website, our web server assigns your browser a unique identifier string so as not to confuse you with other visitors. A "Session Cookie" is never stored permanently on your computer and disappears when you close your browser. To use Santa's Magic Footprints without troubles you need to have cookies enabled.
>
> The second type of cookie saves a file permanently on your computer. This type of cookie is used to track how visitors move around on the website. This is only used to offer visitors better services and support. The text files can be deleted. On Santa's Magic Footprints we use this type of cookie to keep track of your shopping cart and to keep statistics of our visitors. The information stored on your computer is only a unique number, without any connection to personal information.
>
> **Additional Information**
>
> Santa's Magic Footprints reserves the right to amend any information, including but not limited to prices, technical specifications, terms of purchase and product offerings without prior notice. At the event of when a product is sold out, Santa's Magic Footprints has the right to cancel the order and refund any amount paid in the best way. Santa's Magic Footprints shall also notify the customer of equivalent replacement products if available.
>
> **RETURN POLICY**
>
> You are entitled to an exchange or refund within 14 days of your purchase. Please note that the product must be returned unused, in original packaging including all tags. Returns cannot be made once holidays specific to purchased products have passed. In case of refund neither the original shipping cost nor the return shipping cost will be repaid. You can find the return address under santasfootprints.com/contact

No images on this page besides logo/nav.

## Interactive elements to replicate in JS
- **Mobile nav toggle**: hamburger icon opens a slide-out panel with the same 4 links; close icon (`#canvas`) closes it.
- **Product image gallery**: main image + thumbnail strip, clicking a thumbnail swaps the main image (standard lightbox/gallery behavior — no autoplay carousel observed).
- **Quantity stepper**: plain number input, default value 1, min 1.
- **Add to Cart**: in the original this hits Squarespace's commerce backend. **For the Stripe rebuild**, this button needs to be wired to Stripe (Checkout Session / Payment Link per product, or a cart + Stripe Checkout flow) — this is a decision point for whoever builds the checkout logic, not something to fake client-side.
- **Contact form**: needs a real submit handler (see `/contact` notes above).

## Image dedupe notes
Several images are reused byte-for-byte across product pages (same JPEG, same Squarespace content hash family). To avoid storing duplicate binaries, the following were saved **once** under a shared filename and should be referenced from every page that uses them:
- `santas-workshop.jpg` — used as the gallery/banner "workshop" shot on the shop index and all 5 product pages.
- `glitter.jpg` — the glitter close-up shot, identical across Santa/Elf/Reindeer/Bundle product pages.
- `santa-package.jpg`, `santa-footprint-detail.jpg`, `reindeer-package.jpg`, `elf-prints.jpg`, `santa-screenshot.png`, `reindeer-screenshot.png` — each also reused as-is on the Bundle page gallery (Bundle shows: its own `bundle-product-main.jpg`, `bundle-elf-package.jpg`, and `bundle-hoofprints.jpg`, plus the six shared files just listed).

All 35 deduplicated image files live in `/Users/martinhayward/Documents/Claude/Magic_Footprints/assets/images/`.

## Prices summary
| Product | Price | Notes |
|---|---|---|
| Santa's Magic Footprints® | $9.95 | |
| Elf Footprints™ | $9.95 | |
| Reindeer Magic Hoof Prints™ | $8.95 | |
| Tooth Fairy Footprints™ | $11.95 | only on shop page, not homepage |
| Footprint Bundle | $24.95 (sale) / $28.85 (original) | "SALE" badge |
