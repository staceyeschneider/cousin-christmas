---
name: Cousin Christmas 2026 — Cabin Christmas
description: A North Georgia trailhead at night; every section is a routed-wood sign pointing to the weekend.
colors:
  night: "#0d1726"
  night-2: "#132238"
  ridge-far: "#22395a"
  ridge-mid: "#182c47"
  ridge-near: "#0e1c2e"
  snow: "#eef1f2"
  walnut: "#3a2315"
  walnut-2: "#4b2f1d"
  walnut-deep: "#23140b"
  cream: "#f3e5c5"
  cream-dim: "#d9c49c"
  ink: "#2a1a10"
  ink-soft: "#5c4332"
  blaze: "#ff8a3d"
  blaze-deep: "#a33d14"
  ember: "#ffc36b"
  flannel: "#b0262a"
  flannel-dark: "#170f0c"
  pine: "#2e5b44"
typography:
  display:
    fontFamily: "Ultra, 'Rockwell Extra Bold', Rockwell, serif"
    fontSize: "clamp(3.4rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Ultra, 'Rockwell Extra Bold', Rockwell, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
  sign:
    fontFamily: "Ultra, 'Rockwell Extra Bold', Rockwell, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Overpass, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Overpass, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  board: "6px"
  plate: "10px"
  patch: "28px"
  pill: "999px"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.5rem"
  4: "2.5rem"
  5: "4rem"
  6: "6rem"
components:
  button-plank:
    backgroundColor: "{colors.blaze}"
    textColor: "{colors.walnut-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.board}"
    padding: "0.85rem 1.4rem"
  button-plank-hover:
    backgroundColor: "{colors.ember}"
  button-plank-alt:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.walnut-deep}"
  sign-arrow:
    backgroundColor: "{colors.walnut-2}"
    textColor: "{colors.cream}"
    typography: "{typography.sign}"
    rounded: "{rounded.board}"
    padding: "0.85rem 2.4rem"
  sign-arrow-hover:
    backgroundColor: "{colors.blaze-deep}"
  nameplate:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.walnut-deep}"
    typography: "{typography.sign}"
    rounded: "4px"
    padding: "0.35rem 0.9rem"
  pj-stitch:
    backgroundColor: "#efe0bd"
    textColor: "{colors.walnut-deep}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem"
---

# Design System: Cousin Christmas 2026 — Cabin Christmas

Source of truth: `assets/css/cabin.css` (used only by `index.html`). The 2022–2025 archive pages keep `assets/css/style.css` and are outside this system.

## Overview

The page is a trailhead in the North Georgia mountains on a snowy night. Routed Forest Service–style wood signs carry everything: the countdown reads like trail mileage to Harper's Hideaway, the hero navigation is a signpost of arrow boards, and the archives close the page as a signpost pointing back down the trail to 2022. Between the signs, the world shifts material by section: night sky with ridgelines and snow, a stained-walnut plank wall, buffalo-check flannel for the PJ rule, a string of Christmas lights over the game room.

It is built for teens on phones: loud headline type, jokes left intact, real faces (the cousin portraits) and real photos, no lodge-brochure restraint. Dark ground because it is read in the evening, in bed, from a group-chat link.

## Colors

### Primary
- **Walnut** `#3a2315` / **Walnut 2** `#4b2f1d` / **Walnut Deep** `#23140b`: the owned stain. Grounds whole sections and every sign board, always with the fractal wood-grain overlay.
- **Cream** `#f3e5c5`: routed lettering on wood; paper for notices, nameplates, the PJ patch.

### Secondary
- **Night** `#0d1726` → `#132238`, ridges `#22395a` / `#182c47` / `#0e1c2e`, **Snow** `#eef1f2`: the sky sections (hero, The Plan, Free Play, gallery).

### Tertiary
- **Blaze** `#ff8a3d`: trail-blaze marks, arrow heads, primary buttons. **Blaze Deep** `#a33d14`: hover state of arrow signs, the Game Room board. **Ember** `#ffc36b`: countdown numerals and day labels. **Flannel** `#b0262a` with `#170f0c` checks: dress code only. **Pine** `#2e5b44`: the address plate only.

### Neutral
- **Cream Dim** `#d9c49c` for secondary text on wood or night (≥7:1). **Ink** `#2a1a10` / **Ink Soft** `#5c4332` on paper.

### Named Rules
- **The Blaze Rule:** state and wayfinding are marks (blaze rectangles, dotted trail line), not new hues.
- **Stain at page scale:** walnut owns whole sections; it is never reduced to an accent.

## Typography

- **Ultra** (self-hosted, `assets/fonts/ultra-400.woff2`): wood-type slab for H1, section signs, sign boards, nameplates, menu dishes.
- **Overpass** variable (self-hosted, `assets/fonts/overpass-var.woff2`): highway-gothic sign text for body, 800-weight uppercase tracked labels.

### Hierarchy
H1 `clamp(3.4rem, 9vw, 6rem)` / 0.92; section heads `clamp(2.4rem, 6vw, 4.25rem)` with a routed text-shadow; board titles 1.2–2.75rem; body 1.0625rem / 1.6; labels 0.82rem uppercase 0.14em.

### Named Rules
- **No eyebrows:** labels sit below headings as a blaze-marked sign sub, never above.

## Layout

`.wrap` max 1160px. Sections alternate grounds (night / wood / flannel) at 6rem vertical padding (4rem under 820px). Compositions are deliberately uneven: the Sunday board drops lower than Saturday, play boards hang at different heights and angles, cast portraits stagger, gallery photos are pinned at small rotations. Breakpoints: 1000px (cast 4-up, gallery 3-up), 820px (single column, topbar links scroll), 520px (cast and gallery 2-up).

## Elevation & Depth

Boards cast a soft offset shadow (`0 10px 24px -8px rgba(0,0,0,.65)`) with an inset top highlight and bottom lip to read as thick wood. Paper and photos use a longer drop (`0 18px 30px -12px`). Nail heads and push pins are small radial-gradient dots.

## Shapes

Boards 6px corners; arrow signs are a 5-point clip-path; address plate 10px with a double inset border; PJ patch 28px with a dashed stitch outline; stitches are pills.

## Components

### Buttons
Plank buttons: blaze or cream fill, walnut-deep text, 800 weight, lift 2px on hover.

### Navigation
Sticky walnut topbar with logo and section links. Hero signpost: countdown board plus four arrow boards (right/left alternating) that are the primary in-page navigation; hover turns the board blaze-deep and straightens it.

### Signature: Trailhead Signpost
A post with nailed boards; boards swing once on load (reduced motion: static). Reused for the archives.

### Cards / Containers
Day boards (Saturday/Sunday trail lists with a dotted blaze line), the tacked notice, the chalk-dark menu board in a wood frame, framed cast portraits with nameplates, pinned polaroids.

## Do's and Don'ts

### Do:
- Keep every sign readable as text and every arrow as a link.
- Respect `prefers-reduced-motion` (snow, sign swing, twinkle off).
- Keep the cousin portraits, logo, countdown, PJ code, gallery, and archive links.

### Don't:
- Don't add eyebrows above headings or same-size icon card rows.
- Don't invent cabin photos or features.
- Don't restyle the archive pages through this stylesheet.
