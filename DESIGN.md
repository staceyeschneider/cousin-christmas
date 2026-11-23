---
name: Cousin Christmas 2026 — Cousins Home Alone
description: A 90s family-movie poster homage; the grandparents' house at night with every window lit, a VCR countdown, a kid-drawn blueprint plan, a CRT for game night, and past years as tapes on a shelf.
colors:
  night: "#0c1530"
  night-2: "#172453"
  night-text: "#c9d1e6"
  snow: "#f5f7fb"
  snow-cool: "#e8edf5"
  ink: "#121a33"
  ink-soft: "#3d4766"
  red: "#d42a2f"
  red-deep: "#9e1a1f"
  gold: "#ffcb4f"
  gold-deep: "#e0a21f"
  green: "#1f7a4a"
  blueprint: "#1f4f99"
  blueprint-deep: "#183f7c"
  vcr: "#0a0b12"
  led: "#7df9c6"
  wall: "#2a3b6e"
  wall-dark: "#1d2a52"
  roof: "#5a1f24"
  case: "#34343f"
typography:
  display:
    fontFamily: "'Bowlby One', 'Arial Black', sans-serif"
    fontSize: "clamp(3.6rem, 9.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bowlby One', 'Arial Black', sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
  hand:
    fontFamily: "'Permanent Marker', 'Marker Felt', cursive"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.16em"
  billing:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  screen: "6px"
  box: "8px"
  plate: "10px"
  case: "26px"
  pill: "999px"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.5rem"
  4: "2.5rem"
  5: "4rem"
  6: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.snow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-secondary:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  vcr-display:
    backgroundColor: "{colors.vcr}"
    textColor: "{colors.led}"
    rounded: "{rounded.plate}"
    padding: "0.9rem 1.1rem 1rem"
  plan-box:
    backgroundColor: "{colors.blueprint-deep}"
    textColor: "{colors.snow}"
    rounded: "{rounded.box}"
    padding: "1.75rem"
  tape:
    backgroundColor: "{colors.vcr}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: "0.55rem 0.9rem"
---

# Design System: Cousin Christmas 2026 — Cousins Home Alone

Source of truth: `assets/css/2026.css` (used only by `index.html`). The 2022–2025 archive pages keep `assets/css/style.css` and are outside this system. `assets/css/cabin.css` (Cabin Christmas) is kept on disk but not linked.

## Overview

An affectionate homage to a 90s family holiday movie: Nana and Papa Jack are "out of town," so the cousins have the house. The hero is an original one-sheet: big extruded title "Cousins / Home Alone," an italic tagline, a VCR display counting down to the Wednesday noon slumber party, a hand-drawn suburban house at night whose windows switch on one by one, snow falling, and a condensed billing block that credits the cousins. Below, the movie conceit carries every section: The Setup (synopsis plus a still), The Plan as a kid-drawn blueprint with checkboxes, Wardrobe (the PJ code), Filming Location, Now Playing (Jackbox on a CRT), Starring (cast), The Menu as a ticket stub, Last Year's Carnage (polaroids), and The Prequels as VHS tapes on a shelf.

Homage only: all artwork is original SVG/CSS; no stills, posters, logos or the film's title lettering. Nods stay clean and non-violent.

## Colors

### Primary
- **Night** `#0c1530` → `#172453`: the poster sky, Now Playing, gallery, topbar, footer.
- **Snow** `#f5f7fb` / **Snow Cool** `#e8edf5`: billing block and the reading sections.

### Secondary
- **Gold** `#ffcb4f`: lit windows, the title, accents on dark. **Red** `#d42a2f` / **Red Deep** `#9e1a1f`: title extrusion, primary buttons, the PJ section, the ticket band, sub labels on snow.

### Tertiary
- **Blueprint** `#1f4f99` with a 28px white grid: The Plan only. **LED** `#7df9c6` on **VCR** `#0a0b12`: countdown and CRT bullets only. House paints (wall, roof, green wreath) live in the hero art and the tape year colours.

### Neutral
- **Ink** `#121a33`, **Ink Soft** `#3d4766` on snow; **Night Text** `#c9d1e6` for secondary copy on night.

### Named Rules
- **Lights on:** gold means a lit window or the thing to look at; it is never body text on snow.
- **One prop per section:** each section gets one movie-world object (VCR, blueprint, CRT, ticket, tape shelf); the rest is plain type on its ground.

## Typography

- **Bowlby One** (self-hosted, `assets/fonts/bowlby-one-400.woff2`): poster display. Uppercase H1 and section heads; the title gets a red layered extrusion with a soft drop.
- **Archivo** variable, width 62–125 (self-hosted, `assets/fonts/archivo-var.woff2`): body at normal width; condensed (62–75%) for the billing block, labels, VCR digits and tape labels.
- **Permanent Marker** (self-hosted, `assets/fonts/permanent-marker-400.woff2`): the cousins' handwriting on the blueprint, captions, rule numbers, the ticket note.

### Named Rules
- **No eyebrows:** the tagline and every sub label sit below their heading.

## Layout

`.wrap` max 1160px. Sections alternate night, snow, blueprint and red at 6rem vertical padding (4rem under 820px). Hero: title column left (no logo; the nav carries it), VCR plus house right, billing block across the bottom behind a snow-drift edge. Plan: two day boxes (Wednesday slumber party, Thursday Christmas Eve potluck) side by side across the full width, Thursday stepped one rung lower like a timeline; they stack under 820px. Breakpoints: 1000px (cast 4-up, gallery 3-up), 820px (single column, nav scrolls), 520px (cast and gallery 2-up, compact VCR and TV).

## Elevation & Depth

Paper and photos use an offset soft drop (`0 18px 32px -14px`). The TV and VCR are objects with deep drops and an inset top highlight. Lit windows carry a gold drop-shadow glow as light, not decoration.

## Components

- **Buttons:** red pill (primary), snow pill (secondary, gold on hover).
- **Navigation:** sticky night topbar; the CC logo sits on a snow plaque with a light border so it stays readable. This is the only place the logo appears (no second copy in the hero). Nav links are at least 44px tall.
- **Signature: The House at Night:** original SVG house; upstairs and attic windows switch on in sequence on load (reduced motion: already lit). Roofline bulbs in red, gold, green, blue.
- **VCR countdown:** "Play" indicator, "Slumber party starts in," condensed LED digits with a blinking colon, gold date line.
- **Billing block:** condensed uppercase credits with bold cousin names and a red date line.
- **Blueprint plan boxes:** dashed white outline, marker day names, checkbox stops; the key stops (Wednesday noon doors open, Thursday 2 PM potluck) get a filled gold box and gold display title.
- **CRT:** case with knobs, rounded screen with Jackbox titles behind LED play-arrows.
- **Ticket:** red band header, perforation, notched sides (CSS mask).
- **Tapes:** black cassette spines with a coloured year block and a label; hover slides the tape out.

## Do's and Don'ts

### Do:
- Keep the homage original and kid-safe; jokes over props.
- Respect `prefers-reduced-motion` (snow, window lights, blink, hover motion off).
- Keep the cousin portraits, logo plaque, countdown, PJ code, gallery and archive links.
- Proofread: only names, dates, the address and archive titles repeat.

### Don't:
- Don't use movie stills, posters, logos or the film's title typography.
- Don't depict traps, injuries or anything violent.
- Don't invent house features or list game equipment the house may not have.
- Don't bring back the cabin or key-tag looks, or restyle the archive pages.
