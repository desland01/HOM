# Grove Street Painting - Strategic Site Structure & SEO Plan

## 1. Core Architecture Strategy: The "Geo-Silo" Model
To dominate local search in Sarasota and surrounding municipalities, we will implement a "Location-First" URL architecture. This eliminates the generic `/services/` folder and nests specific services directly under the location they serve.

### Why this works:
*   **Shorter URLs:** e.g., `/sarasota/exterior-painting` instead of `/services/exterior-painting-sarasota`.
*   **Topical Authority:** Tells Google exactly how content is organized geographically. Link equity flows down from the location hub to the specific services.
*   **Scalability:** Allows infinite expansion into new municipalities (e.g., `/venice/`, `/bradenton/`) without cluttering a single services folder.

---

## 2. Google Business Profile (GBP) & DBA Alignment
The recent registration of the DBA **"Grove Street Painting - Sarasota House Painters"** is a massive local SEO advantage. The site structure and entity markup must align perfectly with this to avoid keyword stuffing penalties while maximizing ranking power.

### NAP (Name, Address, Phone) Consistency Requirements:
To build trust with Google's algorithm, the *exact* DBA name must be used consistently:
1.  **Global Footer:** Update the copyright and business name text to read: `Grove Street Painting - Sarasota House Painters`.
2.  **Contact Page:** The primary business name heading above the address must match the DBA.
3.  **JSON-LD Schema:** The `LocalBusiness` and `PaintingContractor` schema `"name"` property in `src/lib/schema.ts` must be updated to the exact DBA.

---

## 3. URL Structure Map

### Tier 1: The Root Domain (The Sarasota Hub)
Unlike competitors who use `domain.com/sarasota` because they are national franchises, our root domain *is* the Sarasota hub. It carries the most backlink authority.

*   **URL:** `https://grovestreetpainting.com/`
*   **GBP Link:** The Google Business Profile website button links directly here.
*   **Primary Keywords:** "Sarasota House Painters" (Exact match to DBA), "Painting Company Sarasota".
*   **On-Page Action:** The main `<h1>` and `<title>` tag must explicitly include "Sarasota House Painters".

### Tier 2: The Core Service Silo (Sarasota)
Instead of a generic services folder, all primary services are nested under a `/sarasota/` folder.

*   `/sarasota/exterior-painting`
*   `/sarasota/interior-painting`
*   `/sarasota/cabinet-painting`
*   `/sarasota/garage-floor-epoxy`
*   *(301 Redirects must be established from the old `/services/...` URLs to these new paths).*

### Tier 3: Secondary Location Hubs (The Municipalities)
For high-value surrounding areas (e.g., Siesta Key, Longboat Key), we maintain dedicated location hubs.

*   **URL Example:** `/siesta-key/`
*   **Function:** Acts as the homepage for that specific municipality.
*   **Primary Keywords:** "Painters Siesta Key", "House Painting Siesta Key".

### Tier 4: Nested Location Services (The Long-Tail Dominators)
If a specific service in a specific secondary location has high search volume or high conversion value, it gets a dedicated page nested under its location hub.

*   **URL Example:** `/siesta-key/exterior-painting`
*   **Function:** Highly targeted long-tail capture.
*   **Internal Linking:** The parent `/siesta-key/` hub links down to this page, and the core `/sarasota/exterior-painting` page links out to it in an "Areas We Serve" section.

*Note: For lower-value service/location combinations, we rely on H2s and localized content on the Tier 3 Location Hub rather than spinning up a dedicated page.*

---

## 4. The "Near Me" Strategy
The existing `/...-near-me` pages (e.g., `/exterior-painters-near-me`) remain at the root level.
*   Because the GBP and root domain are now heavily cemented as a "Sarasota" entity (via the DBA and Schema), Google will naturally rank these "near me" pages highest for users physically located in or searching from the Sarasota area.

---

## 5. Execution Checklist & Migration Plan

1.  **Schema & NAP Update:** Update `src/lib/schema.ts`, the global footer, and the contact page to use the exact DBA: "Grove Street Painting - Sarasota House Painters".
2.  **Homepage Optimization:** Update the homepage `<h1>` and `<title>` to prioritize the DBA keywords.
3.  **URL Restructuring:** Move existing files from `src/pages/services/` to a new `src/pages/sarasota/` directory.
4.  **Location Restructuring:** Move existing files from `src/pages/locations/[location].astro` to `src/pages/[location]/index.astro`.
5.  **Redirect Configuration:** Crucial step. Update `astro.config.ts` with 301 (status: 308 in Astro) redirects mapping old service/location URLs to the new Geo-Silo URLs to preserve existing SEO equity. *(Note: The `@astrojs/vercel` adapter automatically handles pushing these rules to Vercel's edge network upon deployment).*
6.  **Internal Link Audit:** Run a global search and replace to update all internal links to reflect the new structure.
7.  **Sitemap Submission:** Once deployed, submit the `sitemap-index.xml` to Google Search Console to prompt a recrawl of the new architecture.