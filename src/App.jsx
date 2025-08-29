import React from 'react'
import logo from './assets/logo.svg'

const NAME = "John Russo"
const BRAND = "Russo SQL Health Check"
const EMAIL = "jrusso440@gmail.com" // TODO: replace with your real email
const PHONE = "(978) 618-3917"      // TODO: replace with your real number

function Section({ id, title, children }) {
  return (
    <section id={id} className="container-narrow py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-6 text-lg leading-relaxed">{children}</div>
    </section>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <nav className="container-narrow flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <img src={logo} className="h-7 w-7" alt="logo"/>
          {BRAND}
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#how" className="hover:text-sky-600">How it works</a>
          <a href="#benefits" className="hover:text-sky-600">Benefits</a>
          <a href="#packages" className="hover:text-sky-600">Packages</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 shadow-soft">
          Book a Free Consult
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
      <div className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Make Your SQL Fly.
            <span className="block text-sky-600">Faster Queries. Lower Costs. Happier Users.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-700">
            I’m {NAME}, a database performance engineer and educator specializing in SQL Server, Oracle, PostgreSQL, and MySQL.
            I help teams eliminate slow queries and bottlenecks with practical, measurable fixes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-2xl px-5 py-3 bg-sky-600 text-white hover:bg-sky-700 shadow-soft">
              Get Your SQL Health Check
            </a>
            <a href="#packages" className="inline-flex items-center rounded-2xl px-5 py-3 border border-slate-300 hover:border-slate-400">
              See Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { title: "Analyze", desc: "Review schema, queries, index usage, and stored procedures." },
    { title: "Identify", desc: "Pinpoint bottlenecks—missing/unused indexes, parameter sniffing, bad joins." },
    { title: "Optimize", desc: "Provide scripts + changes with before/after benchmarks." }
  ]
  return (
    <Section id="how" title="How It Works">
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 p-6 hover:shadow-soft transition">
            <div className="text-sky-600 text-sm font-semibold">Step {i+1}</div>
            <div className="text-xl font-semibold mt-1">{s.title}</div>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Benefits() {
  const items = [
    ["Faster Queries", "Cut runtimes by 50%+ with covering indexes, better plans, and set-based refactors."],
    ["Lower Costs", "Reduce CPU/IO to save on cloud and licensing."],
    ["Reliable Apps", "Fewer timeouts and deadlocks under load."],
    ["Expert Insight", "Professional Health Check Report with scripts, impact estimates, and rollout plan."],
  ]
  return (
    <Section id="benefits" title="Benefits">
      <ul className="grid md:grid-cols-2 gap-4">
        {items.map(([k, v]) => (
          <li key={k} className="flex gap-3 items-start rounded-xl border border-slate-200 p-4">
            <span className="mt-1 inline-block h-3 w-3 rounded-full bg-sky-600"></span>
            <div>
              <div className="font-semibold">{k}</div>
              <div className="text-slate-600">{v}</div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Packages() {
  const tiers = [
    { name: "Basic", price: "$499", detail: "Analyze up to 5 queries + Health Check Report" },
    { name: "Standard", price: "$1,200", detail: "Full DB review, fixes, before/after metrics, follow-up call" },
    { name: "Premium", price: "$2,500+", detail: "Ongoing monthly optimization retainer" },
  ]
  return (
    <Section id="packages" title="Packages">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-200 p-6 hover:shadow-soft transition">
            <div className="text-slate-500 text-sm">{t.name}</div>
            <div className="mt-1 text-3xl font-extrabold">{t.price}</div>
            <div className="mt-3">{t.detail}</div>
            <a href="#contact" className="mt-5 inline-flex rounded-2xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 shadow-soft">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="rounded-2xl border border-slate-200 p-6">
        <p className="text-slate-700">
          {NAME} is a veteran database engineer and educator who has helped organizations across education, healthcare,
          logistics, and SaaS achieve dramatic performance improvements. Areas of focus include: query tuning,
          indexing strategy, stored procedure refactors, concurrency/locking, and data model hygiene.
        </p>
        <ul className="list-disc pl-6 mt-4 text-slate-700">
          <li>Deep expertise: SQL Server, Oracle, PostgreSQL, MySQL</li>
          <li>Specialties: parameter sniffing, deadlock reduction, indexing for heavy OLTP</li>
          <li>Educator: workshops & training on query tuning and execution plans</li>
        </ul>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-slate-200 p-6">
        <p className="text-slate-700">
          Email: <a className="text-sky-700 underline" href={"mailto:" + EMAIL}>{EMAIL}</a><br/>
          Phone: {PHONE}
        </p>
        <p className="mt-4 text-slate-600">
          Prefer a quick start? Email your environment details and your top 3 slow queries,
          and we’ll reply with next steps within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          (Tip: Replace the email/phone above by editing <code>src/App.jsx</code> constants.)
        </p>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-narrow py-10 text-sm text-slate-500 flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} {BRAND}</div>
        <div className="flex gap-4">
          <a href="#how" className="hover:text-sky-600">How</a>
          <a href="#benefits" className="hover:text-sky-600">Benefits</a>
          <a href="#packages" className="hover:text-sky-600">Packages</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
