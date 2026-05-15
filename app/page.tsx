export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          HR Tool · Remote-First Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-schedule interviews<br />
          <span className="text-[#58a6ff]">across every timezone</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Google Calendar or Outlook and let our algorithm find the perfect interview slot — no more back-and-forth across 12 timezones.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start scheduling — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🌍", title: "Timezone-aware", desc: "Respects business hours for every participant, wherever they are." },
            { icon: "📅", title: "Calendar sync", desc: "Reads real availability from Google Calendar and Outlook in real time." },
            { icon: "⚡", title: "One-click invite", desc: "Sends calendar invites with video links the moment a slot is confirmed." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, no tiers</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited interview scheduling",
              "Google Calendar + Outlook sync",
              "Automatic timezone detection",
              "Video link generation (Zoom, Meet)",
              "Candidate self-scheduling page",
              "Email & Slack notifications"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which calendars are supported?",
              a: "Google Calendar and Microsoft Outlook (via Microsoft 365) are fully supported. More integrations are on the roadmap."
            },
            {
              q: "How does timezone detection work?",
              a: "We use the candidate's IP address and profile data to detect their local timezone, then cross-reference interviewer availability to find overlapping business hours."
            },
            {
              q: "Can candidates pick their own slot?",
              a: "Yes. You can send candidates a self-scheduling link that shows only slots that work for all interviewers, in the candidate's local time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} TZScheduler. Built for remote-first HR teams.
      </footer>
    </main>
  );
}
