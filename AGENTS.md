````md
# AGENTS.md

You are my full-stack code review and implementation assistant for a React (Vite) + Tailwind frontend with a PHP + MySQL backend.

## Core rule: persistence

Do not use `localStorage` or `sessionStorage` as the primary source of truth for app or business data.

Persistent data must be stored in MySQL and accessed through PHP API endpoints.

Client storage is allowed only for:
- short-lived UI state
- temporary unsaved draft state during a single session
- disposable cache that can be regenerated and is never the only copy

If persistence is needed, design the DB + API solution by default.

If you are about to suggest `localStorage` for persistent data, stop and design the DB + API solution instead.

---

## Server structure and path rules

### Document root
`/public` is the only web-accessible document root.

`/backend` is filesystem-only and must never be treated as a public URL path.

### Canonical layout
```text
/
  /backend
    /config
    /helpers
    /middleware
  /public
    /api
      /auth
        login.php
        logout.php
        me.php
      /...
    index.html
    assets/...
````

### Placement rules

* React build output goes in `/public`
* API endpoints go in `/public/api/...`
* Shared backend PHP code goes in `/backend/...`

### API URL rules

Because `/public` is the docroot:

* correct: `/api/auth/login.php`
* wrong: `/public/api/auth/login.php`

Frontend should call:

* `/api/<feature>/<file>.php`

### Required PHP include pattern

Endpoints in `/public/api/...` must include backend files using stable `__DIR__` filesystem paths.

Example:

```php
require_once __DIR__ . '/../../../backend/config/db.php';
require_once __DIR__ . '/../../../backend/helpers/response.php';
require_once __DIR__ . '/../../../backend/middleware/auth.php';
```

### Routing and rewrites

React uses `react-router-dom`.

If adding rewrite rules, never break `/api/*` paths. Exclude them from SPA fallbacks.

---

## Stack defaults

### Frontend

* React + Vite
* Tailwind CSS
* `react-router-dom`
* `react-icons`
* `react-toastify`
* `axios` or `fetch` to PHP JSON endpoints
* mobile-first responsiveness required

API base:

* use `VITE_API_BASE` if provided
* otherwise default to `/api`

### Backend

* PHP 7.4 compatible unless explicitly told otherwise
* MySQL
* REST-style JSON APIs
* prepared statements required
* validate input
* return consistent JSON responses
* use meaningful HTTP status codes
* account for auth, sessions/tokens, CORS, and OPTIONS preflight

---

## Always check every layer

For any bug fix, feature, refactor, UI change, endpoint, or explanation, always account for:

* Frontend
* Backend
* DB/schema
* Config/integration

Always verify boundary risks such as:

* wrong endpoint path
* wrong include path
* mismatched JSON keys
* wrong HTTP method
* missing CORS preflight
* auth mismatch
* PHP warnings/notices causing 500
* malformed SQL
* frontend expecting fields backend does not return

If a feature saves, loads, lists, edits, or deletes data, assume backend + DB work is required unless clearly explained otherwise.

Never conclude that no backend or DB change is needed for a persistence feature without explicitly explaining why.

---

## Required workflow

### Step 1

Restate the goal in one sentence.

### Step 2

List impacted files by layer:

* Frontend
* Backend
* DB
* Config

### Step 3

List likely failure points across the frontend/backend boundary.

### Step 4

Provide exact code edits for all required layers:

* Frontend: state, API calls, load/save/update flow
* Backend: endpoints, validation, auth, error handling
* DB: `CREATE TABLE` / `ALTER TABLE`, indexes, foreign keys when appropriate

If a layer truly needs no change, say so and explain why.

### Step 5

Provide a quick test plan:

* Frontend: reproduce steps + expected UI
* Backend: `curl` or Postman examples + expected JSON
* DB: migration or seed SQL steps

### Step 6

For public-facing pages, include SEO QA.

---

## Data contract rules

Always define request and response JSON with example payloads.

Use consistent field names across frontend and backend.

Use database-generated IDs and server-side timestamps.

Do not rely on client-generated IDs as authoritative records.

---

## Output requirements

Provide code in clearly labeled blocks by file path:

* Frontend: `/src/...`
* API endpoints: `/public/api/...`
* Shared backend code: `/backend/...`

Prefer small, safe patches over rewrites unless explicitly asked for a rewrite.

Keep frontend mobile-friendly and touch-friendly.

---

## Default CRUD expectation

For any form or saved record, assume:

* data is stored in MySQL
* API supports create, read/list, update, and optionally delete
* frontend loads existing data and saves changes through the API

Unless explicitly told otherwise, persistence features should be implemented as real CRUD backed by MySQL.

---

## SEO rules for public pages

Treat SEO as a core requirement for public-facing pages.

### HTML-first default

Build pages so the primary meaning is understandable from the initial HTML whenever possible.

Do not rely on client-side JavaScript alone for critical SEO content.

For homepage, marketing, service, location, and article pages:

* ensure important topic and copy are present in initial HTML when possible
* avoid empty-shell pages where meaning appears only after hydration or delayed fetches
* prefer server-rendered, PHP-rendered, or pre-rendered output for ranking pages

If forced to choose, prefer crawlable HTML-first output over React-only rendering for public ranking pages.

### Stack-specific SEO

For this stack:

* render SEO-critical metadata and page content from server output when possible
* use React for enhancement, interactivity, forms, dashboards, and app-like behavior
* do not assume crawlers will execute delayed JavaScript perfectly

### Required page basics

Every indexable page should have:

* unique title tag
* unique meta description
* correct canonical
* one clear H1

### Crawlability and indexability

Do not accidentally break SEO with:

* `noindex`
* bad canonicals
* robots mistakes
* broken internal links
* JS-only navigation

Important pages must be reachable through normal crawlable links.

Prefer real anchor links when discoverability matters.

### Structured data

Use JSON-LD when appropriate.

Rules:

* it must match visible content
* it must use a fitting schema type
* it must not be misleading or hidden

### Content quality

Avoid:

* thin pages
* duplicate pages
* city or service pages with only keyword swaps
* keyword stuffing

Public pages should clearly communicate:

* what the page is about
* who it serves
* where relevant, the location or service area
* what action comes next

### Local SEO

For local business pages:

* include real local relevance
* include clear business identity where appropriate
* keep NAP consistent when displayed

### Images and performance

Use meaningful alt text and sensible filenames.

Keep public pages mobile-friendly, accessible, and reasonably fast.

Avoid oversized JavaScript, heavy render-blocking patterns, and layout shifts where possible.

### SEO QA

For public-facing page work, confirm:

* indexable or intentionally non-indexable
* title
* meta description
* canonical
* H1
* crawlable internal links
* meaningful initial HTML content when possible
* structured data matches visible content
* no SEO regression from route, metadata, or JS-rendering changes

### Warn when a change may hurt SEO

Flag risks such as:

* moving core copy behind JS-only tabs or accordions
* replacing links with click handlers
* deleting metadata
* fetching critical copy only after load
* creating thin duplicate pages

### Default SEO mindset

Build public pages so search engines can understand the page without needing perfect JavaScript execution.

---

## Implementation preferences

* prefer safe incremental patches
* preserve working behavior unless change is required
* flag cross-layer risks before finishing
* keep API contracts explicit
* keep code production-minded and maintainable

---