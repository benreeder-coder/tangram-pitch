import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
}

const drawLine = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const } }
}

function GridBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 8
      ctx.strokeStyle = 'rgba(42, 63, 102, 0.15)'
      ctx.lineWidth = 0.5
      const gap = 60
      for (let x = 0; x < canvas.width; x += gap) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gap) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
      // Accent crosses
      ctx.strokeStyle = 'rgba(193, 127, 78, 0.08)'
      ctx.lineWidth = 1
      for (let x = gap * 3; x < canvas.width; x += gap * 5) {
        for (let y = gap * 2; y < canvas.height; y += gap * 7) {
          ctx.beginPath(); ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(x, y - 6); ctx.lineTo(x, y + 6); ctx.stroke()
        }
      }
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative px-6 md:px-12 lg:px-20 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  )
}

function SectionLabel({ text, num }: { text: string; num: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp} custom={0}
      className="flex items-center gap-4 mb-12"
    >
      <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[var(--color-bp-copper)]">{num}</span>
      <div className="h-px flex-1 max-w-[60px] bg-[var(--color-bp-copper)] opacity-40" />
      <span className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.25em] uppercase text-[var(--color-bp-text)] opacity-50">{text}</span>
    </motion.div>
  )
}

export default function Design1() {
  return (
    <div className="min-h-screen bg-[var(--color-bp-navy)] text-[var(--color-bp-text)] overflow-x-hidden">
      <GridBg />

      {/* === HERO === */}
      <Section className="min-h-screen flex flex-col justify-center">
        <div className="relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[var(--color-bp-copper)] rounded-full" />
              <span className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.3em] uppercase text-[var(--color-bp-copper)]">
                Prepared for Tangram &mdash; February 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] mb-8"
          >
            Scaling Your<br />
            <span className="text-[var(--color-bp-copper)]">Web & Branding</span><br />
            Revenue
          </motion.h1>

          <motion.div initial="hidden" animate="visible" variants={drawLine} className="origin-left">
            <div className="h-px w-full max-w-[300px] bg-[var(--color-bp-line)]" />
          </motion.div>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="font-[family-name:var(--font-outfit)] text-base md:text-lg leading-relaxed mt-8 max-w-xl text-[var(--color-bp-text)] opacity-70"
          >
            A partnership framework for growing Tangram's web and branding division &mdash; without adding full-time headcount.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mt-10 flex gap-4">
            <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bp-copper)] text-[var(--color-bp-navy)] font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wide hover:bg-[var(--color-bp-copper-light)] transition-colors duration-300"
            >
              Schedule a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Blueprint corner marks */}
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[var(--color-bp-line)] opacity-30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[var(--color-bp-line)] opacity-30" />
      </Section>

      {/* === THE OPPORTUNITY === */}
      <Section>
        <SectionLabel text="The Opportunity" num="01" />
        <div className="relative z-10 grid md:grid-cols-2 gap-16 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light leading-snug mb-6">
              Your team is at<br /><span className="text-[var(--color-bp-copper)]">maximum capacity.</span>
            </h2>
            <p className="font-[family-name:var(--font-outfit)] text-sm leading-relaxed opacity-60">
              Two people managing twelve active web development projects. Every new lead you generate is a project you can't fulfill. Growth requires more hands — but hiring full-time is slow, expensive, and risky.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '12', label: 'Active Projects', sub: 'web & branding' },
                { num: '2', label: 'Team Members', sub: 'at capacity' },
                { num: '23', label: 'Years in Business', sub: 'established 2003' },
                { num: '85%', label: 'Real Estate', sub: 'core market' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i + 2}
                  className="p-5 border border-[var(--color-bp-line)] bg-[var(--color-bp-navy)] bg-opacity-80"
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-bp-copper)]">{stat.num}</span>
                  <p className="font-[family-name:var(--font-outfit)] text-xs tracking-wide mt-2 opacity-80">{stat.label}</p>
                  <p className="font-[family-name:var(--font-outfit)] text-[10px] mt-1 opacity-40">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* === TWO-SIDED MODEL === */}
      <Section>
        <SectionLabel text="The Model" num="02" />
        <div className="relative z-10 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-16"
          >
            Two engines.<br /><span className="text-[var(--color-bp-copper)]">One partnership.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Lead Gen */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 md:p-12 border border-[var(--color-bp-line)] relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-bp-copper)] to-transparent" />
              <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-bp-copper)] tracking-widest">ENGINE A</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mt-4 mb-4">Lead Generation</h3>
              <p className="font-[family-name:var(--font-outfit)] text-sm opacity-60 leading-relaxed mb-6">
                Targeted outreach to architects, developers, and brokers who need web and branding services for their CRE projects.
              </p>
              <ul className="space-y-3">
                {['Targeted email campaigns to CRE decision-makers', 'Lead qualification & vetting before handoff', 'Industry-specific messaging that resonates', 'Monthly pipeline reporting & optimization'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-outfit)] text-xs opacity-70">
                    <span className="w-1.5 h-1.5 bg-[var(--color-bp-copper)] rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fulfillment */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="p-8 md:p-12 border border-[var(--color-bp-line)] border-l-0 md:border-l relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-[var(--color-bp-copper)]" />
              <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-bp-copper)] tracking-widest">ENGINE B</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mt-4 mb-4">Fulfillment Support</h3>
              <p className="font-[family-name:var(--font-outfit)] text-sm opacity-60 leading-relaxed mb-6">
                Early-stage concept work and project management so your core team focuses on what they do best — final execution.
              </p>
              <ul className="space-y-3">
                {['AI-accelerated concept designs & mockups', 'Project management & timeline coordination', 'WordPress-compatible deliverables', 'Seamless handoff to your final build process'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-outfit)] text-xs opacity-70">
                    <span className="w-1.5 h-1.5 bg-[var(--color-bp-copper)] rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* === INTEGRATION WORKFLOW === */}
      <Section>
        <SectionLabel text="Integration" num="03" />
        <div className="relative z-10 max-w-5xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-6"
          >
            Built around <span className="text-[var(--color-bp-copper)]">your process.</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-[family-name:var(--font-outfit)] text-sm opacity-60 mb-16 max-w-2xl leading-relaxed"
          >
            We integrate directly with your WordPress workflow. Concept designs feed into your existing build process — no disruption to 23 years of refined methodology.
          </motion.p>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[var(--color-bp-line)] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                { step: '01', title: 'Brief', desc: 'You share project requirements and brand guidelines' },
                { step: '02', title: 'Concept', desc: 'We deliver AI-accelerated concept designs within 48hrs' },
                { step: '03', title: 'Review', desc: 'Your team selects and refines the chosen direction' },
                { step: '04', title: 'Build', desc: 'Tangram executes the final WordPress build in-house' },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i + 1}
                  className="bg-[var(--color-bp-navy)] border border-[var(--color-bp-line)] p-6 relative"
                >
                  <div className="absolute -top-3 left-6 bg-[var(--color-bp-navy)] px-2">
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-bp-copper)] tracking-widest">{s.step}</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl mt-2 mb-3">{s.title}</h4>
                  <p className="font-[family-name:var(--font-outfit)] text-xs opacity-50 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* === CASE STUDIES === */}
      <Section>
        <SectionLabel text="Track Record" num="04" />
        <div className="relative z-10 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-16"
          >
            Proven results with<br /><span className="text-[var(--color-bp-copper)]">marketing agencies.</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: 'Real Estate Marketing Agency',
                location: 'Spain',
                result: '5 landing page concepts delivered in 30 minutes',
                detail: 'AI-accelerated concept designs for a real estate lead generation platform. Client selected direction within 24 hours.',
                metrics: ['5 concepts in 30min', 'Selected same day', 'Full build in 1 week']
              },
              {
                client: 'Healthcare Services Company',
                location: 'United States',
                result: '110-question form automated & maintained',
                detail: 'Complex intake form built and integrated into GHL CRM. AI-powered update system handles iterative changes from email instructions alone.',
                metrics: ['110 questions automated', 'Updates in minutes', 'Zero manual rebuilds']
              },
              {
                client: 'Marketing Agency Portfolio',
                location: 'Multiple Clients',
                result: 'Lead generation & sales system buildout',
                detail: 'End-to-end sales pipeline automation including email outreach, lead qualification, CRM integration, and fulfillment tracking.',
                metrics: ['Automated lead follow-up', 'CRM integration', 'Pipeline reporting']
              },
            ].map((cs, i) => (
              <motion.div
                key={cs.client}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 1}
                className="border border-[var(--color-bp-line)] p-8 group hover:border-[var(--color-bp-copper)] transition-colors duration-500"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-bp-copper)] tracking-widest opacity-60">{cs.location}</span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mt-3 mb-2">{cs.client}</h3>
                <p className="font-[family-name:var(--font-outfit)] text-sm text-[var(--color-bp-copper)] font-medium mb-4">{cs.result}</p>
                <p className="font-[family-name:var(--font-outfit)] text-xs opacity-50 leading-relaxed mb-6">{cs.detail}</p>
                <div className="space-y-2 pt-4 border-t border-[var(--color-bp-line)]">
                  {cs.metrics.map(m => (
                    <div key={m} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[var(--color-bp-copper)] rounded-full" />
                      <span className="font-[family-name:var(--font-outfit)] text-[11px] opacity-70">{m}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* === PROPOSED PILOT === */}
      <Section>
        <SectionLabel text="Pilot Program" num="05" />
        <div className="relative z-10 max-w-4xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-6"
          >
            Start with a <span className="text-[var(--color-bp-copper)]">30-day pilot.</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-[family-name:var(--font-outfit)] text-sm opacity-60 mb-12 max-w-2xl leading-relaxed"
          >
            Low risk. Clear deliverables. You evaluate the quality of our work before committing to anything longer-term. No contracts, no lock-in.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="border border-[var(--color-bp-copper)] border-opacity-40 p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-6 text-[var(--color-bp-copper)]">Lead Generation Track</h4>
                <ul className="space-y-4">
                  {[
                    '15-20 qualified leads targeting CRE web/branding prospects',
                    'Custom email sequences tailored to your services',
                    'Full qualification before any lead reaches you',
                    'Weekly pipeline report with engagement metrics',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-outfit)] text-xs opacity-70 leading-relaxed">
                      <span className="w-4 h-px bg-[var(--color-bp-copper)] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-6 text-[var(--color-bp-copper)]">Fulfillment Track</h4>
                <ul className="space-y-4">
                  {[
                    'One concept design sprint for an active project',
                    'Multiple concept directions delivered within 48 hours',
                    'WordPress-ready handoff documentation',
                    'Post-sprint debrief to evaluate fit',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-outfit)] text-xs opacity-70 leading-relaxed">
                      <span className="w-4 h-px bg-[var(--color-bp-copper)] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* === PRICING === */}
      <Section>
        <SectionLabel text="Investment" num="06" />
        <div className="relative z-10 max-w-5xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-6"
          >
            Flexible structure.<br /><span className="text-[var(--color-bp-copper)]">Aligned incentives.</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-[family-name:var(--font-outfit)] text-sm opacity-60 mb-16 max-w-2xl leading-relaxed"
          >
            You profit on both sides — markup on fulfillment hours and new revenue from business that wouldn't exist without the partnership.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Fulfillment',
                price: '$110',
                unit: '/ hour',
                desc: 'Concept design, mockups, project management, and early-stage support.',
                note: 'Your rate: $190/hr — $80/hr margin on every hour',
              },
              {
                label: 'Lead Generation',
                price: '$1,500–2,000',
                unit: '/ month',
                desc: 'Targeted outreach, lead qualification, and pipeline management for web & branding projects.',
                note: 'Retainer covers campaign setup, execution, and reporting',
              },
              {
                label: 'Revenue Share',
                price: '15–20%',
                unit: 'of closed deals',
                desc: 'Percentage of revenue from new projects sourced through our lead generation efforts.',
                note: 'Only paid on deals that close — fully aligned incentives',
              },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 1}
                className="border border-[var(--color-bp-line)] p-8 hover:border-[var(--color-bp-copper)] transition-colors duration-500"
              >
                <span className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.2em] uppercase opacity-50">{p.label}</span>
                <div className="mt-4 mb-4">
                  <span className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-bp-copper)]">{p.price}</span>
                  <span className="font-[family-name:var(--font-outfit)] text-xs opacity-40 ml-2">{p.unit}</span>
                </div>
                <p className="font-[family-name:var(--font-outfit)] text-xs opacity-60 leading-relaxed mb-4">{p.desc}</p>
                <div className="pt-4 border-t border-[var(--color-bp-line)]">
                  <p className="font-[family-name:var(--font-outfit)] text-[10px] opacity-40 leading-relaxed">{p.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* === CTA === */}
      <Section className="pb-40">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.3em] uppercase text-[var(--color-bp-copper)]">Next Step</span>
          </motion.div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light mt-6 mb-6"
          >
            Let's build<br />the blueprint.
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="font-[family-name:var(--font-outfit)] text-sm opacity-50 mb-10 leading-relaxed"
          >
            Book a follow-up call to discuss the pilot program, review specific project needs, and align on the partnership structure.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-bp-copper)] text-[var(--color-bp-navy)] font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wide hover:bg-[var(--color-bp-copper-light)] transition-colors duration-300"
            >
              Schedule Follow-Up Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
            className="mt-12 flex items-center justify-center gap-4 opacity-30"
          >
            <div className="h-px w-12 bg-[var(--color-bp-line)]" />
            <span className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em]">
              BTB AI &times; TANGRAM
            </span>
            <div className="h-px w-12 bg-[var(--color-bp-line)]" />
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
