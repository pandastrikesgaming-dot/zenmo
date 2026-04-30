import Link from "next/link";
import type { Metadata } from "next";

const faqs = [
  {
    question: "Who can see my notes?",
    answer:
      "Only verified students from the same school, class, and section can view notes shared in your classroom space."
  },
  {
    question: "How do I upload notes?",
    answer:
      "Open the upload flow in the app, choose your note file or image, add context, and publish it to your class."
  },
  {
    question: "Is my data safe?",
    answer:
      "Zenmo is built around restricted class access and private student profiles so sharing stays focused and intentional."
  }
];

const contactLinks = [
  {
    label: "Email Support",
    href: "mailto:support.zenmo@gmail.com",
    eyebrow: "Email"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenmo.app/",
    eyebrow: "Social"
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/ZenmoApp",
    eyebrow: "Social"
  },
  {
    label: "Join Discord",
    href: "https://discord.gg/wnrd9BkTNV",
    eyebrow: "Community"
  }
];

export const metadata: Metadata = {
  title: "Need Help with Zenmo?",
  description:
    "Reach out to Zenmo directly through email, Instagram, X, or Discord."
};

export default function SupportPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-180px)] w-full max-w-7xl px-5 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
      <div className="mx-auto w-full max-w-[18rem] text-center animate-fade-up sm:max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-solar">
          Support
        </p>
        <h1 className="mt-5 break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Need Help with Zenmo?
        </h1>
        <p className="mx-auto mt-6 max-w-full break-words text-base leading-8 text-stone-300 sm:max-w-2xl sm:text-lg">
          Reach out to us directly through our social channels or email.
          We&apos;re here to help.
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-[18rem] gap-4 animate-fade-up sm:max-w-4xl sm:grid-cols-2">
        {contactLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 bg-white/[0.04] p-5 shadow-premium-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-solar/45 hover:bg-white/[0.07] sm:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-solar">
              {item.eyebrow}
            </span>
            <span className="mt-5 flex min-w-0 items-center justify-between gap-4">
              <span className="min-w-0 break-words text-lg font-semibold text-white sm:text-xl">
                {item.label}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ember/40 bg-ember/10 text-lg font-semibold text-orange-100 transition duration-300 group-hover:border-solar/60 group-hover:bg-solar group-hover:text-black">
                +
              </span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-stone-400">
        We usually respond within 24 hours.
      </p>

      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
        >
          Back to Home
        </Link>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[18rem] animate-fade-up sm:max-w-4xl">
        <div className="border border-white/10 bg-white/[0.035] p-5 shadow-premium-card backdrop-blur sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            FAQ
          </h2>
          <div className="mt-5 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/10 bg-black/20 p-4 transition duration-300 open:border-solar/40 open:bg-solar/[0.05]"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-white outline-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-solar transition duration-300 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
