import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.33, 1, 0.68, 1] }
  })
}

function Rule({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className={`origin-left h-px bg-[var(--color-ed-rule)] ${className}`}
    />
  )
}

export default function Design2() {
  return (
    <div className="min-h-screen bg-[var(--color-ed-light)] text-[var(--color-ed-charcoal)]">

      {/* === MASTHEAD === */}
      <header className="px-8 md:px-16 pt-8">
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.4em] uppercase opacity-40">BTB AI</span>
          <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase opacity-40">Prepared for Tangram &bull; Feb 2026</span>
        </div>
        <Rule className="mt-4" />
      </header>

      {/* === HERO === */}
      <section className="px-8 md:px-16 pt-24 md:pt-36 pb-24">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <motion.p initial="hidden" animate="visible" variants={fade} custom={0}
                className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase text-[var(--color-ed-terracotta)] mb-6"
              >
                Partnership Proposal
              </motion.p>
              <motion.h1 initial="hidden" animate="visible" variants={fade} custom={1}
                className="font-[family-name:var(--font-fraunces)] text-[clamp(2.8rem,7vw,6rem)] font-light leading-[0.95] tracking-tight"
              >
                Scaling<br />
                Tangram's Web<br />
                <em className="text-[var(--color-ed-terracotta)] font-normal italic">& Branding</em> Revenue
              </motion.h1>
            </div>
            <motion.div initial="hidden" animate="visible" variants={fade} custom={3} className="md:col-span-4 pb-2">
              <p className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.8] opacity-50">
                A framework for growing your web division without adding full-time headcount — combining targeted lead generation with AI-accelerated fulfillment support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === THE OPPORTUNITY === */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
              className="md:col-span-3"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase opacity-30">01 / The Problem</span>
            </motion.div>
            <div className="md:col-span-5">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
                className="font-[family-name:var(--font-fraunces)] text-3xl md:text-[2.5rem] font-light leading-[1.15] mb-8"
              >
                Two people.<br />
                Twelve projects.<br />
                <em className="text-[var(--color-ed-terracotta)] italic">Zero bandwidth</em><br />
                for growth.
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
                className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.9] opacity-50"
              >
                Your web and branding team is producing exceptional work for commercial real estate clients — but every new lead becomes a project you can't take on. Growing this division means either hiring (slow, expensive) or finding the right partner.
              </motion.p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={3}
              className="md:col-span-4"
            >
              <div className="space-y-8 pt-4">
                {[
                  { val: '12', label: 'Active web projects at capacity' },
                  { val: '23', label: 'Years of refined methodology' },
                  { val: '85%', label: 'Revenue from real estate clients' },
                  { val: '$190', label: 'Hourly rate to clients' },
                ].map((s, i) => (
                  <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i + 3}>
                    <span className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-ed-terracotta)]">{s.val}</span>
                    <p className="font-[family-name:var(--font-manrope)] text-[11px] mt-1 opacity-40">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === TWO-SIDED MODEL === */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
              className="md:col-span-3"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase opacity-30">02 / The Model</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="md:col-span-9"
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-[2.5rem] font-light leading-[1.15]">
                One partner. <em className="text-[var(--color-ed-terracotta)] italic">Two engines.</em>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="border-t-2 border-[var(--color-ed-terracotta)] pt-8 pr-0 md:pr-16"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-ed-terracotta)]">Engine A</span>
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl mt-4 mb-5">Lead Generation</h3>
              <p className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.8] opacity-50 mb-8">
                Targeted outreach to architects, developers, brokers, and owners who need web and branding services for their CRE projects.
              </p>
              <div className="space-y-4">
                {['Targeted email campaigns to CRE decision-makers', 'Lead qualification before handoff to your team', 'Industry-specific messaging', 'Monthly pipeline reporting'].map(item => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="w-5 h-px bg-[var(--color-ed-terracotta)] mt-2.5 shrink-0" />
                    <span className="font-[family-name:var(--font-manrope)] text-[12px] opacity-60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
              className="border-t-2 border-[var(--color-ed-charcoal)] pt-8 pl-0 md:pl-16 mt-12 md:mt-0"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase opacity-40">Engine B</span>
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl mt-4 mb-5">Fulfillment Support</h3>
              <p className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.8] opacity-50 mb-8">
                Early-stage concept work and project management — an extension of your team that feeds directly into your WordPress build process.
              </p>
              <div className="space-y-4">
                {['AI-accelerated concept designs & mockups', 'Project management & coordination', 'WordPress-compatible deliverables', 'Seamless handoff to your build team'].map(item => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="w-5 h-px bg-[var(--color-ed-charcoal)] mt-2.5 shrink-0 opacity-30" />
                    <span className="font-[family-name:var(--font-manrope)] text-[12px] opacity-60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === WORKFLOW === */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
              className="md:col-span-3"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase opacity-30">03 / Integration</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="md:col-span-9"
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-[2.5rem] font-light leading-[1.15] mb-4">
                Built around <em className="text-[var(--color-ed-terracotta)] italic">your WordPress workflow.</em>
              </h2>
              <p className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.8] opacity-50 max-w-xl">
                We never disrupt your process. Concepts feed directly into your existing builder and version control system.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { num: '01', title: 'Brief', text: 'You share project requirements, brand guidelines, and any existing assets.' },
              { num: '02', title: 'Concept', text: 'We deliver multiple concept directions within 48 hours using AI-accelerated design.' },
              { num: '03', title: 'Review', text: 'Your team selects a direction. We refine based on feedback.' },
              { num: '04', title: 'Build', text: 'Tangram executes the final WordPress build in-house with full control.' },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fade} custom={i + 1}
                className={`py-8 ${i > 0 ? 'md:pl-8 md:border-l border-[var(--color-ed-rule)]' : ''} ${i < 3 ? 'md:pr-8' : ''}`}
              >
                <span className="font-[family-name:var(--font-fraunces)] text-5xl text-[var(--color-ed-terracotta)] opacity-20">{s.num}</span>
                <h4 className="font-[family-name:var(--font-fraunces)] text-xl mt-3 mb-3">{s.title}</h4>
                <p className="font-[family-name:var(--font-manrope)] text-[12px] opacity-50 leading-[1.8]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === CASE STUDIES === */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
              className="md:col-span-3"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase opacity-30">04 / Track Record</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="md:col-span-9"
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-[2.5rem] font-light leading-[1.15]">
                Results across <em className="text-[var(--color-ed-terracotta)] italic">marketing & real estate.</em>
              </h2>
            </motion.div>
          </div>

          <div className="space-y-0">
            {[
              { client: 'Real Estate Marketing Platform', loc: 'Spain', headline: '5 landing page concepts in 30 minutes', body: 'AI-accelerated concept designs for a real estate lead generation platform. Client selected a direction within 24 hours, full build completed in one week.', stat: '30 min', statLabel: 'concept delivery' },
              { client: 'Healthcare Services Company', loc: 'United States', headline: '110-question form automated & maintained', body: 'Complex intake form integrated into GHL CRM with an AI-powered update system. Changes are made from email instructions alone — zero manual rebuilds.', stat: '110', statLabel: 'questions automated' },
              { client: 'Agency Portfolio', loc: 'Multiple Markets', headline: 'End-to-end sales pipeline automation', body: 'Complete lead generation and fulfillment tracking system including email outreach, qualification, CRM integration, and performance reporting.', stat: '100%', statLabel: 'automated follow-up' },
            ].map((cs, i) => (
              <motion.div
                key={cs.client}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fade} custom={i}
                className="grid md:grid-cols-12 gap-8 py-10 border-t border-[var(--color-ed-rule)]"
              >
                <div className="md:col-span-2">
                  <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-wider uppercase opacity-30">{cs.loc}</span>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-lg mb-1">{cs.client}</h3>
                  <p className="font-[family-name:var(--font-fraunces)] text-base text-[var(--color-ed-terracotta)] italic mb-3">{cs.headline}</p>
                  <p className="font-[family-name:var(--font-manrope)] text-[12px] opacity-50 leading-[1.8]">{cs.body}</p>
                </div>
                <div className="md:col-span-4 flex md:justify-end items-start">
                  <div className="text-right">
                    <span className="font-[family-name:var(--font-fraunces)] text-5xl text-[var(--color-ed-terracotta)]">{cs.stat}</span>
                    <p className="font-[family-name:var(--font-manrope)] text-[10px] tracking-wider uppercase opacity-30 mt-1">{cs.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === PILOT + PRICING === */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
              className="md:col-span-3"
            >
              <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase opacity-30">05 / Pilot & Pricing</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="md:col-span-9"
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-[2.5rem] font-light leading-[1.15] mb-4">
                Start small. <em className="text-[var(--color-ed-terracotta)] italic">Scale with confidence.</em>
              </h2>
              <p className="font-[family-name:var(--font-manrope)] text-[13px] leading-[1.8] opacity-50 max-w-xl">
                A 30-day pilot with clear deliverables. No contracts, no lock-in — evaluate fit before committing.
              </p>
            </motion.div>
          </div>

          {/* Pilot box */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="bg-[var(--color-ed-cream)] p-10 md:p-16 mb-16"
          >
            <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-ed-terracotta)]">30-Day Pilot</span>
            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h4 className="font-[family-name:var(--font-fraunces)] text-lg mb-4">Lead Generation</h4>
                {['15-20 qualified CRE web/branding leads', 'Custom email sequences for your services', 'Full qualification before handoff', 'Weekly pipeline report'].map(item => (
                  <div key={item} className="flex items-start gap-3 mb-3">
                    <span className="w-4 h-px bg-[var(--color-ed-terracotta)] mt-2 shrink-0" />
                    <span className="font-[family-name:var(--font-manrope)] text-[12px] opacity-60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-fraunces)] text-lg mb-4">Fulfillment Sprint</h4>
                {['One concept design sprint for an active project', 'Multiple directions delivered within 48 hours', 'WordPress-ready handoff docs', 'Post-sprint debrief to evaluate fit'].map(item => (
                  <div key={item} className="flex items-start gap-3 mb-3">
                    <span className="w-4 h-px bg-[var(--color-ed-charcoal)] opacity-20 mt-2 shrink-0" />
                    <span className="font-[family-name:var(--font-manrope)] text-[12px] opacity-60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { label: 'Fulfillment', price: '$110/hr', note: 'Your rate: $190/hr — $80/hr margin', desc: 'Concept design, mockups, PM, early-stage support' },
              { label: 'Lead Gen Retainer', price: '$1.5–2K/mo', note: 'Campaign setup, execution & reporting', desc: 'Targeted outreach and pipeline management' },
              { label: 'Revenue Share', price: '15–20%', note: 'Only on deals we source — aligned incentives', desc: 'Percentage of closed projects from our leads' },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fade} custom={i + 1}
                className={`py-8 ${i > 0 ? 'md:pl-10 md:border-l border-[var(--color-ed-rule)]' : ''} ${i < 2 ? 'md:pr-10' : ''}`}
              >
                <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase opacity-30">{p.label}</span>
                <p className="font-[family-name:var(--font-fraunces)] text-3xl mt-3 mb-2">{p.price}</p>
                <p className="font-[family-name:var(--font-manrope)] text-[12px] opacity-50 mb-2 leading-relaxed">{p.desc}</p>
                <p className="font-[family-name:var(--font-manrope)] text-[10px] text-[var(--color-ed-terracotta)] opacity-70">{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule className="mx-8 md:mx-16" />

      {/* === CTA === */}
      <section className="px-8 md:px-16 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}
            className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.35em] uppercase text-[var(--color-ed-terracotta)] mb-8"
          >
            Next Step
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
            className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-light leading-[1.1] mb-8"
          >
            Ready when<br />you are, <em className="italic text-[var(--color-ed-terracotta)]">Dalton.</em>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="font-[family-name:var(--font-manrope)] text-[13px] opacity-50 leading-[1.8] mb-10 max-w-md"
          >
            Book a follow-up call to discuss the pilot, review specific project needs, and align on how we fit into your 2026 growth plan.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={3}>
            <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-ed-charcoal)] text-[var(--color-ed-light)] font-[family-name:var(--font-manrope)] text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[var(--color-ed-terracotta)] transition-colors duration-500"
            >
              Schedule Follow-Up
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="px-8 md:px-16 pb-8">
        <Rule />
        <div className="flex items-center justify-between pt-6 pb-16">
          <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.3em] uppercase opacity-20">BTB AI &times; Tangram</span>
          <span className="font-[family-name:var(--font-manrope)] text-[10px] tracking-[0.2em] opacity-20">Charlotte, NC</span>
        </div>
      </footer>
    </div>
  )
}
