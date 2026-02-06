import { motion } from 'framer-motion'

const gentle = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
}

function SoftDivider() {
  return (
    <div className="px-8 md:px-16">
      <div className="h-px bg-gradient-to-r from-[var(--color-wh-sage)] via-[var(--color-wh-sage)] to-transparent opacity-30" />
    </div>
  )
}

export default function Design5() {
  return (
    <div className="min-h-screen bg-[var(--color-wh-cream)] text-[var(--color-wh-bark)] overflow-x-hidden">

      {/* Subtle organic shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--color-wh-forest) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--color-wh-warm) 0%, transparent 70%)' }} />
      </div>

      {/* === HEADER === */}
      <header className="relative z-10 px-8 md:px-16 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-wh-forest)]" />
          <span className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium">BTB AI</span>
        </div>
        <a href="https://cal.com/btb-ai/follow-up" target="_blank" rel="noopener"
          className="font-[family-name:var(--font-karla)] text-[11px] text-[var(--color-wh-forest)] opacity-60 hover:opacity-100 transition-opacity duration-500 no-underline"
        >
          Schedule a call &rarr;
        </a>
      </header>

      {/* === HERO — fully centered === */}
      <section className="relative z-10 px-8 md:px-16 pt-20 md:pt-36 pb-28">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={gentle} custom={0}
            className="inline-flex items-center gap-2 bg-[var(--color-wh-sand)] rounded-full px-4 py-1.5 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-wh-forest)]" />
            <span className="font-[family-name:var(--font-karla)] text-[11px] text-[var(--color-wh-forest)] font-medium">Prepared for Dalton &amp; Tangram 3DS &mdash; February 2026</span>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={gentle} custom={1}
            className="font-[family-name:var(--font-baskerville)] text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.15] mb-8 text-center"
          >
            More web &amp; branding clients,<br />
            <span className="text-[var(--color-wh-forest)] italic">without more headcount.</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={gentle} custom={2}
            className="font-[family-name:var(--font-karla)] text-base md:text-lg leading-[1.8] text-[var(--color-wh-bark)] opacity-60 mb-10 text-center"
          >
            Hey Dalton &mdash; thanks again for your time. Below is everything you asked for: who we are, what we'd actually do for Tangram 3DS, recent results, and how we'd get started. I tried to keep it simple but let me know if you have any questions.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={gentle} custom={3} className="flex flex-col sm:flex-row gap-4">
            <a href="#results"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] font-[family-name:var(--font-karla)] text-sm font-medium rounded-lg hover:bg-[var(--color-wh-forest-light)] transition-colors duration-300 no-underline"
            >
              See recent results
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
            <a href="#get-started"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-wh-sage)] text-[var(--color-wh-bark)] font-[family-name:var(--font-karla)] text-sm font-medium rounded-lg hover:border-[var(--color-wh-forest)] transition-colors duration-300 no-underline"
            >
              Jump to pricing
            </a>
          </motion.div>
        </div>
      </section>

      <SoftDivider />

      {/* === WHERE TANGRAM IS TODAY — asymmetric left/right === */}
      <section className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium block mb-8"
          >
            Where You Are Today
          </motion.span>

          <div className="grid md:grid-cols-5 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
              className="md:col-span-3"
            >
              <h2 className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3] mb-6">
                Exceptional work, no bandwidth to grow.
              </h2>
              <p className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.9] opacity-55">
                You mentioned your web and branding team is running at full capacity &mdash; two people across twelve projects. You want to take on more web and branding work, but you can't say yes to new projects when there's nobody to execute them.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={2}
              className="md:col-span-2"
            >
              <div className="bg-[var(--color-wh-sand)] rounded-2xl p-8 space-y-6">
                {[
                  { val: '12', label: 'Active web projects', sub: 'at full capacity' },
                  { val: '2', label: 'Team members', sub: 'managing everything' },
                  { val: '85%', label: 'Real estate focus', sub: 'your core market' },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-baskerville)] text-3xl text-[var(--color-wh-forest)] leading-none">{s.val}</span>
                    <div>
                      <p className="font-[family-name:var(--font-karla)] text-sm font-medium">{s.label}</p>
                      <p className="font-[family-name:var(--font-karla)] text-[11px] opacity-40">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* === WHAT WE DO — Three service pillars === */}
      <section className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3] mb-4 text-center"
          >
            Three ways we plug into your business.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {/* Cold Email Outreach */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={1}
              className="bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] rounded-2xl p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(168,181,160,0.2)] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[var(--color-wh-sage)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5"/>
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-baskerville)] text-xl mb-3">Cold Email Outreach</h3>
              <div className="space-y-2 mb-6 flex-1">
                {['Email infrastructure setup', 'Targeted prospect lists', 'Personalization (when applicable)', 'Copy &amp; offer partnership', 'Analytics &amp; reporting'].map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-wh-sage)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[12px] text-[var(--color-wh-sage)] leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-[rgba(168,181,160,0.15)]">
                <p className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase text-[var(--color-wh-sage)] opacity-50 mb-2">Clients</p>
                <p className="font-[family-name:var(--font-karla)] text-[12px] text-[var(--color-wh-sage)] opacity-70 leading-[1.6]">
                  Basin Ventures, Coggno, Adspace, Applied Learning Technology Academy, True North PMP Consulting
                </p>
              </div>
            </motion.div>

            {/* Sales Systems */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={2}
              className="bg-[var(--color-wh-sand)] text-[var(--color-wh-bark)] rounded-2xl p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-wh-cream)] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[var(--color-wh-forest)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-baskerville)] text-xl mb-3">Sales Systems</h3>
              <div className="space-y-2 mb-6 flex-1">
                {['Call prep documents', 'Reply handling &amp; qualification', 'CRM buildout &amp; organization', 'Pipeline tracking &amp; follow-up'].map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[12px] opacity-55 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-[var(--color-wh-sage)] border-opacity-20">
                <p className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase opacity-30 mb-2">Clients</p>
                <p className="font-[family-name:var(--font-karla)] text-[12px] opacity-45 leading-[1.6]">
                  Basin Ventures, Coggno, Meydenbauer Partners, The Healthplex
                </p>
              </div>
            </motion.div>

            {/* Process Automation */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={3}
              className="bg-[var(--color-wh-sand)] text-[var(--color-wh-bark)] rounded-2xl p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-wh-cream)] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[var(--color-wh-forest)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-baskerville)] text-xl mb-3">Process Automation</h3>
              <div className="space-y-2 mb-6 flex-1">
                {['CRM automations &amp; workflows', 'Call transcription bank', 'Accessible context for content', 'Custom integrations'].map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[12px] opacity-55 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-[var(--color-wh-sage)] border-opacity-20">
                <p className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase opacity-30 mb-2">Clients</p>
                <p className="font-[family-name:var(--font-karla)] text-[12px] opacity-45 leading-[1.6]">
                  Kyle Hunt (Agency Operators), Meydenbauer Partners, Applied Learning Technology Academy, The Healthplex
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* === WHAT WE'D DO — centered header, side-by-side cards === */}
      <section className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium mb-4"
          >
            What We'd Build For Tangram 3DS
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3] mb-4 text-center"
          >
            Full-service cold email infrastructure.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={2}
            className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.8] opacity-55 max-w-2xl text-center mb-16"
          >
            We don't just send emails &mdash; we build the entire engine from scratch and manage it end to end. You get qualified meetings on your calendar. That's it.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Infrastructure Build */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={1}
              className="bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] rounded-2xl p-8 md:p-10"
            >
              <span className="font-[family-name:var(--font-karla)] text-[11px] tracking-wider uppercase opacity-50 font-medium">The Build</span>
              <h3 className="font-[family-name:var(--font-baskerville)] text-xl mt-3 mb-4">Infrastructure &amp; Setup</h3>
              <p className="font-[family-name:var(--font-karla)] text-[14px] leading-[1.8] opacity-70 mb-6">
                We set up everything from the ground up so your sending reputation stays clean and your main domain is never at risk.
              </p>
              <div className="space-y-3">
                {[
                  'Secondary domain &amp; email account setup',
                  'Warmup &amp; deliverability optimization',
                  'Prospect list building (architects, developers, brokers, owners)',
                  'Integration with your current CRM',
                  'Dedicated sending infrastructure',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-wh-sage)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[13px] text-[var(--color-wh-sage)]" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ongoing Management */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={2}
              className="bg-[var(--color-wh-sand)] text-[var(--color-wh-bark)] rounded-2xl p-8 md:p-10"
            >
              <span className="font-[family-name:var(--font-karla)] text-[11px] tracking-wider uppercase opacity-50 font-medium">The Management</span>
              <h3 className="font-[family-name:var(--font-baskerville)] text-xl mt-3 mb-4">Copy, Campaigns &amp; Replies</h3>
              <p className="font-[family-name:var(--font-karla)] text-[14px] leading-[1.8] opacity-60 mb-6">
                We partner with you on the messaging, then handle everything from there &mdash; sending, monitoring, and managing every reply.
              </p>
              <div className="space-y-3">
                {[
                  'Partner on copy &amp; offer creation (your voice, your services)',
                  'A/B testing subject lines &amp; sequences',
                  'Reply handling &amp; lead qualification',
                  'Qualified leads handed off directly to you',
                  'Weekly reporting on opens, replies &amp; meetings booked',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[13px] opacity-55" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* === HOW IT WORKS — fully centered with centered cards === */}
      <section className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium mb-4"
          >
            Your Workflow
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3] mb-4 text-center"
          >
            What this looks like day-to-day.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={2}
            className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.8] opacity-55 mb-16 max-w-lg text-center"
          >
            You stay focused on your 12 projects. We fill your pipeline in the background. When a lead is qualified, you take the meeting.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {[
              { n: '1', t: 'We Build', d: 'Domains, email accounts, prospect lists, CRM integration — all set up for you.' },
              { n: '2', t: 'We Send', d: 'Targeted campaigns go out to CRE prospects who need web & branding work.' },
              { n: '3', t: 'We Qualify', d: 'We handle every reply and only pass you leads that are a real fit.' },
              { n: '4', t: 'You Close', d: 'Qualified meetings land on your calendar. You sell it, we help build it.' },
            ].map((s, i) => (
              <motion.div key={s.n} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={i + 1}
                className="bg-[var(--color-wh-sand)] rounded-xl p-6 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-wh-cream)] flex items-center justify-center mb-4">
                  <span className="font-[family-name:var(--font-baskerville)] text-lg text-[var(--color-wh-forest)]">{s.n}</span>
                </div>
                <h4 className="font-[family-name:var(--font-baskerville)] text-lg mb-2">{s.t}</h4>
                <p className="font-[family-name:var(--font-karla)] text-[12px] opacity-50 leading-[1.7]">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* === RECENT RESULTS — left-aligned header with right badge, cards left-aligned (intentional contrast) === */}
      <section id="results" className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
              className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3]"
            >
              Recent results.
            </motion.h2>
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
              className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium shrink-0"
            >
              Last Two Weeks
            </motion.span>
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.8] opacity-55 mb-12 max-w-2xl"
          >
            Below are actual results from campaigns we've run in the last two weeks. These are real numbers, not projections. If you want more examples or want to talk through any of these in detail, just reach out &mdash; happy to walk through them.
          </motion.p>

          <div className="space-y-6">
            {/* Coggno */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={0}
              className="bg-[var(--color-wh-sand)] rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <span className="font-[family-name:var(--font-baskerville)] text-4xl md:text-5xl text-[var(--color-wh-forest)]">95</span>
                <p className="font-[family-name:var(--font-karla)] text-[11px] uppercase tracking-wider opacity-40 mt-1">Replies generated</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-[family-name:var(--font-baskerville)] text-lg mb-1">Coggno</h3>
                <p className="font-[family-name:var(--font-karla)] text-sm text-[var(--color-wh-forest)] font-medium mb-3">95 replies in less than 2 weeks</p>
                <p className="font-[family-name:var(--font-karla)] text-[13px] opacity-50 leading-[1.8]">
                  Full cold email infrastructure build and campaign launch. From zero sending infrastructure to 95 engaged replies in under 14 days.
                </p>
              </div>
            </motion.div>

            {/* Basin Ventures */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={1}
              className="bg-[var(--color-wh-sand)] rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <span className="font-[family-name:var(--font-baskerville)] text-4xl md:text-5xl text-[var(--color-wh-forest)]">10</span>
                <p className="font-[family-name:var(--font-karla)] text-[11px] uppercase tracking-wider opacity-40 mt-1">Opportunities in 1 week</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-[family-name:var(--font-baskerville)] text-lg mb-1">Basin Ventures</h3>
                <p className="font-[family-name:var(--font-karla)] text-sm text-[var(--color-wh-forest)] font-medium mb-3">10 qualified opportunities generated in one week</p>
                <p className="font-[family-name:var(--font-karla)] text-[13px] opacity-50 leading-[1.8]">
                  Same playbook &mdash; infrastructure, targeting, copy, and reply management. 67 replies and 10 real opportunities in the first 7 days of sending.
                </p>
              </div>
            </motion.div>

            {/* You :) */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={2}
              className="bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <span className="font-[family-name:var(--font-baskerville)] text-4xl md:text-5xl text-[var(--color-wh-sage)]">1</span>
                <p className="font-[family-name:var(--font-karla)] text-[11px] uppercase tracking-wider opacity-50 mt-1">Meeting booked</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-[family-name:var(--font-baskerville)] text-lg mb-1 text-[var(--color-wh-sage)]">You :)</h3>
                <p className="font-[family-name:var(--font-karla)] text-sm text-[var(--color-wh-sage)] font-medium mb-3">Cold email &rarr; this call &rarr; this page</p>
                <p className="font-[family-name:var(--font-karla)] text-[13px] opacity-70 leading-[1.8]">
                  You're looking at the proof right now. We reached out cold, you took the meeting, and now here we are. That's exactly what we'd do for your prospects.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={3}
            className="font-[family-name:var(--font-karla)] text-[14px] leading-[1.8] opacity-45 mt-8 text-center italic"
          >
            Feel free to reach back out if you need more examples &mdash; happy to share whatever's helpful.
          </motion.p>
        </div>
      </section>

      <SoftDivider />

      {/* === GET STARTED — centered header, green box with internal layout, centered pricing cards === */}
      <section id="get-started" className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-karla)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-wh-forest)] font-medium mb-4"
          >
            Getting Started
          </motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl leading-[1.3] mb-4 text-center"
          >
            First engagement is on us.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={2}
            className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.8] opacity-55 max-w-2xl text-center mb-12"
          >
            I'd rather show you how this works than tell you. The first engagement is free &mdash; no contracts, no risk. We'll use a 3-week warmup period to build your prospect lists, write copy, set up domains, and warm the sending infrastructure. Then we launch and you see results firsthand before deciding if it makes sense to continue.
          </motion.p>

          {/* Free pilot box */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={3}
            className="bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] rounded-2xl p-8 md:p-12 mb-12 w-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 bg-[rgba(168,181,160,0.2)] rounded-full">
                <span className="font-[family-name:var(--font-karla)] text-[11px] tracking-wider uppercase text-[var(--color-wh-sage)] font-medium">Free</span>
              </div>
              <span className="font-[family-name:var(--font-karla)] text-[13px] opacity-60">First engagement &mdash; no strings attached &mdash; 3-week warmup period</span>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-[family-name:var(--font-baskerville)] text-lg mb-5 text-[var(--color-wh-sage)]">What You Get</h4>
                {[
                  'Full cold email infrastructure built from scratch',
                  'Secondary domains & email accounts set up',
                  'Prospect list targeting CRE web/branding buyers',
                  'Initial campaign copy written & launched',
                  '5-15 qualified leads delivered to you',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 mb-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-wh-sage)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[13px] opacity-80">{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-baskerville)] text-lg mb-5 text-[var(--color-wh-sage)]">What We'd Need From You</h4>
                {[
                  'A quick call to align on targeting & messaging',
                  'Your services, pricing, and ideal client profile',
                  'Access to your CRM for lead handoff (if applicable)',
                  'Feedback on the first batch of replies',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 mb-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-wh-sage)] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span className="font-[family-name:var(--font-karla)] text-[13px] opacity-70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ongoing pricing */}
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={4}
            className="font-[family-name:var(--font-karla)] text-[13px] opacity-40 uppercase tracking-[0.15em] mb-8 text-center"
          >
            If you like what you see, here's how ongoing works
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 w-full">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={5}
              className="bg-[var(--color-wh-sand)] rounded-xl p-8 flex flex-col items-center text-center"
            >
              <span className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase font-medium opacity-40">Monthly Retainer</span>
              <p className="font-[family-name:var(--font-baskerville)] text-3xl text-[var(--color-wh-forest)] mt-3 mb-2">$2,000<span className="font-[family-name:var(--font-karla)] text-sm opacity-50">/mo</span></p>
              <p className="font-[family-name:var(--font-karla)] text-[13px] opacity-50 mb-3">Full-service cold email &mdash; infrastructure, campaigns, copy, reply handling, CRM integration, reporting. Everything.</p>
              <p className="font-[family-name:var(--font-karla)] text-[11px] text-[var(--color-wh-forest)] opacity-60">5-15 qualified leads per month</p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={gentle} custom={6}
              className="bg-[var(--color-wh-sand)] rounded-xl p-8 flex flex-col items-center text-center"
            >
              <span className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase font-medium opacity-40">Revenue Share</span>
              <p className="font-[family-name:var(--font-baskerville)] text-3xl text-[var(--color-wh-forest)] mt-3 mb-2">20–30%<span className="font-[family-name:var(--font-karla)] text-sm opacity-50"> of closed projects</span></p>
              <p className="font-[family-name:var(--font-karla)] text-[13px] opacity-50 mb-3">Only applies when we help with project fulfillment. You only pay when you get paid &mdash; fully aligned.</p>
              <p className="font-[family-name:var(--font-karla)] text-[11px] text-[var(--color-wh-forest)] opacity-60">Rev share kicks in on projects we help build</p>
            </motion.div>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* === CTA — fully centered === */}
      <section className="relative z-10 px-8 md:px-16 py-32 md:py-40">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={0}
            className="font-[family-name:var(--font-baskerville)] text-3xl md:text-4xl leading-[1.2] mb-6 text-center"
          >
            Ready when you are, <span className="italic text-[var(--color-wh-forest)]">Dalton.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={1}
            className="font-[family-name:var(--font-karla)] text-[15px] leading-[1.8] opacity-55 mb-10 max-w-md text-center"
          >
            No rush on any of this. When you're ready to talk after your Wednesday meeting, I'm here. We can walk through the details, answer any questions, and figure out if this makes sense for Tangram 3DS's 2026 plan.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={gentle} custom={2}>
            <a href="https://cal.com/btb-ai/follow-up" target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-wh-forest)] text-[var(--color-wh-cream)] font-[family-name:var(--font-karla)] text-sm font-medium rounded-lg hover:bg-[var(--color-wh-forest-light)] transition-colors duration-300 no-underline"
            >
              Schedule Follow-Up Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="relative z-10 px-8 md:px-16 pb-8">
        <div className="h-px bg-[var(--color-wh-sage)] opacity-20 mb-6" />
        <div className="flex items-center pb-16">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-wh-forest)] opacity-40" />
            <span className="font-[family-name:var(--font-karla)] text-[10px] tracking-[0.15em] uppercase opacity-30">BTB AI &times; Tangram 3DS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
