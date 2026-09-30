# Portfolio design guide

Research and first-build direction · 30 September 2026

## Purpose and authority

Help a hiring manager identify Lucas Sasaya’s work, individual contributions, technical experience, education, and contact details. The website is a working first version for review. Building it does not make every layout choice an approved design decision.

**Approved:** one page; GitHub Pages; blue and sand; original résumé/project wording; direct project links; education, employment, HSF, and music; personal photography. No internal case-study pages. No résumé download until requested. No README.

**Implementation proposals:** section order below, wide project rows, modest images, static HTML/CSS, spacing, and type sizes. These can change after review. Font selection remains with Lucas; use only Google Fonts or verified open-source fonts, backed by a named developer’s use or recommendation.

The approved copy lives in `index.html`. Do not maintain a second slightly different version here. Research observations live below; they are not user approvals.

## What the research supports

1. **Make contribution and evidence easy to find.** NN/g’s portfolio research asks for role, decisions, constraints, and outcomes, not just attractive screenshots. Its participants were UX hiring professionals, so applying it to software hiring is a reasoned adaptation, not a measured software-hiring result. Here, retain the substantive résumé bullets and add direct project links. [1]
2. **Make long content scannable.** Descriptive headings and consistent grouping support selective reading. Use project names, dates, technologies, and visible bullets. Do not hide the core work in accordions, hover states, or slides. This supports keeping the full HSF content without turning it into a wall of text. [2,3]
3. **Use factual language.** The older web-reading study supports concise, objective writing over promotional prose. It does not justify cutting meaningful details. Keep Lucas’s wording, metrics, mentorship, tests, and methods. [2]
4. **Design around reading conditions.** Contrast, reflow, and usable targets are testable requirements. Pale “muted” text and tiny metadata can fail even when a screenshot looks elegant. [4–6]
5. **Treat images as a performance choice.** Set dimensions, serve appropriate sizes, and defer below-fold images. Do not lazy-load an initial visible image. Good performance thresholds require field measurements; a local preview cannot prove them. [7,8]

No source establishes a single highest-converting portfolio style, a universal recruiter attention span, or a reliable ranking of “AI fonts.” We should not present those as facts.

## Reference sites inspected

These observations describe the sites during this review. They are design references, not templates to copy or evidence of hiring outcomes.

| Reference | Useful pattern | Application and limit |
| --- | --- | --- |
| [Brittany Chiang](https://brittanychiang.com/) | Persistent identity/navigation on desktop; dated entries; clear project links and technologies. | Reuse consistent entry structure. Avoid copying the familiar dark split-screen composition, Inter font, or lengthy opening biography. A first capture preceded the entrance animation; do not mistake that for a permanently blank site. |
| [Rachel Andrew](https://rachelandrew.co.uk/) | Clear navigation, constrained paragraph width, ordinary underlined links. | Use readable widths and explicit destinations. Her archive needs more navigation than our one-page portfolio. Archivo is a verified body-font reference, not an approved choice. |
| [Sara Joy](https://www.sarajoy.dev/) | Distinctive personal illustration and typography. | Our own photographs and Mawfi artwork can establish identity. Her large illustrated opening is not the right allocation of space for this project-first brief. Karla is a verified font reference. |
| [Josh W. Comeau](https://www.joshwcomeau.com/) | At mobile width, article titles and summaries form a clear reading sequence. | Use strong headings and separate metadata. His teaching/blog structure and commercial Wotfard font do not transfer directly. |
| [Samantha Ming](https://www.samanthaming.com/) | Personal introduction and a clear collection of work. | Nunito in her intro is another actual-use reference; it is not the font of every part of her site. |

Desktop and mobile captures were used where available. Bruno Simon’s initial capture did not expose the interactive experience, so it is excluded from visual conclusions rather than rated from an incomplete load.

## Page structure

1. **Opening:** Lucas Sasaya; Duke University; B.S. Computer Science; May 2027; brief approved introduction; email, GitHub, LinkedIn. Keep the opening compact enough that Projects begins nearby.
2. **Projects:** Mawfi, Total Throughput, LearningKan, I-JAS. All substantive copy visible. These show product work, education, AI-assisted development with verification, and research.
3. **Experience:** photography, Ma’ayan Laboratory, Duke Ignite. Preserve contribution-level statements and original scope.
4. **Leadership:** HSF scholar selection plus all four conference/mentorship entries. Mentor-in-Training comes first. Do not delete mentorship or professional-development details for visual symmetry.
5. **Music:** principal cello, chamber music, solo repertoire, performance/event/section figures, and cello portrait.
Contact details appear only under the introduction: full email address, GitHub, and LinkedIn. No separate Contact section or form.

Start directly with the introduction. No top header, logo, or navigation menu; use natural scrolling and clear section headings. Education belongs near the name instead of becoming another sparse section.

On wide screens, a small left-side section navigation floats over the page without changing content width or margins. Its arrow is available even at the top. Scrolling opens the links; after two seconds without scrolling they collapse, unless the pointer or keyboard focus is using the navigation. Projects, Experience, Leadership, and Music have visible labels beside outlined dots; the current section uses a filled dot and stronger label. A left arrow collapses the links; a right arrow restores them. Scrolling does not undo an explicit collapse. Keep the full label clickable and underline on hover or keyboard focus. Hide this navigation at 700px and below. Keep the arrow in a fixed position as the panel expands; use a semi-transparent background and a short reversible fade-and-slide animation.

## Layout and hierarchy

- Use a centered content width around 1120px with 24px mobile gutters and larger desktop gutters.
- Desktop project rows place title/metadata beside a reading column. Evidence sits next to its corresponding text. Mobile stacks those elements in the same reading order.
- Use section rules, space, and typography to organize the page. Avoid enclosing every paragraph in a rounded card.
- Preserve natural project length. Do not cut a bullet to make equal-height tiles.
- Use roughly 55–75 characters per prose line where space permits. This is a design target, not a WCAG requirement.
- Start body text at 18px with about 1.55 line height. Keep metadata at least 14px. Use relative units so browser font settings remain useful.
- Name is the largest text. Section headings, project titles, dates, technologies, and body text must have distinct roles.
- Titles precede dates throughout Projects, Experience, Leadership, and Music. Dates sit directly below the corresponding title; supporting roles and technologies follow. Use a consistent metadata size.
- The introductory email, GitHub, and LinkedIn links share one size and weight.
- Links use blue underlined text without arrow icons. Omit project status badges, the “Software & research” label, and the introductory photo caption.
- Use ordinary document scrolling. No scroll hijacking, entrance gates, custom cursor, autoplay, or essential content dependent on animation.
- A short single page can still be long vertically. Predictable grouping and clear section headings make it easier to scan without deleting the approved material.

## Colour

| Token | Value | Role |
| --- | --- | --- |
| Blue | `#3C5E8B` | Links, headings, small accents |
| Sand | `#E7D5B3` | Limited background accents |
| Paper | `#EBEDE9` | Main background |
| Ink | `#202E37` | Body text |
| Muted ink | `#394A50` | Metadata and captions |
| Rule | `#C7CFCC` | Decorative separators |

Blue and sand are the approved direction. Supporting values are implementation tokens. Use ink on sand. Do not use sand as body text on paper. Decorative rules are not substitutes for control boundaries or focus indicators. Underline links rather than relying only on colour.

## Photography and project evidence

- Use the plane photograph as a modest image near the introduction, keeping its full composition. It adds the user's photography without displacing the work.
- Use the cello portrait with Music. Do not imply Lucas photographed his own portrait or invent its photographer/location.
- Show real Mawfi and LearningKan screenshots without visible captions. Preserve their native proportions and colours; do not redraw their interfaces to match this site.
- Mawfi uses all nine supplied App Store images in numbered order. LearningKan uses all five demo screenshots in numbered order. Keep each drawer in one row; allow horizontal scrolling on narrow screens instead of wrapping the stack.
- Project screenshots overlap slightly and stay upright. Hover lifts an image without zooming while neighbors slide sideways. A pointer cursor indicates click-to-open: click, tap, or keyboard activation opens an image-only modal. An X, Escape, or clicking the dimmed backdrop closes it and restores focus. Clicking the image keeps it open. Touch devices show separated thumbnails; reduced-motion disables hover animation.
- LearningKan screenshots are from the personal fork with synthetic demo data. Label them as demo screenshots; the accepted course-project test count remains 154, not the fork’s 158.
- Total Throughput may use a real public-site screenshot. Never create fake analytics, user counts, charts, or results as decoration.
- Do not substitute unrelated landscape photography for evidence of a project.
- Leave the HSF attachments out until their contents and event captions have been inspected. Do not infer conference identity from filenames.
- Keep source assets intact. Web exports may be resized/compressed and stripped of metadata. The plane image currently comes from the earlier embedded preview because its SSD source is unavailable.

## Content rules

- Preserve approved wording. Any suggested rewrite must be shown to Lucas before replacing it.
- Keep “planned course of 150+ students”; do not claim 150 active users.
- Keep the I-JAS corpus name, manual cleaning, measurement, ANCOVA and Mann–Whitney U tests, and significance. Association is not causation.
- Keep both Mawfi bullets, including original art and playtesting.
- Keep LearningKan testing and manual validation alongside AI-assisted development.
- Git dates establish recorded development activity. They do not establish launch, completion, or ongoing maintenance by themselves.
- LearningKan has no public link. Do not expose its course repository or display a disabled fake link.
- No invented awards, availability statements, expertise ratings, skill percentage bars, testimonials, or résumé button.

## Accessibility and performance

- Semantic main/section/article/footer and entry headers; one h1; ordered heading levels; a visible-on-focus skip link.
- Text contrast at least 4.5:1 for normal text and 3:1 for qualifying large text. Check actual rendered combinations. [4]
- Keyboard-visible focus; no essential hover-only content. Navigation and project links should have generous hit areas; aim for 44px height, above the 24px WCAG minimum and its exceptions. [6]
- Reflow at 320 CSS pixels without horizontal page scrolling or missing content. Also inspect 200% text enlargement. [5]
- Meaningful alt text for content images; retain demo provenance in this guide. Keep research findings in HTML, not only screenshots.
- No required animation. Respect reduced-motion preferences if motion is added later.
- Local design budgets: HTML+CSS below 80KB uncompressed; initial image below 200KB; no client JavaScript required for core content. These are project budgets, not standards.
- Long-term targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile. Local inspection is not field validation. [8]

## Implementation and review

Use static HTML and CSS with a small JavaScript image dialog. GitHub Pages serves these directly; this site does not need a framework, database, or server function. Relative asset URLs support both account and project Pages URLs. [9]

Run `python3 build.py`, then `python3 -m http.server 4173 --directory dist --bind 127.0.0.1`. The build stages only public files into `dist`; internal guidelines and unused originals stay out. No README is needed. Publishing requires choosing the repository and Pages source; this pass creates a local review build, not a public deployment.

Before calling the build ready: verify all approved sections and metrics; inspect 320, 390, 768, and 1440px widths; test keyboard navigation and anchor links; check missing assets and duplicate IDs; confirm images have dimensions and text alternatives; verify direct link destinations; inspect screenshot proportions; and disclose checks that remain unperformed.

Font choice and final visual approval remain open until explicitly answered. Do not convert a provisional implementation choice into an approved decision.

### First-build verification

- Static build succeeds. Public output is approximately 404KB, including all seven displayed images. HTML and CSS total approximately 20KB.
- Chromium layout checks pass at 320, 390, 768, and 1440 CSS pixels without horizontal overflow. A 200% text-enlargement check found wrapping issues, corrected in the build.
- Keyboard Tab exposes the skip link; Enter moves focus to main. Section anchors reach the corresponding content. Images, IDs, local asset paths, and anchor targets were checked.
- Blue/paper contrast is 5.63:1; ink/paper 11.82:1; muted ink/paper 7.85:1; ink/sand 9.66:1.
- Mawfi, Total Throughput, and both public project repositories returned HTTP 200. LinkedIn account access and mail delivery were not tested.
- Core content is static; hover movement uses CSS and click-to-enlarge uses a native dialog with JavaScript. Safari, Firefox, screen-reader testing, real mobile hardware, and field Web Vitals remain unverified. This is not a full accessibility conformance audit.
- No font family has been selected or embedded. The preview currently uses the browser fallback while Lucas’s font question is pending; this is not a recommended or approved typeface.
- No public deployment was performed.

## Sources

Read 30 September 2026 using gstack browse. Normative thresholds are distinguished above from our design judgments.

1. [NN/g: 5 Steps to Creating a UX-Design Portfolio](https://www.nngroup.com/articles/ux-design-portfolios/) — 2019; survey of 204 UX hiring professionals, not software-hiring conversion research.
2. [NN/g: How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) — 1997; foundational, older usability evidence, not a current recruiter timing study.
3. [NN/g: Layer-Cake Pattern of Scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/) — headings, grouping, and selective reading.
4. [W3C: Understanding Contrast (Minimum)](https://w3c.github.io/wcag/understanding/contrast-minimum.html) — official working repository mirror; primary WAI URL returned 403 during review.
5. [W3C: Understanding Reflow](https://w3c.github.io/wcag/understanding/reflow.html).
6. [W3C: Understanding Target Size (Minimum)](https://w3c.github.io/wcag/understanding/target-size-minimum.html).
7. [web.dev: Browser-level image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading) — dimensions, loading priority, and below-fold images.
8. [web.dev: Web Vitals](https://web.dev/articles/vitals) — thresholds and the distinction between field and lab measurement.
9. [GitHub: What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) — static hosting and project URL behaviour.
