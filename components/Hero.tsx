import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20"
    >
      <div className="mx-auto grid w-full max-w-[18rem] gap-10 sm:max-w-none lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
        <div className="min-w-0 animate-fade-up">
          <p className="inline-flex border border-solar/25 bg-solar/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-solar">
            School-based notes
          </p>
          <h1 className="mt-6 max-w-4xl break-words text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Notes, shared safely within your class
          </h1>
          <p className="mt-6 max-w-2xl break-words text-base leading-8 text-stone-300 sm:text-lg">
            Zenmo is a class-based note sharing app where students can upload
            notes, browse study material, and message classmates. Open Zenmo
            instantly in your browser and install it like an app using Flash
            Install. No downloads required to get started.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://zenmo-pwa.vercel.app"
              className="inline-flex items-center justify-center border border-solar/50 bg-solar px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_34px_rgba(255,213,106,0.28)]"
            >
              Open Zenmo
            </Link>
            <Link
              href="/how-to-download"
              className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
            >
              Download APK
            </Link>
          </div>
          <p className="mt-4 text-xs font-medium text-stone-400">
            Zenmo opens securely in your browser and can be installed like an app.
          </p>
        </div>

        <div className="relative min-w-0 animate-float-soft border border-white/10 bg-white/[0.035] p-4 shadow-premium-card backdrop-blur">
          <div className="grid gap-3 border border-white/10 bg-black/35 p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-400">
                  Classroom
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Grade 9 B
                </p>
              </div>
              <div className="shrink-0 border border-ember/40 bg-ember/10 px-3 py-1 text-xs font-semibold text-orange-100">
                Verified
              </div>
            </div>

            {[
              [
                "Motion and Laws of Motion",
                "Uploaded by A. Sharma \u00b7 28 notes",
                "98% match"
              ],
              [
                "Atoms and Molecules",
                "Uploaded by R. Verma \u00b7 18 notes",
                "New upload"
              ],
              [
                "Linear Equations in Two Variables",
                "Uploaded by K. Iyer \u00b7 35 notes",
                "Top saved"
              ]
            ].map(([title, notes, meta]) => (
              <div
                key={title}
                className="group grid grid-cols-[1fr_auto] gap-4 border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-solar/45 hover:bg-solar/[0.06]"
              >
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-stone-400">{notes}</p>
                </div>
                <p className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-solar">
                  {meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
