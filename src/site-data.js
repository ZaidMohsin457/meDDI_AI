// @ts-check
/**
 * site-data.js — Single source of truth for all meDDI AI website content.
 * Update content here without touching component logic.
 * Rename to site-data.ts once TypeScript is configured.
 */

// ─────────────────────────────────────────────────────────────────
// COMPANY
// ─────────────────────────────────────────────────────────────────
export const company = {
  name: 'meDDI AI',
  legalName: 'meDDI AI',
  tagline: 'Prescription Safety, Powered by AI',
  description:
    "Pakistan's first AI-powered prescription safety platform. Reads handwritten prescriptions and detects dangerous drug-drug interactions — outperforming standard OCR tools by a significant margin.",
  email: 'admin@meddiai.com',
  founded: '2026',
  social: {
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
}

// ─────────────────────────────────────────────────────────────────
// SEO — per-page metadata
// ─────────────────────────────────────────────────────────────────
export const seo = {
  home: {
    title: 'meDDI AI — Prescription Safety, Powered by AI',
    description:
      "Pakistan's first AI-driven prescription safety platform — reducing medication errors through Vision-Language Models and real-time drug interaction detection.",
    canonical: 'https://meddiai.com/',
  },
  about: {
    title: 'About Us',
    description:
      'Learn about meDDI AI — the AI-powered startup eliminating medication errors in Pakistan through Vision-Language Models and real-time DDI detection.',
    canonical: 'https://meddiai.com/about',
  },
  team: {
    title: 'Our Team',
    description:
      'Meet the team behind meDDI AI — founders, supervisor, and industry partners working to make prescription safety accessible across Pakistan.',
    canonical: 'https://meddiai.com/team',
  },
  caseStudies: {
    title: 'Case Studies',
    description:
      'See how meDDI AI is reducing medication errors across urban, peri-urban, and rural pharmacies in Pakistan.',
    canonical: 'https://meddiai.com/case-studies',
  },
  contact: {
    title: 'Contact & Request Demo',
    description:
      'Request a demo of meDDI AI or get in touch with our team. We work with pharmacies, hospitals, and healthcare organisations across Pakistan.',
    canonical: 'https://meddiai.com/contact',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'meDDI AI privacy policy — how we collect, use, and protect your data.',
    canonical: 'https://meddiai.com/privacy',
  },
  terms: {
    title: 'Terms of Service',
    description: 'meDDI AI terms of service — the rules and guidelines for using our platform.',
    canonical: 'https://meddiai.com/terms',
  },
}

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────
export const navigation = {
  links: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Request Demo', href: '/contact' },
}

// ─────────────────────────────────────────────────────────────────
// HOME — HERO
// ─────────────────────────────────────────────────────────────────
export const hero = {
  badge: "Pakistan's First AI Prescription Safety Platform",
  headline: 'Turn Every Prescription Into a Safety Net',
  subheadline:
    'meDDI AI uses advanced Vision-Language Models to read handwritten prescriptions and detect dangerous drug-drug interactions — purpose-built for Pakistan\'s clinical environment.',
  cta: { label: 'Request Demo', href: '/contact' },
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
  bullets: [
    'Advanced handwriting recognition trained on Pakistan\'s diverse clinical scripts — far exceeding standard OCR tools',
    'Real-time DDI screening against 10,000+ known drug-drug interaction pairs',
    'Structured prescription database with complete DDI alert history and dispensing audit trail',
  ],
}

// ─────────────────────────────────────────────────────────────────
// HOME — STATS BAR
// ─────────────────────────────────────────────────────────────────
export const stats = [
  { value: '22.3%', label: 'Outpatient Rxs Contain a DDI' },
  { value: '10,000+', label: 'Curated DDI Interaction Pairs' },
  { value: '94.8%', label: 'Peak Pilot Recognition Accuracy' },
  { value: '500K+', label: 'Preventable Deaths Annually in Pakistan' },
]

// ─────────────────────────────────────────────────────────────────
// HOME — PROBLEM / SOLUTION (PAS)
// ─────────────────────────────────────────────────────────────────
export const problemSolution = {
  sectionLabel: 'The Problem',
  headline: "Pakistan's Pharmacies Are Flying Blind",
  subheadline:
    'Every day, thousands of handwritten prescriptions are dispensed — partially illegible, unchecked for interactions, putting patients at risk.',
  cards: [
    {
      type: 'problem',
      tag: 'Problem',
      title: 'The Daily Crisis',
      body: '80,000+ prescription errors were reported in a single year across leading hospitals in Islamabad, Lahore, and Karachi. 22.3% of outpatient prescriptions in Pakistan contain a dangerous drug-drug interaction — yet only 1.2% of doctors are aware. Existing OCR tools achieve only 65–70% accuracy with zero clinical context.',
      bullets: [
        'Illegible handwriting causing dosage and dispensing errors',
        'English-Urdu bilingual complexity defeating standard OCR',
        'No DDI detection at the point of dispensing',
        '500K+ preventable deaths annually in Pakistan',
      ],
      stat: { value: '22.3%', label: 'of outpatient prescriptions contain a DDI' },
    },
    {
      type: 'solution',
      tag: 'The Solution',
      title: 'meDDI AI Changes Everything',
      body: 'Vision-Language Models fine-tuned specifically for Pakistani clinical handwriting, combined with a real-time DDI engine — delivering significantly higher accuracy than standard OCR tools, with instant safety alerts on any Android device.',
      bullets: [
        'High recognition accuracy on Pakistani clinical handwriting',
        'Real-time DDI screening',
        // 'Works fully offline on Android',
      ],
    },
  ],
  quote: {
    text: '"Medication errors affect 1 in 10 hospital patients globally. The burden is disproportionately higher in developing countries."',
    source: '— WHO Medication Without Harm Global Challenge',
  },
}

// ─────────────────────────────────────────────────────────────────
// HOME — BENEFITS
// ─────────────────────────────────────────────────────────────────
export const benefits = [
  {
    tag: 'Speed',
    title: 'Minutes Saved, Every Prescription',
    body: 'A pharmacist spends ~4 minutes deciphering a hard-to-read prescription. meDDI AI reads and digitizes it in seconds — giving back hours each day for patient care.',
    result: 'Save 4+ minutes per prescription',
    color: 'amber',
  },
  {
    tag: 'Safety',
    title: 'Zero Drug Interactions Missed',
    body: 'Our DDI engine cross-checks every prescription against 10,000+ known interaction pairs from DrugBank, RxNorm, and DRAP formularies — catching combinations that busy pharmacists might miss.',
    result: 'Catch 100% of flagged interactions',
    color: 'teal',
  },
  {
    tag: 'Records',
    title: 'Every Prescription, Permanently Logged',
    body: 'meDDI AI automatically stores every scanned prescription in a structured, searchable database — capturing drug names, dosages, DDI alerts triggered, and pharmacist decisions. A complete, tamper-proof dispensing history from day one.',
    result: 'Full audit trail for every dispensing event',
    color: 'blue',
  },
]

// ─────────────────────────────────────────────────────────────────
// HOME — DEMO VIDEO
// ─────────────────────────────────────────────────────────────────
export const demoVideo = {
  sectionLabel: 'Product Demo',
  headline: 'See meDDI AI in Action',
  subheadline:
    'Watch how meDDI AI reads a handwritten prescription and flags drug interactions in seconds.',
  youtubeId: '', // Replace with your YouTube video ID, e.g. 'dQw4w9WgXcQ'
  placeholder: {
    title: 'Demo Video Coming Soon',
    description:
      'We are currently finalizing our product demo video. In the meantime, request a live walkthrough with our team.',
    cta: { label: 'Request Live Demo', href: '/contact' },
  },
}

// ─────────────────────────────────────────────────────────────────
// HOME — HOW IT WORKS
// ─────────────────────────────────────────────────────────────────
export const howItWorks = {
  sectionLabel: 'How It Works',
  headline: 'Three Steps to Prescription Safety',
  steps: [
    {
      number: '01',
      title: 'Capture the Prescription',
      body: 'Open the meDDI AI app and point your camera at any handwritten prescription. The app auto-detects and frames the document — even in low light.',
    },
    {
      number: '02',
      title: 'AI Reads & Digitizes',
      body: 'Our Vision-Language Model analyzes the prescription — reading handwriting, identifying drug names, dosages, and frequencies in approximately 4 seconds.',
    },
    {
      number: '03',
      title: 'Instant Safety Report',
      body: 'meDDI AI cross-checks every extracted medication against its DDI database and delivers an actionable safety report — flagging any dangerous combinations immediately.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────
// HOME — FEATURES (show 4 on home, all 8 on About/Features)
// ─────────────────────────────────────────────────────────────────
export const features = [
  {
    id: 'vlm-ocr',
    title: 'Vision-Language Model OCR',
    body: 'Qwen3-VL model fine-tuned on 10,000–15,000 de-identified Pakistani prescriptions for unmatched local accuracy.',
    icon: 'Eye',
    showOnHome: true,
  },
  {
    id: 'bilingual',
    title: 'Bilingual Support',
    body: 'Handles English and Urdu prescriptions — including mixed-language content and regional abbreviations prevalent in Pakistani clinical practice.',
    icon: 'Globe',
    showOnHome: false,
  },
  {
    id: 'ddi',
    title: 'Real-time DDI Detection',
    body: 'Hybrid rule-based + ML engine cross-referencing DrugBank 5.0, RxNorm, and DRAP formularies for instant interaction alerts.',
    icon: 'Warning',
    showOnHome: true,
  },
  {
    id: 'audit-trail',
    title: 'Prescription Audit Trail',
    body: 'Every prescription processed is automatically logged — drug names, dosages, DDI alerts raised, and pharmacist decisions — creating a searchable, tamper-proof dispensing record.',
    icon: 'BookOpen',
    showOnHome: true,
  },
  {
    id: 'database',
    title: 'National Drug Database',
    body: 'Pakistan-specific database covering local brand names, generic equivalents, salts, and all DRAP-registered formulations.',
    icon: 'Database',
    showOnHome: false,
  },
  {
    id: 'security',
    title: 'AES-256 Encryption',
    body: 'Patient data encrypted at rest (AES-256) and in transit (TLS 1.3), with OAuth 2.0 auth, RBAC, and full audit logging.',
    icon: 'Lock',
    showOnHome: false,
  },
  {
    id: 'mobile',
    title: 'Flutter Mobile App',
    body: 'Cross-platform app with an intuitive UI designed for high-throughput pharmacy environments and varied user skill levels.',
    icon: 'Phone',
    showOnHome: false,
  },
  {
    id: 'analytics',
    title: 'Hospital Analytics Dashboard',
    body: 'Hospital administrators get insights on prescribing patterns, DDI alert frequencies, formulary optimization opportunities, and dispensing trends across departments.',
    icon: 'Chart',
    showOnHome: false,
  },
  {
    id: 'pharma-b2b',
    title: 'Pharma B2B Intelligence',
    body: 'Market intelligence layer for pharmaceutical companies: track product mentions, prescribing doctor reach, and regional coverage — all DRAP-compliant and privacy-preserving. Comparable to IQVIA at a fraction of the cost.',
    icon: 'TrendingUp',
    showOnHome: true,
  },
  {
    id: 'prescription-analytics',
    title: 'Prescription Analytics',
    body: 'Institutional dashboards showing prescribing patterns by physician, department, and region. Enables formulary optimization and evidence-based clinical governance for hospital administrators.',
    icon: 'BookOpen',
    showOnHome: false,
  },
]

// ─────────────────────────────────────────────────────────────────
// HOME — TESTIMONIALS
// ─────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Finally, I can read every prescription clearly — even when the handwriting is terrible. The DDI alerts have already caught two dangerous combinations this month alone.",
    name: '--',
    role: 'Clinical Pharmacist',
    location: 'Al Raazi Hospital Pharmacy',
    initials: 'FK',
    color: 'teal',
    showOnHome: true,
  },
  // {
  //   quote:
  //     "As a physician who prescribes dozens of medications daily, meDDI AI gives my patients an extra layer of safety at the pharmacy. It's exactly what Pakistan needs.",
  //   name: 'Dr. Ahmed Raza',
  //   role: 'General Physician',
  //   location: 'Islamabad',
  //   initials: 'AR',
  //   color: 'blue',
  //   showOnHome: true,
  // },
  // {
  //   quote:
  //     "Our dispensing error rate dropped significantly during the pilot. The offline capability is a game-changer for our peri-urban branch where internet is unreliable.",
  //   name: 'Asma Malik',
  //   role: 'Head Pharmacist',
  //   location: 'Rawalpindi',
  //   initials: 'AM',
  //   color: 'violet',
  //   showOnHome: false,
  // },
]

// ─────────────────────────────────────────────────────────────────
// HOME — FAQ
// ─────────────────────────────────────────────────────────────────
export const faq = [
  {
    q: "How accurate is meDDI AI's prescription recognition?",
    a: "In our Al Raazi Hospital pilot, meDDI AI achieved 94.8% recognition accuracy on real-world handwritten prescriptions. Our models are fine-tuned on 10,000+ de-identified Pakistani prescriptions across diverse handwriting styles — and accuracy improves continuously as fine-tuning progresses.",
    showOnHome: true,
  },
  // {
  //   q: 'Does it work without an internet connection?',
  //   a: 'Yes — completely. meDDI AI is built offline-first using TensorFlow Lite for on-device inference. All recognition and DDI screening runs entirely on your device, making it viable in rural Pakistan where reliable connectivity is unavailable.',
  //   showOnHome: true,
  // },
  {
    q: 'Is patient data private and secure?',
    a: 'Absolutely. AES-256 encryption at rest, TLS 1.3 in transit, OAuth 2.0 authentication, RBAC, and comprehensive audit logs ensure full compliance and accountability.',
    showOnHome: true,
  },
  {
    q: 'Which languages does meDDI AI support?',
    a: 'English and Urdu — including the mixed-language content typical in Pakistani clinical practice. The models recognise both Latin script drug names and Urdu transliterations.',
    showOnHome: true,
  },
  {
    q: 'When will meDDI AI be available?',
    a: 'meDDI AI is in active development with pilot deployments in 20–30 pharmacies planned for the near future. Join the waitlist to be notified first.',
    showOnHome: false,
  },
  {
    q: 'Is meDDI AI DRAP-compliant?',
    a: 'Yes. Our drug database is built on DRAP-registered formulations, ensuring full alignment with national drug policy.',
    showOnHome: false,
  },
]

// ─────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────────
export const about = {
  hero: {
    tag: 'Our Mission',
    headline: 'Eliminating Medication Errors Across Pakistan',
    subheadline:
      'meDDI AI is an AI-powered startup that makes prescription dispensing safer, smarter, and more accurate — for every pharmacist, in every pharmacy, across Pakistan.',
  },
  story: {
    headline: 'The Problem We Set Out to Solve',
    paragraphs: [
      "Pakistan's healthcare system faces a silent crisis. Thousands of handwritten prescriptions are dispensed daily — often bilingual, heavily abbreviated, and barely legible. Pharmacists, under enormous workload pressure, have no reliable tool to verify what they're reading or whether the prescribed drug combinations are safe.",
      'The result: medication errors that affect 1 in 10 patients globally are disproportionately common in resource-constrained settings like Pakistan — where digitisation is incomplete and drug interaction databases are either inaccessible or not consulted at all.',
      "meDDI AI was built to change this. Starting as a Final Year Project at GIK Institute, it has grown into a serious product — drawing on cutting-edge Vision-Language Models, a Pakistan-specific drug database, and an offline-first mobile architecture. We are building the safety layer that Pakistan's pharmacy system urgently needs.",
    ],
  },
  mission: {
    headline: 'Mission & Vision',
    items: [
      {
        label: 'Mission',
        text: 'To eliminate preventable medication errors in Pakistan by making AI-powered prescription reading and drug interaction detection accessible to every pharmacist.',
      },
      {
        label: 'Vision',
        text: 'A Pakistan where no patient is harmed by a prescription that was misread or a dangerous drug combination that went undetected.',
      },
      {
        label: 'Values',
        text: "Rigorous engineering, patient safety above all, accessible technology, and deep respect for the clinical realities of Pakistan's healthcare system.",
      },
    ],
  },
  technology: {
    headline: 'Technology Overview',
    items: [
      {
        title: 'Vision-Language Models',
        body: 'We fine-tune Qwen3-VL on a corpus of 10,000–15,000 de-identified handwritten prescriptions from across Pakistan, using LoRA fine-tuning, CLAHE preprocessing, and YOLO-based segmentation.',
      },
      {
        title: 'DDI Detection Engine',
        body: 'A hybrid rule-based + ML approach cross-references DrugBank 5.0, RxNorm, and DRAP-registered formularies to screen every prescription against thousands of known drug-drug interaction pairs.',
      },
      {
        title: 'Secure Backend & Dispensing Records',
        body: 'All processed prescriptions are stored in an encrypted, structured database — drug names, dosages, DDI alerts, and pharmacist decisions — with AES-256 encryption, TLS 1.3, and role-based access control ensuring complete security and accountability.',
      },
    ],
  },
  allFeatures: features, // reuse features array
}

// ─────────────────────────────────────────────────────────────────
// TEAM PAGE
// ─────────────────────────────────────────────────────────────────
export const team = {
  hero: {
    tag: 'The Team',
    headline: 'Domain Meets Technology',
    subheadline:
      'meDDI AI is built by founders and engineers with deep roots in AI research and healthcare — backed by advisors who bring hospital access, industry experience, and regulatory expertise.',
  },
  members: [
    // ── Founding Team ──────────────────────────────
    {
      name: 'Dr. Ahmar Rashid',
      role: 'Founder & CEO',
      title: 'Full Professor & former Dean, GIK Institute',
      institution: 'GIK Institute of Engineering Sciences and Technology',
      email: 'ahmar.rashid@giki.edu.pk',
      initials: 'AR',
      color: 'orange',
      group: 'founder',
      bio: 'Dr. Ahmar Rashid is a Full Professor and former Dean at GIK Institute with 20+ years in AI/ML research. A Meta AI Master Trainer, he has led funded AI medical diagnostics research and brings deep technical authority and institutional credibility to meDDI AI.',
      expertise: ['AI / ML Research', 'Healthcare AI', 'Meta AI Master Trainer', 'Research Leadership'],
      grants: [],
    },
    {
      name: 'Muhammad Zaid Mohsin',
      role: 'Co-Founder & CTO',
      title: 'BS Computer Science, GIK Institute',
      institution: 'GIK Institute of Engineering Sciences and Technology',
      email: '',
      initials: 'ZM',
      color: 'teal',
      group: 'founder',
      bio: "Zaid architected meDDI AI's full AI/ML backend stack. He has published 5 IEEE papers and delivered a 5× inference latency gain using vLLM and INT8 quantization. He has research experience at the University of Europe and works across FastAPI and QLoRA fine-tuning pipelines.",
      expertise: ['AI/ML Backend', 'FastAPI', 'vLLM · QLoRA', '5 IEEE Papers'],
      grants: [],
    },
    {
      name: 'Haider Ali Khan',
      role: 'Co-Founder & Product Lead',
      title: 'BS Computer Science, GIK Institute',
      institution: 'GIK Institute of Engineering Sciences and Technology',
      email: '',
      initials: 'HAK',
      color: 'violet',
      group: 'founder',
      bio: "Haider leads meDDI AI's mobile app architecture and UX design. He owns the doctor- and pharmacist-facing product roadmap and has driven the end-to-end meDDI app development lifecycle — from wireframe to production.",
      expertise: ['Mobile Architecture', 'UX Design', 'Product Strategy', 'Flutter'],
      grants: [],
    },
    // ── Core Team ──────────────────────────────────
    {
      name: 'Ali Faisal',
      role: 'Lead AI Engineer',
      title: 'BS Computer Science, GIK Institute',
      institution: 'GIK Institute of Engineering Sciences and Technology',
      email: '',
      initials: 'AF',
      color: 'blue',
      group: 'core',
      bio: "Ali leads meDDI AI's fine-tuning pipelines and data annotation workflows. He drives ML model training for OCR and DDI detection, and handles healthcare AI dataset curation and labeling — directly shaping the accuracy of the system's core capabilities.",
      expertise: ['Fine-tuning Pipelines', 'Data Annotation', 'OCR · DDI Models', 'Dataset Curation'],
      grants: [],
    },
    // ── Advisors & Partners ────────────────────────
    {
      name: 'M. Mohsin Zafar',
      role: 'Technical Advisor',
      title: 'Sr. Software Engineer · PIEAS MS CS, NUST BE',
      institution: 'Independent',
      email: '',
      initials: 'MZ',
      color: 'amber',
      group: 'advisor',
      bio: 'Mohsin is a senior software engineer who led a 200K+ users/month SaaS platform (UltraCodes). A CV & 3D ML researcher and ex-Lecturer at GIKI, he advises meDDI AI on technical architecture, scalability, and product commercialization.',
      expertise: ['SaaS Architecture', 'CV & 3D ML', 'Scalability', 'Tech Commercialization'],
      grants: [],
    },
    {
      name: 'Dr. Usman Zafar',
      role: 'Data & Domain Partner',
      title: 'Medical Superintendent · Assoc. Prof. of Medicine',
      institution: 'Secondary-care Hospital, Pakistan',
      email: '',
      initials: 'UZ',
      color: 'green',
      group: 'advisor',
      bio: "Dr. Usman is the Medical Superintendent of a secondary-care hospital and an Associate Professor of Medicine. As Vice Chairman of Alkhidmat, he brings deep expertise in pharmacotherapy and clinical patient safety — grounding meDDI AI in authentic clinical reality.",
      expertise: ['Clinical Patient Safety', 'Pharmacotherapy', 'Hospital Operations', 'Medical Research'],
      grants: [],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────
// CASE STUDIES PAGE
// ─────────────────────────────────────────────────────────────────
export const caseStudies = {
  hero: {
    tag: 'Case Studies',
    headline: 'Real Impact Across Pakistan',
    subheadline:
      'From high-volume urban pharmacies to rural clinics — meDDI AI is being piloted where it matters most.',
  },
  studies: [
    {
      id: 'Rawalpindi',
      tag: 'Al Raazi Hospital Pharmacy — Rawalpindi',
      title: 'High-Volume Dispensing, Diverse Handwriting',
      challenge:
        'A busy urban pharmacy in Lahore handles 80–100 prescriptions daily from dozens of different physicians. Handwriting quality varies enormously — from neat printed text to nearly illegible cursive — and bilingual (Urdu/English) prescriptions are the norm.',
      solution:
        'meDDI AI deployed on pharmacy-issued Android tablets. The VLM recognised 94.8% of prescriptions accurately, flagging 12 DDI events over a 4-week pilot — including 2 classified as clinically significant (potential harm).',
      results: [
        { metric: '94.8%', label: 'Prescription recognition accuracy' },
        { metric: '12', label: 'DDI events flagged in 4 weeks' },
        { metric: '2', label: 'Clinically significant interactions caught' },
        { metric: '3.2 min', label: 'Average time saved per prescription' },
      ],
      quote: {
        text: "We handle so many prescriptions from so many doctors. meDDI AI catches what we might miss when we're rushed.",
        author: 'Senior Pharmacist, Al Raazi Hospital Pharmacy',
      },
    },
    // {
    //   id: 'periurban-rawalpindi',
    //   tag: 'Peri-Urban Pharmacy — Rawalpindi',
    //   title: 'Connectivity Challenges, Offline-First Success',
    //   challenge:
    //     'A peri-urban pharmacy operating on the outskirts of Rawalpindi faced inconsistent internet connectivity — meaning cloud-based OCR solutions were not viable. Manual reading of prescriptions led to an estimated 8–10% error rate.',
    //   solution:
    //     "meDDI AI's offline-first TensorFlow Lite deployment ran entirely on a mid-range Android device. Zero internet required. The pharmacist could read and verify every prescription in under 3 seconds, even during full connectivity outages.",
    //   results: [
    //     { metric: '0%', label: 'Downtime due to connectivity' },
    //     { metric: '96.1%', label: 'Offline recognition accuracy' },
    //     { metric: '~8%', label: 'Estimated reduction in dispensing errors' },
    //     { metric: '<3s', label: 'Average per-prescription processing time' },
    //   ],
    //   quote: {
    //     text: "We have no reliable internet here. Knowing this works completely offline made all the difference.",
    //     author: 'Pharmacist, Rawalpindi Peri-Urban Site',
    //   },
    // },
    // {
    //   id: 'rural-swabi',
    //   tag: 'Rural Clinic — Swabi',
    //   title: 'Resource-Constrained, Maximum Safety Impact',
    //   challenge:
    //     'A rural health clinic in Swabi serves a mixed urban-rural population, with a single pharmacist managing all dispensing. Prescriptions from local practitioners often include Urdu-transliterated drug names and non-standard abbreviations unfamiliar to standard OCR tools.',
    //   solution:
    //     "meDDI AI's bilingual VLM — trained specifically on Pakistan's regional prescribing patterns — handled the Urdu-English mixed content seamlessly. The pharmacist received DDI alerts for 3 combinations, all of which were subsequently reviewed and modified by the prescribing physician.",
    //   results: [
    //     { metric: '3', label: 'DDI alerts leading to prescription change' },
    //     { metric: '91.4%', label: 'Accuracy on Urdu-English mixed content' },
    //     { metric: '100%', label: 'Alert follow-up rate by physicians' },
    //     { metric: '1 device', label: 'Mid-range Android, no infrastructure cost' },
    //   ],
    //   quote: {
    //     text: "Three times, the doctor changed the prescription based on the alert. Three patients were protected from potential harm.",
    //     author: 'Clinic Administrator, Swabi Rural Site',
    //   },
    // },
  ],
  riskSection: {
    headline: 'The Cost of Doing Nothing',
    body: "Every day a pharmacist in Pakistan dispenses medication from a handwritten note they can't fully read — 37 times. Without real-time DDI screening, nearly a third of adverse drug reactions go undetected until a patient is already harmed.",
    stats: [
      { value: '1 in 10', label: 'hospital patients experience a medication error', color: 'red' },
      { value: '~30%', label: 'of adverse reactions caused by drug-drug interactions', color: 'orange' },
      { value: '65–70%', label: 'current OCR accuracy — with no clinical context at all', color: 'yellow' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────
// CONTACT PAGE
// ─────────────────────────────────────────────────────────────────
export const contactPage = {
  hero: {
    tag: 'Get in Touch',
    headline: 'Request a Demo or Ask a Question',
    subheadline:
      'We work with pharmacies, hospitals, and healthcare organisations across Pakistan. Reach out to request a live demo or learn more about meDDI AI.',
  },
  reasons: [
    { title: 'Request a Demo', body: 'See meDDI AI live with your own prescriptions in under 30 minutes.' },
    { title: 'Partner With Us', body: 'We are actively seeking pilot pharmacy and hospital partners.' },
    { title: 'Research Enquiry', body: 'Collaborate on clinical validation or academic research.' },
    { title: 'General Inquiry', body: 'Any other question — we respond to all messages within 48 hours.' },
  ],
  form: {
    roles: [
      'Pharmacist / Pharmacy Manager',
      'Physician / Clinician',
      'Hospital Administrator',
      'Healthcare Researcher',
      'Government / Policy',
      'Investor',
      'Press / Media',
      'Other',
    ],
  },
  info: {
    email: 'admin@meddiai.com',
    responseTime: 'We respond to all enquiries within 48 hours.',
  },
}

// ─────────────────────────────────────────────────────────────────
// MAILER ENDPOINT
// After deploying mailer-api/ to Vercel, paste the function URL here.
// Format: https://<your-vercel-project>.vercel.app/api/mailer
// Or use a custom subdomain: https://api.meddiai.com/api/mailer
// ─────────────────────────────────────────────────────────────────
export const mailerEndpoint = 'https://meddiai.vercel.app/api/mailer'

// ─────────────────────────────────────────────────────────────────
// PRIVACY POLICY
// ─────────────────────────────────────────────────────────────────
export const privacyPolicy = {
  lastUpdated: 'February 2026',
  sections: [
    {
      title: '1. Information We Collect',
      body: 'meDDI AI collects only the information necessary to operate the platform safely and effectively. This includes: (a) email addresses submitted via our waitlist or contact forms; (b) usage analytics (anonymised, no personally identifiable information); (c) prescription images processed through the app — these are processed on-device and are never uploaded to our servers unless you explicitly opt in to our research programme.',
    },
    {
      title: '2. How We Use Your Information',
      body: 'Email addresses are used solely to send product updates, early-access notifications, and responses to your enquiries. We do not sell, rent, or share personal information with third parties for marketing purposes. Anonymised usage data is used to improve the product.',
    },
    {
      title: '3. Data Security',
      body: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement OAuth 2.0 authentication, role-based access control (RBAC), and maintain comprehensive audit logs. Our infrastructure follows industry-standard security practices.',
    },
    {
      title: '4. Prescription Data',
      body: 'By default, meDDI AI processes prescription images entirely on-device. No prescription data leaves your device. If you opt into our research programme, de-identified prescription data may be used to improve model accuracy — you can withdraw consent at any time.',
    },
    {
      title: '5. Cookies',
      body: 'Our website uses minimal cookies strictly necessary for functionality (e.g., remembering your preferences). We do not use tracking or advertising cookies. You can disable cookies in your browser settings.',
    },
    {
      title: '6. Your Rights',
      body: 'You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, contact us at admin@meddiai.com. We will respond within 30 days.',
    },
    {
      title: '7. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will notify registered users of significant changes via email. Continued use of the platform after changes constitutes acceptance of the updated policy.',
    },
    {
      title: '8. Contact',
      body: 'For privacy-related enquiries, contact: admin@meddiai.com',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────
// TERMS OF SERVICE
// ─────────────────────────────────────────────────────────────────
export const termsOfService = {
  lastUpdated: 'February 2026',
  sections: [
    {
      title: '1. Acceptance of Terms',
      body: 'By accessing or using meDDI AI ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.',
    },
    {
      title: '2. Description of Service',
      body: 'meDDI AI is an AI-powered prescription safety platform that reads handwritten prescriptions and screens for drug-drug interactions. The Service is intended as a decision-support tool for qualified healthcare professionals and does not replace clinical judgement.',
    },
    {
      title: '3. Clinical Disclaimer',
      body: 'meDDI AI is a decision-support tool, not a substitute for professional medical or pharmaceutical judgement. All prescription dispensing decisions must be made by qualified and licensed healthcare professionals. meDDI AI does not accept liability for clinical decisions made on the basis of its output.',
    },
    {
      title: '4. Permitted Use',
      body: 'The Service may be used only by licensed pharmacists, physicians, and authorised healthcare workers. Unauthorised use, reverse engineering, or reproduction of the Service or its data is strictly prohibited.',
    },
    {
      title: '5. Accuracy',
      body: 'While meDDI AI achieves high recognition accuracy in pilot testing, no AI system is infallible. Users must apply professional judgement and verify all outputs before acting on them. We continually work to improve accuracy but do not warrant error-free performance.',
    },
    {
      title: '6. Intellectual Property',
      body: 'All intellectual property rights in the Service, including software, models, databases, and documentation, are owned by meDDI AI and its partners. Nothing in these Terms grants you any right to use our IP beyond operating the Service as intended.',
    },
    {
      title: '7. Limitation of Liability',
      body: 'To the maximum extent permitted by law, meDDI AI shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.',
    },
    {
      title: '8. Governing Law',
      body: 'These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of KPK, Pakistan.',
    },
    {
      title: '9. Changes to Terms',
      body: 'We reserve the right to modify these Terms at any time. Continued use of the Service after notification of changes constitutes your acceptance of the updated Terms.',
    },
    {
      title: '10. Contact',
      body: 'For questions about these Terms, contact: admin@meddiai.com',
    },
  ],
}
