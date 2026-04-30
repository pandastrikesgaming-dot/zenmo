import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const features = [
  {
    title: "Class-only access",
    description:
      "Notes are visible only to verified students from the same school, class, and section.",
    accent: "from-ember/30 to-solar/20"
  },
  {
    title: "Request Notes",
    description:
      "Request notes directly from your classmates when you need help or missed a class.",
    accent: "from-blueGlow/25 to-ember/20"
  },
  {
    title: "Direct messaging",
    description:
      "Ask classmates quick questions, coordinate study plans, and follow up on shared notes.",
    accent: "from-violetGlow/25 to-blueGlow/20"
  },
  {
    title: "Organized study system",
    description:
      "Browse useful notes by classroom context so study material stays easy to find.",
    accent: "from-solar/25 to-violetGlow/20"
  }
];

const proofPoints = [
  "School-bound sharing",
  "Class and section filters",
  "Private student profiles",
  "AI study tools coming soon"
];

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="preview"
        className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-20 pt-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:pb-28"
      >
        <div className="flex flex-col justify-center animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-solar">
            Built for real classrooms
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A calmer, sharper place for the notes students already share.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
            Zenmo keeps study material in the right circle: your school, your
            class, your section. Browse uploads, view profiles, and message
            classmates without turning notes into a public network.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="group flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-3 transition duration-300 hover:border-ember/45 hover:bg-ember/[0.07]"
              >
                <span className="h-2 w-2 bg-solar shadow-[0_0_22px_rgba(255,213,106,0.55)] transition duration-300 group-hover:bg-ember" />
                <span className="text-sm font-medium text-stone-200">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-6">
          <div className="absolute inset-x-10 top-8 h-48 bg-gradient-to-r from-ember/20 via-violetGlow/20 to-blueGlow/20 blur-3xl" />
          <div className="relative border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.025] p-2 shadow-premium-card backdrop-blur">
            <div className="border border-white/10 bg-cocoa/80 p-2">
              <Image
                src="/app-preview.png"
                alt="Zenmo app preview showing note sharing dashboard"
                width={1200}
                height={780}
                priority
                className="h-auto w-full border border-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative border-y border-white/10 bg-black/20 px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Everything a class needs, without the noise.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="safety"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28"
      >
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blueGlow">
            Safety and privacy
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Notes stay inside the classroom boundary.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            Zenmo is designed around restricted access. Students discover notes
            from people who match their school, class, and section, making the
            app feel useful for collaboration while keeping study material away
            from unrelated audiences.
          </p>
        </div>

        <div className="grid gap-3 animate-fade-up">
          {["Same school", "Same class", "Same section"].map((label, index) => (
            <div
              key={label}
              className="group border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-solar/45 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-lg font-semibold text-white">
                  {label}
                </span>
                <span className="font-mono text-sm text-solar">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-ember via-solar to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section
        id="download"
        className="px-5 pb-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border border-white/10 bg-gradient-to-br from-ember/[0.16] via-white/[0.04] to-blueGlow/[0.12] p-6 shadow-soft-glow sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-solar">
              Android preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Start with the Zenmo APK.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
              Install the preview build and bring class notes, uploads,
              messages, and profiles into one focused student workspace.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-to-download"
              className="inline-flex items-center justify-center border border-solar/50 bg-solar px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Download APK
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
