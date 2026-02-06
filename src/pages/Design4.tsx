import { motion } from 'framer-motion'

const slam = {
  hidden: { opacity: 0, y: 40, skewY: 2 },
  visible: (i: number) => ({
    opacity: 1, y: 0, skewY: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  })
}

function Divider() {
  return (
    <div className="w-full h-[3px] bg-[var(--color-br-orange)]" />
  )
}

export default function Design4() {
  return (
    <div className="min-h-screen bg-[var(--color-br-black)] text-[var(--color-br-white)] overflow-x-hidden selection:bg-[var(--color-br-orange)] selection:text-black">

      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* === HERO === */}
      <section className="relative z-10 min-h-screen flex flex-col">
        <header className="px-6 md:px-10 py-6 flex items-center justify-between border-b border-[rgba(255,255,255,0.08)]">
          <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-[var(--color-br-orange)]">BTB_AI</span>
          <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)]">FEB.2026 // TANGRAM</span>
        </header>

        <div className="flex-1 flex items-center px-6 md:px-10">
          <div className="w-full max-w-7xl">
            <motion.div initial="hidden" animate="visible" variants={slam} custom={0}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-3 h-3 bg-[var(--color-br-orange)]" />
              <span className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.1em] text-[var(--color-br-orange)]">
                PARTNERSHIP PROPOSAL
              </span>
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" variants={slam} custom={1}
              className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,12rem)] leading-[0.85] tracking-[0.02em]"
            >
              SCALE<br />
              <span className="text-[var(--color-br-orange)]">TANGRAM</span>
            </motion.h1>

            <motion.div initial="hidden" animate="visible" variants={slam} custom={3}
              className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
            >
              <p className="font-[family-name:var(--font-space-mono)] text-[12px] leading-[1.8] text-[var(--color-br-gray)] max-w-md">
                Grow your web & branding revenue without adding headcount. Lead generation + fulfillment support in one partnership.
              </p>
              <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-br-orange)] text-black font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-wider hover:bg-[var(--color-br-white)] transition-colors duration-200 no-underline shrink-0"
              >
                BOOK CALL &rarr;
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="px-6 md:px-10 py-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-8 overflow-hidden">
          {['12 ACTIVE PROJECTS', '2 TEAM MEMBERS', '23 YEARS', '85% REAL ESTATE', '$190/HR CLIENT RATE'].map(t => (
            <span key={t} className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] whitespace-nowrap tracking-wider">{t}</span>
          ))}
        </div>
      </section>

      {/* === THE PROBLEM === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">01</span>
            <div className="w-8 h-[2px] bg-[var(--color-br-orange)]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] tracking-wider">THE_PROBLEM</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={1}>
              <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-[0.9] mb-6">
                MAX<br />CAPACITY.<br /><span className="text-[var(--color-br-orange)]">ZERO BANDWIDTH.</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={2}
              className="flex flex-col justify-end"
            >
              <p className="font-[family-name:var(--font-space-mono)] text-[12px] leading-[2] text-[var(--color-br-gray)] mb-8">
                Two people. Twelve projects. Every new lead is revenue you leave on the table. You need more hands — but hiring is slow, expensive, and risky when you're still planning your 2026 strategy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '12', label: 'ACTIVE PROJECTS' },
                  { val: '02', label: 'TEAM MEMBERS' },
                  { val: '23', label: 'YRS IN BUSINESS' },
                  { val: '85%', label: 'REAL ESTATE' },
                ].map((s, i) => (
                  <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={i + 3}
                    className="border-l-[3px] border-[var(--color-br-orange)] pl-4 py-2"
                  >
                    <span className="font-[family-name:var(--font-bebas)] text-4xl">{s.val}</span>
                    <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-wider text-[var(--color-br-gray)] mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === THE MODEL === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">02</span>
            <div className="w-8 h-[2px] bg-[var(--color-br-orange)]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] tracking-wider">THE_MODEL</span>
          </motion.div>

          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={1}
            className="font-[family-name:var(--font-bebas)] text-5xl md:text-8xl leading-[0.85] mb-16"
          >
            TWO ENGINES.<br /><span className="text-[var(--color-br-orange)]">ONE PARTNER.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-0">
            {[
              {
                tag: 'ENGINE_A', title: 'LEAD GEN', color: 'var(--color-br-orange)',
                items: ['Targeted CRE email campaigns', 'Full lead qualification', 'Industry-specific messaging', 'Monthly pipeline reporting']
              },
              {
                tag: 'ENGINE_B', title: 'FULFILLMENT', color: 'var(--color-br-white)',
                items: ['AI-accelerated concept designs', 'Project management', 'WordPress-ready deliverables', 'Seamless handoff to your team']
              },
            ].map((e, i) => (
              <motion.div
                key={e.tag}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={slam} custom={i + 1}
                className={`p-8 md:p-12 border-[3px] ${i === 0 ? 'border-[var(--color-br-orange)] bg-[var(--color-br-orange)] bg-opacity-[0.03]' : 'border-[rgba(255,255,255,0.1)]'}`}
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-wider" style={{ color: e.color, opacity: 0.6 }}>{e.tag}</span>
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl mt-3 mb-6" style={{ color: e.color }}>{e.title}</h3>
                <div className="space-y-3">
                  {e.items.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-[family-name:var(--font-space-mono)] text-[10px] mt-0.5" style={{ color: e.color, opacity: 0.5 }}>&gt;</span>
                      <span className="font-[family-name:var(--font-space-mono)] text-[12px] text-[var(--color-br-gray)] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === WORKFLOW === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">03</span>
            <div className="w-8 h-[2px] bg-[var(--color-br-orange)]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] tracking-wider">INTEGRATION</span>
          </motion.div>

          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={1}
            className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-[0.85] mb-6"
          >
            YOUR WORDPRESS.<br /><span className="text-[var(--color-br-orange)]">YOUR PROCESS.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={2}
            className="font-[family-name:var(--font-space-mono)] text-[12px] text-[var(--color-br-gray)] leading-[2] mb-16 max-w-lg"
          >
            We never touch your production environment. Concepts flow directly into your existing WordPress builder and version control.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: '01', t: 'BRIEF', d: 'You share requirements' },
              { n: '02', t: 'CONCEPT', d: 'We deliver in 48hrs' },
              { n: '03', t: 'SELECT', d: 'You pick & refine' },
              { n: '04', t: 'BUILD', d: 'You execute in WordPress' },
            ].map((s, i) => (
              <motion.div key={s.n} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={i + 1}
                className="border-t-[3px] border-[var(--color-br-orange)] pt-6"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">{s.n}</span>
                <h4 className="font-[family-name:var(--font-bebas)] text-2xl mt-2 mb-2">{s.t}</h4>
                <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CASE STUDIES === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">04</span>
            <div className="w-8 h-[2px] bg-[var(--color-br-orange)]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] tracking-wider">TRACK_RECORD</span>
          </motion.div>

          <div className="space-y-4">
            {[
              { stat: '30MIN', client: 'CRE Marketing Platform — Spain', desc: '5 landing page concepts. Selected same day. Full build in 1 week.' },
              { stat: '110Q', client: 'Healthcare Services — USA', desc: 'Automated intake form with AI-powered updates. Zero manual rebuilds.' },
              { stat: '100%', client: 'Agency Portfolio — Global', desc: 'End-to-end sales pipeline: outreach, qualification, CRM, tracking.' },
            ].map((cs, i) => (
              <motion.div
                key={cs.client}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={slam} custom={i}
                className="grid grid-cols-12 gap-4 py-6 border-b border-[rgba(255,255,255,0.06)] group hover:border-[var(--color-br-orange)] transition-colors duration-200"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-[var(--color-br-orange)]">{cs.stat}</span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-[family-name:var(--font-space-mono)] text-[12px] font-bold mb-1 tracking-wide">{cs.client}</h3>
                  <p className="font-[family-name:var(--font-space-mono)] text-[11px] text-[var(--color-br-gray)] leading-[1.7]">{cs.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PILOT & PRICING === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">05</span>
            <div className="w-8 h-[2px] bg-[var(--color-br-orange)]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)] tracking-wider">PILOT_&_PRICING</span>
          </motion.div>

          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={1}
            className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-[0.85] mb-16"
          >
            30 DAYS.<br /><span className="text-[var(--color-br-orange)]">NO LOCK-IN.</span>
          </motion.h2>

          {/* Pilot */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={2}
            className="border-[3px] border-[var(--color-br-orange)] p-8 md:p-12 mb-12"
          >
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] tracking-wider">30-DAY_PILOT</span>
            <div className="grid md:grid-cols-2 gap-10 mt-6">
              <div>
                <h4 className="font-[family-name:var(--font-bebas)] text-2xl mb-4">LEAD GEN</h4>
                {['15-20 qualified CRE leads', 'Custom email sequences', 'Full qualification', 'Weekly reporting'].map(item => (
                  <div key={item} className="flex items-start gap-2 mb-2">
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] mt-0.5">&gt;</span>
                    <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-[var(--color-br-gray)]">{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-bebas)] text-2xl mb-4">FULFILLMENT</h4>
                {['One concept sprint', 'Multiple directions in 48hrs', 'WordPress-ready handoff', 'Post-sprint debrief'].map(item => (
                  <div key={item} className="flex items-start gap-2 mb-2">
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-orange)] mt-0.5">&gt;</span>
                    <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-[var(--color-br-gray)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'FULFILLMENT', val: '$110/HR', note: '$80/hr margin at your $190 rate' },
              { label: 'LEAD_GEN', val: '$1.5-2K/MO', note: 'Full campaign management' },
              { label: 'REV_SHARE', val: '15-20%', note: 'Only on deals we source' },
            ].map((p, i) => (
              <motion.div key={p.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={i + 1}
                className="border-l-[3px] border-[var(--color-br-orange)] pl-6 py-4"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[9px] text-[var(--color-br-gray)] tracking-wider">{p.label}</span>
                <p className="font-[family-name:var(--font-bebas)] text-4xl mt-2 mb-2 text-[var(--color-br-orange)]">{p.val}</p>
                <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)]">{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <Divider />
      <section className="relative z-10 px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-7xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={0}
            className="font-[family-name:var(--font-bebas)] text-6xl md:text-[10rem] leading-[0.8] mb-8"
          >
            LET'S<br /><span className="text-[var(--color-br-orange)]">BUILD.</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slam} custom={1}
            className="flex flex-col md:flex-row md:items-center gap-6"
          >
            <a href="https://cal.com/btb-ai/disco-call" target="_blank" rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-br-orange)] text-black font-[family-name:var(--font-space-mono)] text-[12px] font-bold tracking-wider hover:bg-[var(--color-br-white)] transition-colors duration-200 no-underline"
            >
              SCHEDULE FOLLOW-UP &rarr;
            </a>
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-br-gray)]">
              BTB_AI &times; TANGRAM // CHARLOTTE, NC
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
