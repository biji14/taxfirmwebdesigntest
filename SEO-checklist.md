# SEO Checklist — Kanzlei Dr. Dr. Hausmann

Practical guide to improving Google visibility for a Berlin tax-law firm.
On-page technical SEO is already handled in the site itself (titles, meta
descriptions, canonical URLs, hreflang for DE/EN/FR/RU, Open Graph,
JSON-LD `LegalService`, sitemap, favicon, image dimensions). The items
below are the remaining levers — most of them live **outside** the code
and matter more for a local law firm than anything on the page.

Priority order: do **1 → 2 → 3** first. They are where the ranking actually
comes from for a local Kanzlei.

---

## 1. Measurement (do this first — you're blind without it)

- [ ] **Google Search Console** — https://search.google.com/search-console
  - Add property `kanzlei-hausmann.berlin` (Domain property, verify via DNS TXT record).
  - Submit the sitemap: `https://kanzlei-hausmann.berlin/sitemap.xml`
  - Use **URL Inspection → Request Indexing** on the homepage and on `/en/`, `/fr/`, `/ru/`.
  - Check **Indexing → Pages** after ~1 week: all four language URLs should be indexed.
  - Check **International Targeting** for hreflang errors.
- [ ] **Bing Webmaster Tools** — https://www.bing.com/webmasters (import from Search Console in one click; adds Bing/DuckDuckGo reach).

---

## 2. Google Business Profile — the single biggest local lever

A verified Business Profile is what puts the firm in the Google Map Pack and
the right-hand business panel. For a local Kanzlei this outranks almost any
on-page change.

- [ ] Create/claim at https://business.google.com
- [ ] Business name: **Kanzlei Dr. Dr. Hausmann** (exactly as on the website)
- [ ] Primary category: **Rechtsanwalt** — add secondary: **Steuerberater**
- [ ] Address: **Bundesallee 91, 12161 Berlin** (must match the website & Impressum exactly, character for character)
- [ ] Phone: **+49 30 / 85 99 40-0** (same format everywhere)
- [ ] Website: `https://kanzlei-hausmann.berlin`
- [ ] Hours: **Mo–Fr 09:00–18:00** (matches the site)
- [ ] Add photos: the office exterior/interior, and the profile portrait already on the site
- [ ] Write the "from the business" description using the same keywords as the site (Steuerberatung, Steuerrecht, Steuerstrafrecht, Steuergestaltung, Berlin)
- [ ] Complete verification (postcard/phone/video as Google offers)

> **NAP consistency** — Name / Address / Phone must be *identical* on the
> website, the Business Profile, and every directory below. Inconsistent
> address formatting is a common reason local rankings stall.

---

## 3. Reviews

- [ ] Ask satisfied Mandanten to leave a **Google review** (the profile from step 2 generates a shareable review link).
- [ ] Aim for a steady trickle rather than a burst — recency and volume both count.
- [ ] Respond to every review, positive or negative, professionally.

---

## 4. Local citations / directory listings

Consistent listings on trusted German directories build local authority.
Use the **exact same NAP** each time.

- [ ] **Rechtsanwaltskammer Berlin** member directory (already the supervisory body per the Impressum)
- [ ] **anwalt.de** and/or **anwaltauskunft.de** profile
- [ ] **DATEV Berater-Suche** (the firm already works with DATEV — get listed)
- [ ] **11880.com**, **Gelbe Seiten**, **Das Örtliche**
- [ ] **Apple Maps / Bing Places** business listings

---

## 5. Backlinks

- [ ] Ensure the RAK Berlin and DATEV listings link back to the website.
- [ ] Local Berlin business associations / Chamber (IHK) listings.
- [ ] Any professional publications or guest articles by Dr. Hausmann (the bio mentions he authored articles in legal journals — link those where possible).

---

## 6. Content follow-ups (optional, medium term)

- [ ] Consider a small **Aktuelles / Blog** section with short posts on tax-law topics (Betriebsprüfung, Selbstanzeige, Steuergestaltung). Fresh, keyword-relevant content is the main way to rank for informational searches beyond the firm's name.
- [ ] Add an **FAQ** section with `FAQPage` structured data — can earn rich results in Google.
- [ ] If the firm gains social profiles (LinkedIn etc.), add their URLs to the empty `sameAs: []` array in the JSON-LD on each page.

---

## 7. Technical follow-up to decide on: self-host the fonts (DSGVO + speed)

The site currently loads **Google Fonts** from `fonts.googleapis.com`. Two
reasons to consider self-hosting them instead (serving the font files from
the firm's own domain):

1. **DSGVO / legal.** German courts have treated hotlinking Google Fonts as
   sending the visitor's IP to Google without consent (a basis for
   *Abmahnung*). For a **law firm** this is worth taking seriously — and the
   Datenschutzerklärung currently discloses Google Web Fonts usage, which
   self-hosting would let you remove.
2. **Speed.** Self-hosted fonts remove a third-party connection and can load
   a touch faster.

Not done automatically because the site serves four languages including
**Russian (Cyrillic)**, and self-hosting must include the Cyrillic glyph
subsets for Playfair Display and Inter or the Russian page breaks. It needs
careful setup and testing. Recommended as a deliberate next step — ask the
developer to self-host the two font families with Latin **and** Cyrillic
subsets, then drop the Google Fonts `<link>` and the Google Web Fonts
paragraph from the Datenschutzerklärung.

---

_Last updated: 2026-07-16_
