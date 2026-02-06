import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  })
}

function GoldLine({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={`origin-left h-px bg-gradient-to-r from-[var(--color-lx-gold)] via-[var(--color-lx-gold)] to-transparent opacity-30 ${className}`}
    />
  )
}

export default function Design3() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -60])

  return (
    <div className="min-h-screen bg-[var(--color-lx-black)] text-[var(--color-lx-cream)] overflow-x-hidden">

      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--color-lx-gold) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, var(--color-lx-gold) 0%, transparent 70%)' }} />
      </div>

      {/* === TOP BAR === */}
      <motion.header
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)' }}
      >
        <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.4em] uppercase text-[var(--color-lx-gold)] opacity-70">BTB AI</span>
        <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
          className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.2em] uppercase text-[var(--color-lx-cream)] opacity-40 hover:text-[var(--color-lx-gold)] hover:opacity-100 transition-all duration-500 no-underline"
        >
          Schedule Call &rarr;
        </a>
      </motion.header>

      {/* === HERO === */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-8">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={reveal} custom={0}>
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-[var(--color-lx-gold)] opacity-50" />
              <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.4em] uppercase text-[var(--color-lx-gold)] opacity-70">
                Prepared for Tangram
              </span>
              <div className="w-8 h-px bg-[var(--color-lx-gold)] opacity-50" />
            </div>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={reveal} custom={1}
            className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,6.5vw,6rem)] font-normal leading-[1.05] tracking-tight mb-8"
          >
            Scaling Your Web<br />
            & Branding <span className="text-[var(--color-lx-gold)] italic">Revenue</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={reveal} custom={2}
            className="font-[family-name:var(--font-sora)] text-sm leading-[1.9] text-[var(--color-lx-muted)] max-w-lg mx-auto mb-12"
          >
            A partnership framework for growing Tangram's web division — without adding full-time headcount or disrupting 23 years of refined process.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={reveal} custom={3}>
            <a href="#opportunity"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 hover:opacity-100 transition-opacity duration-500 no-underline"
            >
              <span>Explore</span>
              <motion.svg
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* === THE OPPORTUNITY === */}
      <section id="opportunity" className="relative z-10 px-8 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <GoldLine className="mb-20" />

          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
                className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 block mb-6"
              >
                The Opportunity
              </motion.span>

              <div className="space-y-10 mt-12">
                {[
                  { val: '12', label: 'Active web projects' },
                  { val: '2', label: 'Team members' },
                  { val: '85%', label: 'Real estate clients' },
                ].map((s, i) => (
                  <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={i + 1}>
                    <span className="font-[family-name:var(--font-playfair)] text-5xl text-[var(--color-lx-gold)]">{s.val}</span>
                    <p className="font-[family-name:var(--font-sora)] text-[11px] mt-2 text-[var(--color-lx-muted)]">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={2}
              className="md:col-span-3"
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal leading-[1.2] mb-8">
                Your team delivers exceptional work. But every new lead is a project you <span className="italic text-[var(--color-lx-gold)]">can't take on.</span>
              </h2>
              <p className="font-[family-name:var(--font-sora)] text-sm leading-[1.9] text-[var(--color-lx-muted)]">
                Two people managing twelve active web development projects for commercial real estate clients. Growth requires additional capacity — but hiring full-time is slow, expensive, and comes with risk. The alternative is a strategic partner who understands your industry, integrates with your tools, and acts as an extension of your team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === THE MODEL === */}
      <section className="relative z-10 px-8 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <GoldLine className="mb-20" />

          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
            className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 block mb-6"
          >
            The Partnership
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={1}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal leading-[1.2] mb-20"
          >
            Two engines. One <span className="italic text-[var(--color-lx-gold)]">seamless</span> partnership.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.1)]">
            {[
              {
                tag: 'Engine One', title: 'Lead Generation',
                text: 'Targeted outreach to architects, developers, brokers, and owners who need web and branding services.',
                items: ['CRE-targeted email campaigns', 'Full lead qualification before handoff', 'Industry-specific messaging', 'Monthly pipeline analytics']
              },
              {
                tag: 'Engine Two', title: 'Fulfillment Support',
                text: 'Early-stage concept work and project management that feeds directly into your WordPress build process.',
                items: ['AI-accelerated concept designs', 'Project management & coordination', 'WordPress-compatible deliverables', 'Seamless handoff to your team']
              },
            ].map((e, i) => (
              <motion.div
                key={e.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={reveal} custom={i + 1}
                className="bg-[var(--color-lx-dark)] p-10 md:p-14"
              >
                <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-50">{e.tag}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mt-4 mb-5">{e.title}</h3>
                <p className="font-[family-name:var(--font-sora)] text-[13px] text-[var(--color-lx-muted)] leading-[1.8] mb-8">{e.text}</p>
                <div className="space-y-3">
                  {e.items.map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[var(--color-lx-gold)]" />
                      <span className="font-[family-name:var(--font-sora)] text-[12px] text-[var(--color-lx-cream)] opacity-60">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === WORKFLOW === */}
      <section className="relative z-10 px-8 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <GoldLine className="mb-20" />

          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
            className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 block mb-6"
          >
            Integration
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={1}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal leading-[1.2] mb-6"
          >
            Designed around your <span className="italic text-[var(--color-lx-gold)]">WordPress workflow.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={2}
            className="font-[family-name:var(--font-sora)] text-sm text-[var(--color-lx-muted)] leading-[1.8] mb-20 max-w-xl"
          >
            We never touch your production environment. Concepts flow into your existing builder — zero disruption to 23 years of process.
          </motion.p>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[var(--color-lx-gold)] via-[rgba(201,168,76,0.2)] to-[var(--color-lx-gold)] opacity-20" />
            <div className="grid md:grid-cols-4 gap-10">
              {[
                { n: '01', t: 'Brief', d: 'Project requirements and brand guidelines shared' },
                { n: '02', t: 'Concept', d: 'AI-accelerated directions delivered in 48 hours' },
                { n: '03', t: 'Select', d: 'Your team picks and refines the chosen concept' },
                { n: '04', t: 'Build', d: 'Tangram executes final WordPress build in-house' },
              ].map((s, i) => (
                <motion.div key={s.n} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={i + 1}>
                  <div className="w-4 h-4 rounded-full border border-[var(--color-lx-gold)] bg-[var(--color-lx-black)] relative z-10 mb-6 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-lx-gold)]" />
                  </div>
                  <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.2em] text-[var(--color-lx-gold)] opacity-50">{s.n}</span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl mt-2 mb-3">{s.t}</h4>
                  <p className="font-[family-name:var(--font-sora)] text-[12px] text-[var(--color-lx-muted)] leading-[1.7]">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CASE STUDIES === */}
      <section className="relative z-10 px-8 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <GoldLine className="mb-20" />

          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
            className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 block mb-6"
          >
            Track Record
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={1}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal leading-[1.2] mb-20"
          >
            Proven with agencies in <span className="italic text-[var(--color-lx-gold)]">real estate & beyond.</span>
          </motion.h2>

          <div className="space-y-px">
            {[
              { client: 'Real Estate Marketing Platform', loc: 'Spain', stat: '30 min', desc: '5 landing page concepts delivered in 30 minutes for a CRE lead generation platform. Selected same day, full build in one week.' },
              { client: 'Healthcare Services', loc: 'USA', stat: '110', desc: '110-question intake form automated and integrated into GHL CRM. AI-powered updates from email instructions — zero manual rebuilds.' },
              { client: 'Agency Portfolio', loc: 'Global', stat: '100%', desc: 'End-to-end sales pipeline automation: email outreach, lead qualification, CRM integration, fulfillment tracking, and performance reporting.' },
            ].map((cs, i) => (
              <motion.div
                key={cs.client}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={reveal} custom={i}
                className="grid md:grid-cols-12 gap-8 py-10 bg-[var(--color-lx-dark)] px-8 md:px-12 group hover:bg-[rgba(201,168,76,0.03)] transition-colors duration-700"
              >
                <div className="md:col-span-2 flex flex-col justify-between">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-[var(--color-lx-gold)]">{cs.stat}</span>
                  <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-wider uppercase text-[var(--color-lx-muted)] mt-2">{cs.loc}</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg mb-3">{cs.client}</h3>
                  <p className="font-[family-name:var(--font-sora)] text-[13px] text-[var(--color-lx-muted)] leading-[1.8]">{cs.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PILOT & PRICING === */}
      <section className="relative z-10 px-8 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <GoldLine className="mb-20" />

          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
            className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-gold)] opacity-60 block mb-6"
          >
            Pilot & Investment
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={1}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal leading-[1.2] mb-6"
          >
            Start with a 30-day <span className="italic text-[var(--color-lx-gold)]">pilot.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={2}
            className="font-[family-name:var(--font-sora)] text-sm text-[var(--color-lx-muted)] leading-[1.8] mb-16 max-w-xl"
          >
            Clear deliverables. No contracts. Evaluate quality before any longer commitment.
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={3}
            className="border border-[rgba(201,168,76,0.2)] p-10 md:p-14 mb-20"
          >
            <div className="grid md:grid-cols-2 gap-14">
              <div>
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--color-lx-gold)] mb-6">Lead Generation Track</h4>
                {['15-20 qualified CRE web/branding leads', 'Custom email sequences', 'Full qualification before handoff', 'Weekly pipeline reporting'].map(i => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <div className="w-3 h-px bg-[var(--color-lx-gold)] mt-2.5 shrink-0 opacity-50" />
                    <span className="font-[family-name:var(--font-sora)] text-[12px] text-[var(--color-lx-cream)] opacity-60">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--color-lx-gold)] mb-6">Fulfillment Sprint</h4>
                {['One concept sprint for an active project', 'Multiple directions in 48 hours', 'WordPress-ready handoff', 'Post-sprint debrief'].map(i => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <div className="w-3 h-px bg-[var(--color-lx-gold)] mt-2.5 shrink-0 opacity-50" />
                    <span className="font-[family-name:var(--font-sora)] text-[12px] text-[var(--color-lx-cream)] opacity-60">{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)]">
            {[
              { label: 'Fulfillment', price: '$110', unit: '/hour', note: '$80/hr margin at your $190 rate', desc: 'Concept design, mockups, PM support' },
              { label: 'Lead Generation', price: '$1.5–2K', unit: '/month', note: 'Full campaign management', desc: 'Outreach, qualification, pipeline mgmt' },
              { label: 'Revenue Share', price: '15–20%', unit: 'of closed', note: 'Aligned incentives — pay on results', desc: 'Only on deals sourced by our outreach' },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={reveal} custom={i + 1}
                className="bg-[var(--color-lx-dark)] p-10"
              >
                <span className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.2em] uppercase text-[var(--color-lx-muted)]">{p.label}</span>
                <div className="mt-5 mb-4">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-[var(--color-lx-gold)]">{p.price}</span>
                  <span className="font-[family-name:var(--font-sora)] text-xs text-[var(--color-lx-muted)] ml-2">{p.unit}</span>
                </div>
                <p className="font-[family-name:var(--font-sora)] text-[12px] text-[var(--color-lx-cream)] opacity-50 mb-3">{p.desc}</p>
                <p className="font-[family-name:var(--font-sora)] text-[10px] text-[var(--color-lx-gold)] opacity-50">{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative z-10 px-8 md:px-12 py-40 text-center">
        <div className="max-w-2xl mx-auto">
          <GoldLine className="mb-20 mx-auto max-w-[200px]" />

          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={0}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-normal leading-[1.1] mb-8"
          >
            Let's build<br />something <span className="italic text-[var(--color-lx-gold)]">remarkable.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={1}
            className="font-[family-name:var(--font-sora)] text-sm text-[var(--color-lx-muted)] leading-[1.8] mb-12"
          >
            Schedule a follow-up call to discuss the pilot, review project needs, and align on your 2026 growth strategy.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={2}>
            <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
              className="inline-flex items-center gap-3 px-10 py-4 border border-[var(--color-lx-gold)] text-[var(--color-lx-gold)] font-[family-name:var(--font-sora)] text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--color-lx-gold)] hover:text-[var(--color-lx-black)] transition-all duration-500 no-underline"
            >
              Schedule Follow-Up
            </a>
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={3}
            className="font-[family-name:var(--font-sora)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-lx-muted)] opacity-30 mt-20"
          >
            BTB AI &times; Tangram &mdash; Charlotte, NC
          </motion.p>
        </div>
      </section>
    </div>
  )
}
