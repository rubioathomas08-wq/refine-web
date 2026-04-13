// ── Types ──

export interface DetailedFeature {
  category: string;
  items: { name: string; description: string }[];
}

export interface BuildTier {
  type: "tier";
  slug: string;
  name: string;
  pages: string;
  price: string;
  highlighted?: boolean;
  features: string[];
  description: string;
  whoIsThisFor: string;
  detailedFeatures: DetailedFeature[];
  deliveryTime: string;
  revisions: string;
}

export interface AddOn {
  type: "addon";
  slug: string;
  name: string;
  price: string;
  description: string;
  whoIsThisFor: string;
  whatYouGet: string[];
  compatibleTiers: string[];
}

export interface RetainerPlan {
  name: string;
  audience: string;
  price: string;
  highlighted?: boolean;
  features: string[];
}

export interface HourlyRate {
  situation: string;
  rate: string;
}

export type ServiceItem = BuildTier | AddOn;

// ── Build Tiers ──

export const buildTiers: BuildTier[] = [
  {
    type: "tier",
    slug: "starter",
    name: "Starter",
    pages: "Up to 5 pages",
    price: "$500–$700",
    features: [
      "Home, About, Services, Contact + 1 more",
      "Mobile responsive design",
      "Contact form with email delivery",
      "Photo gallery (up to 10 images)",
      "Google Maps embed",
      "Social media links",
      "On-page SEO + sitemap",
      "Google Analytics & Search Console setup",
      "3 rounds of revisions",
    ],
    description:
      "The Starter package is built for businesses that need a clean, professional web presence without the complexity. You get up to 5 fully custom pages — no templates, no drag-and-drop builders. Every page is hand-built, mobile responsive, and optimized for local search so your business shows up when people Google you. We include a working contact form that emails you directly when someone reaches out, a photo gallery to showcase your work, and a Google Maps embed so customers can find you. You also get Google Analytics and Search Console set up from day one so you can see exactly how your site is performing.",
    whoIsThisFor:
      "Perfect for new businesses, solo operators, or anyone who just needs a solid online presence. If you're a plumber, landscaper, cleaner, or any service-based business that gets most of its work through referrals and Google searches — this is your tier. You don't need 20 pages. You need 5 great ones.",
    detailedFeatures: [
      {
        category: "Design & Development",
        items: [
          { name: "Up to 5 custom pages", description: "Home, About, Services, Contact, and one additional page of your choice — all designed from scratch to match your brand." },
          { name: "Mobile responsive", description: "Every page looks and works perfectly on phones, tablets, and desktops. Most of your visitors are on mobile — we build for that first." },
          { name: "Custom scroll animations", description: "Subtle fade-in effects as users scroll through your site. Professional polish without being overdone." },
        ],
      },
      {
        category: "Features",
        items: [
          { name: "Contact form with email delivery", description: "A working form that sends submissions directly to your inbox. You never miss a lead." },
          { name: "Photo gallery", description: "Showcase up to 10 images of your work, products, or business in a clean grid layout." },
          { name: "Google Maps embed", description: "An interactive map showing your business location so customers know exactly where to find you." },
          { name: "Social media links", description: "Links to your Facebook, Instagram, or any other profiles — displayed in the header or footer." },
        ],
      },
      {
        category: "SEO & Analytics",
        items: [
          { name: "On-page SEO + sitemap", description: "Optimized page titles, meta descriptions, and a sitemap submitted to Google so you get indexed and start ranking." },
          { name: "Google Analytics setup", description: "We install Google Analytics so you can see how many people visit your site, where they come from, and what they click." },
          { name: "Google Search Console setup", description: "See exactly which search terms bring people to your site and how you rank for them. You get viewer access." },
        ],
      },
    ],
    deliveryTime: "5–7 business days",
    revisions: "3 rounds of revisions included",
  },
  {
    type: "tier",
    slug: "standard",
    name: "Standard",
    pages: "Up to 8 pages",
    price: "$900–$1,300",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Expanded gallery (up to 25 images)",
      "Detailed services & pricing pages",
      "Google Business Profile optimization",
      "Local business structured data",
      "Custom scroll animations",
      "3 rounds of revisions",
    ],
    description:
      "The Standard package takes everything from Starter and adds the features that help you actually compete in local search. You get up to 8 pages — enough for a detailed services breakdown, a pricing page, an expanded gallery, and more. We optimize your Google Business Profile so you show up in the map pack when people search for your type of business. We also add structured data (the behind-the-scenes code that tells Google exactly what your business is, where it's located, and what you offer) which directly helps your search rankings. This is our most popular tier because it hits the sweet spot between value and features.",
    whoIsThisFor:
      "Best for established businesses that are serious about getting found online. If you've been relying on word of mouth and want to start showing up on Google consistently, this is the move. Great for businesses with multiple services, clear pricing they want to display, and enough work to fill a real gallery.",
    detailedFeatures: [
      {
        category: "Everything in Starter, Plus",
        items: [
          { name: "Up to 8 custom pages", description: "Enough room for dedicated service pages, a pricing page, team page, FAQ, or any other pages your business needs." },
          { name: "Expanded photo gallery", description: "Showcase up to 25 images organized however makes sense for your business — by service type, project, or category." },
          { name: "Detailed services & pricing pages", description: "Individual pages for each service you offer with descriptions, pricing, and CTAs. Makes it easy for customers to find exactly what they need." },
        ],
      },
      {
        category: "Local SEO",
        items: [
          { name: "Google Business Profile optimization", description: "We optimize your Google Business listing — categories, description, hours, photos, and service areas — so you rank higher in the map pack." },
          { name: "Local business structured data", description: "JSON-LD markup that tells Google your business name, address, phone, hours, and services. This is what powers rich search results." },
        ],
      },
      {
        category: "Design",
        items: [
          { name: "Custom scroll animations", description: "Elements fade in, slide up, and animate as users scroll. Gives your site a premium, modern feel." },
          { name: "3 rounds of revisions", description: "One extra revision round compared to Starter — more flexibility to dial in the design." },
        ],
      },
    ],
    deliveryTime: "2–3 weeks",
    revisions: "3 rounds of revisions included",
  },
  {
    type: "tier",
    slug: "professional",
    name: "Professional",
    pages: "Up to 12 pages",
    price: "$1,500–$2,200",
    features: [
      "Everything in Standard",
      "Booking system + admin dashboard",
      "Email collection with export",
      "Blog-ready setup",
      "Expanded gallery (up to 50 images)",
      "Automated analytics reports",
      "4 rounds of revisions",
    ],
    description:
      "The Professional package is where your website stops being a brochure and starts being a business tool. Everything from Standard is included, plus a booking/scheduling system with its own admin dashboard where you can see every appointment that comes in. You also get email collection — a mailing list signup on your site that stores emails in a database you can export anytime. A blog-ready setup means you can publish articles to boost your SEO and establish authority. Your gallery expands to 50 images, and we set up automated analytics reports so you get a snapshot of your site's performance without having to log in and check.",
    whoIsThisFor:
      "Built for businesses that need their website to DO things — not just look pretty. If you need online booking (salons, detailers, contractors, wellness clinics), want to build an email list, or need a blog to drive organic traffic, this is your tier. You're past the 'I just need a website' stage — you need a platform.",
    detailedFeatures: [
      {
        category: "Everything in Standard, Plus",
        items: [
          { name: "Up to 12 custom pages", description: "Room for everything — individual service pages, team bios, blog, FAQ, booking page, and more." },
          { name: "Expanded gallery (50 images)", description: "A full portfolio of your work with category filtering. Upload-ready if paired with the gallery add-on." },
        ],
      },
      {
        category: "Database-Powered Features",
        items: [
          { name: "Booking/scheduling system", description: "Customers can request appointments directly from your site. You see them in a private admin dashboard with all the details." },
          { name: "Admin dashboard", description: "A password-protected page where you can view bookings, contact submissions, and email signups — all in one place." },
          { name: "Email collection with export", description: "A mailing list signup form that saves emails to your database. Export them as a CSV anytime to use with Mailchimp or any email tool." },
        ],
      },
      {
        category: "Content & Analytics",
        items: [
          { name: "Blog-ready setup", description: "A blog page with clean layout, SEO-friendly URLs, and the structure to start publishing content that drives organic search traffic." },
          { name: "Automated analytics reports", description: "Pre-configured dashboards so you can see traffic, top pages, and search performance at a glance." },
          { name: "4 rounds of revisions", description: "More room to iterate and perfect the design before launch." },
        ],
      },
    ],
    deliveryTime: "3–4 weeks",
    revisions: "4 rounds of revisions included",
  },
  {
    type: "tier",
    slug: "premium",
    name: "Premium",
    pages: "13–20+ pages",
    price: "$2,500–$4,000+",
    features: [
      "Everything in Professional",
      "AI chatbot integration",
      "Photo/video gallery with uploads",
      "Advanced forms (intake, quotes, multi-step)",
      "Priority build (1–2 weeks)",
      "Unlimited revisions during build",
    ],
    description:
      "The Premium package is the full build — everything we offer, all in one project. You get every feature from Professional plus an AI chatbot that answers customer questions 24/7 and captures leads while you sleep. Your gallery upgrades to a full upload system where you (or your team) can add and manage photos directly from an admin panel without calling us. Advanced forms let you build multi-step intake questionnaires, quote calculators, or detailed service request forms. And because this is our flagship tier, you get priority scheduling and unlimited revisions throughout the build process.",
    whoIsThisFor:
      "For businesses that want a website that works as hard as they do. If you have high customer volume, need automation (chatbot, booking, email capture), and want the ability to manage content yourself through an admin panel — this is it. Typically chosen by wellness clinics, multi-service contractors, and growing businesses with real revenue.",
    detailedFeatures: [
      {
        category: "Everything in Professional, Plus",
        items: [
          { name: "13–20+ custom pages", description: "Fully custom site architecture designed around your business. No page limits — we build whatever you need." },
        ],
      },
      {
        category: "AI & Automation",
        items: [
          { name: "AI chatbot", description: "A smart chatbot powered by AI that answers common customer questions, collects contact info, and works 24/7. Trained on your specific business and services." },
        ],
      },
      {
        category: "Content Management",
        items: [
          { name: "Photo/video gallery with uploads", description: "An admin panel where you can upload, delete, and organize photos and videos on your site without any coding or calling us." },
          { name: "Advanced forms", description: "Multi-step forms for intake, quote requests, or detailed service inquiries. Conditional logic, file uploads, and custom fields." },
        ],
      },
      {
        category: "Priority Service",
        items: [
          { name: "Priority build (1–2 weeks)", description: "Your project jumps to the front of the line. Faster turnaround without cutting corners." },
          { name: "Unlimited revisions", description: "No cap on revision rounds during the build. We keep going until you're 100% happy." },
        ],
      },
    ],
    deliveryTime: "1–2 weeks (priority)",
    revisions: "Unlimited revisions during build",
  },
];

// ── Add-Ons ──

export const addOns: AddOn[] = [
  {
    type: "addon",
    slug: "ai-chatbot",
    name: "AI Chatbot",
    price: "$400–$600",
    description:
      "An AI-powered chatbot that lives on your website and answers customer questions 24/7. It's trained on your business — your services, your pricing, your hours, your FAQ. When it can't answer something, it captures the customer's contact info and sends it to you. It works while you sleep, handles repetitive questions so you don't have to, and makes your business look cutting-edge.",
    whoIsThisFor:
      "Great for businesses that get a lot of the same questions — pricing, availability, service areas, hours. Instead of answering the same texts and calls all day, let the chatbot handle the easy stuff and only ping you when a real lead comes through.",
    whatYouGet: [
      "AI chatbot widget on your website (bottom-right corner)",
      "Trained on your specific business info, services, and FAQ",
      "Lead capture — collects name, phone, and email when it can't answer",
      "24/7 availability — works while you sleep",
      "Customizable personality and tone to match your brand",
      "Monthly API costs covered under Advanced/Enterprise retainer",
    ],
    compatibleTiers: ["Starter", "Standard", "Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "booking-system",
    name: "Booking/Scheduling System + Admin Panel",
    price: "$300–$500",
    description:
      "A complete booking system built into your website. Customers fill out a form to request an appointment — selecting their service, preferred date/time, and contact info. Every submission is saved to a database and displayed on a private admin dashboard that only you can access. You can see all bookings at a glance, filter by date, and manage your schedule without a third-party tool.",
    whoIsThisFor:
      "Essential for any appointment-based business — detailers, salons, wellness clinics, contractors, trainers. If people need to book time with you, this replaces the back-and-forth texting with a clean, professional system.",
    whatYouGet: [
      "Booking request form on your website",
      "Service selection dropdown with your offerings",
      "Date and time preference fields",
      "Customer contact info capture (name, phone, email)",
      "Private admin dashboard (password protected)",
      "View, filter, and manage all bookings",
      "Email notification when a new booking comes in",
      "Requires active retainer (database-powered feature)",
    ],
    compatibleTiers: ["Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "photo-gallery",
    name: "Photo Gallery with Client Uploads",
    price: "$250–$400",
    description:
      "A photo gallery system where you can upload, organize, and manage images directly from an admin panel — no coding required, no calling us for every update. Photos are stored securely and displayed in a clean, responsive grid on your public site. You can create categories, reorder images, and delete old ones anytime.",
    whoIsThisFor:
      "Built for businesses where visuals sell the work — detailers, tattoo artists, contractors, landscapers, photographers, event venues. If your Instagram is your best marketing tool, this brings that same energy to your website with full control.",
    whatYouGet: [
      "Public gallery page with responsive image grid",
      "Category/tag filtering for organizing photos",
      "Private admin upload panel (drag and drop)",
      "Image optimization (auto-compressed for fast loading)",
      "Secure cloud storage for all uploaded images",
      "Delete and reorder functionality",
      "Requires active retainer (database-powered feature)",
    ],
    compatibleTiers: ["Standard", "Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "email-collection",
    name: "Email Collection + Admin Export",
    price: "$150–$250",
    description:
      "A mailing list signup form on your website that saves every email address to a secure database. You can view all collected emails in your admin dashboard and export them as a CSV file anytime — ready to import into Mailchimp, Constant Contact, or any email marketing tool. No monthly email platform fees required just to collect addresses.",
    whoIsThisFor:
      "For any business that wants to build a customer list. Run a seasonal promotion? Send a newsletter? Announce a new service? You need an email list first. This gets you started without paying for an email platform until you're ready to send.",
    whatYouGet: [
      "Email signup form (embeddable anywhere on your site)",
      "Secure database storage for all collected emails",
      "Admin dashboard to view and manage subscribers",
      "One-click CSV export for use with any email platform",
      "Optional: name field alongside email",
      "Duplicate detection (no repeat signups)",
      "Requires active retainer (database-powered feature)",
    ],
    compatibleTiers: ["Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "logo-design",
    name: "Custom Logo Design",
    price: "$100–$200",
    description:
      "A clean, professional logo designed for your business. We create a text-based or icon-based logo that matches your brand's personality and looks great on your website, business cards, social media, and vehicle wraps. You get the final files in multiple formats (PNG, SVG) so you can use it everywhere.",
    whoIsThisFor:
      "For businesses that don't have a logo yet or are using something thrown together in Canva. A professional logo is the foundation of your brand — it's the first thing people see and the last thing they remember.",
    whatYouGet: [
      "2–3 initial logo concepts to choose from",
      "1 round of revisions on the chosen concept",
      "Final files in PNG and SVG format",
      "Light and dark background versions",
      "Sized for web, social media, and print",
    ],
    compatibleTiers: ["Starter", "Standard", "Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "additional-pages",
    name: "Additional Pages",
    price: "$75–$150/page",
    description:
      "Need more pages than your tier includes? Add individual pages to any build. Each page is custom-designed to match the rest of your site — same styling, same quality, same attention to detail. Common additions include team pages, FAQ pages, individual service pages, testimonial pages, or landing pages for specific campaigns.",
    whoIsThisFor:
      "For businesses that need a few extra pages beyond their tier limit. Maybe you have 7 services but chose the Starter plan — just add 2 extra pages instead of jumping to Standard.",
    whatYouGet: [
      "Custom-designed page matching your site's style",
      "Mobile responsive layout",
      "SEO-optimized with unique title and description",
      "Linked in your site navigation",
      "Priced per page — only pay for what you need",
    ],
    compatibleTiers: ["Starter", "Standard", "Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "rush-delivery",
    name: "Rush Delivery",
    price: "$300–$500",
    description:
      "Need your site fast? Rush delivery moves your project to the front of the line. Your entire build is completed within one week — same quality, same features, just faster. We dedicate focused time to your project to hit the accelerated timeline without cutting corners.",
    whoIsThisFor:
      "For businesses with a deadline — maybe you're launching soon, have a seasonal push coming, or just can't wait 3 weeks. This guarantees your site is live within 7 days of project kickoff.",
    whatYouGet: [
      "Priority scheduling — your project comes first",
      "Full build completed within 1 week",
      "Same quality and features as standard delivery",
      "Daily progress updates during the build",
      "Available for any tier (Starter through Premium)",
    ],
    compatibleTiers: ["Starter", "Standard", "Professional", "Premium"],
  },
  {
    type: "addon",
    slug: "google-business-profile",
    name: "Google Business Profile Setup",
    price: "$100",
    description:
      "We create and fully optimize your Google Business Profile from scratch — the listing that shows up when someone Googles your business or searches for your service type in your area. This is the single most important local SEO asset you can have. We fill in your hours, services, description, categories, service area, and photos so you start showing up in the Google Maps pack.",
    whoIsThisFor:
      "For businesses that don't have a Google Business Profile yet, or have one that's barely filled out. If you search your business name on Google and nothing shows up on the right side — you need this.",
    whatYouGet: [
      "Google Business Profile created (or claimed if it exists)",
      "Business name, address, phone, and hours configured",
      "Business description written and optimized",
      "Service categories and service area set up",
      "Up to 5 photos uploaded to the profile",
      "Verification process handled",
    ],
    compatibleTiers: ["Starter", "Standard", "Professional", "Premium"],
  },
];

// ── Retainer Plans ──

export const retainerPlans: RetainerPlan[] = [
  {
    name: "Starter",
    audience: "Simple site (1–5 pages)",
    price: "$45",
    features: [
      "Hosting, SSL, uptime monitoring",
      "Google Analytics & Search Console access",
      "Monthly Google ranking check",
      "Minor text edits (up to 30 min/month)",
    ],
  },
  {
    name: "Standard",
    audience: "Mid site (6–8 pages)",
    price: "$75",
    features: [
      "Everything in Starter",
      "Google Business Profile updates",
      "Monthly analytics snapshot sent to you",
      "Content edits (up to 1 hr/month)",
    ],
  },
  {
    name: "Pro",
    audience: "Larger site (9–12 pages)",
    price: "$110",
    highlighted: true,
    features: [
      "Everything in Standard",
      "Monthly performance & traffic report",
      "24hr response time guaranteed",
      "Content edits (up to 2 hrs/month)",
    ],
  },
  {
    name: "Advanced",
    audience: "Site with database features",
    price: "$150",
    features: [
      "Everything in Pro",
      "Database management & backups",
      "Storage monitoring",
      "Content edits (up to 3 hrs/month)",
    ],
  },
  {
    name: "Enterprise",
    audience: "AI chatbot + advanced features",
    price: "$200",
    features: [
      "Everything in Advanced",
      "All AI & API costs covered",
      "Priority same-day support",
      "Content edits (up to 4 hrs/month)",
    ],
  },
];

// ── Hourly Rates ──

export const hourlyRates: HourlyRate[] = [
  { situation: "Client has active retainer", rate: "$50/hr" },
  { situation: "Client has no retainer", rate: "$100/hr" },
  { situation: "Emergency / same-day work", rate: "$150/hr" },
];

// ── Build Tier Comparison Data ──

export const buildTierComparison = [
  { feature: "Custom-designed pages", starter: "Up to 5", standard: "Up to 8", professional: "Up to 12", premium: "13–20+" },
  { feature: "Mobile responsive", starter: true, standard: true, professional: true, premium: true },
  { feature: "Contact form with email", starter: true, standard: true, professional: true, premium: true },
  { feature: "Photo gallery", starter: "10 images", standard: "25 images", professional: "50 images", premium: "Unlimited + uploads" },
  { feature: "Google Maps embed", starter: true, standard: true, professional: true, premium: true },
  { feature: "Social media links", starter: true, standard: true, professional: true, premium: true },
  { feature: "On-page SEO + sitemap", starter: true, standard: true, professional: true, premium: true },
  { feature: "Google Analytics & Search Console", starter: true, standard: true, professional: true, premium: true },
  { feature: "Google Business Profile optimization", starter: false, standard: true, professional: true, premium: true },
  { feature: "Local business structured data", starter: false, standard: true, professional: true, premium: true },
  { feature: "Custom scroll animations", starter: false, standard: true, professional: true, premium: true },
  { feature: "Booking system + admin dashboard", starter: false, standard: false, professional: true, premium: true },
  { feature: "Email collection + export", starter: false, standard: false, professional: true, premium: true },
  { feature: "Blog-ready setup", starter: false, standard: false, professional: true, premium: true },
  { feature: "Automated analytics reports", starter: false, standard: false, professional: true, premium: true },
  { feature: "AI chatbot", starter: false, standard: false, professional: false, premium: true },
  { feature: "Gallery with client uploads", starter: false, standard: false, professional: false, premium: true },
  { feature: "Advanced forms", starter: false, standard: false, professional: false, premium: true },
  { feature: "Priority build (1–2 weeks)", starter: false, standard: false, professional: false, premium: true },
  { feature: "Unlimited revisions", starter: false, standard: false, professional: false, premium: true },
];

// ── Helper Functions ──

export function getServiceBySlug(slug: string): ServiceItem | null {
  const tier = buildTiers.find((t) => t.slug === slug);
  if (tier) return tier;
  const addon = addOns.find((a) => a.slug === slug);
  if (addon) return addon;
  return null;
}

export function getAllServiceSlugs(): string[] {
  return [
    ...buildTiers.map((t) => t.slug),
    ...addOns.map((a) => a.slug),
  ];
}
