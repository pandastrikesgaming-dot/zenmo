import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const safetyWarning =
  "Only download Zenmo from the official Zenmo website. Do not install APK files shared through random links or unknown sources.";

export const metadata: Metadata = {
  title: "How to Install Zenmo APK on Android",
  description:
    "Follow these steps carefully to install Zenmo safely on your Android phone."
};

// Place the real guide screenshots inside public/install-guide/.
// Public files there are served at /install-guide/*.png.
const installSteps: {
  step: number;
  title: string;
  description: ReactNode;
  image: string;
}[] = [
  {
    step: 1,
    title: "Tap Download APK",
    description: "On the Zenmo website, tap the Download APK button.",
    image: "/install-guide/step-1-download.png"
  },
  {
    step: 2,
    title: "Wait for the download to finish",
    description:
      "Chrome may show a download warning for APK files. Tap Download anyway only if you are on the official Zenmo website.",
    image: "/install-guide/step-2-download-complete.png"
  },
  {
    step: 3,
    title: "Open the downloaded APK",
    description: (
      <>
        After the download is complete, tap Open. You can also open the APK
        from Chrome Downloads or your phone&rsquo;s Downloads folder.
      </>
    ),
    image: "/install-guide/step-3-open-apk.png"
  },
  {
    step: 4,
    title: "Chrome may block the install",
    description:
      "If Android says Chrome is not allowed to install unknown apps, tap Settings.",
    image: "/install-guide/step-4-chrome-warning.png"
  },
  {
    step: 5,
    title: "Open Chrome install settings",
    description: (
      <>
        You will be taken to Chrome&rsquo;s Install unknown apps settings page.
      </>
    ),
    image: "/install-guide/step-5-chrome-settings.png"
  },
  {
    step: 6,
    title: "Allow from this source",
    description:
      "Turn ON Allow from this source for Chrome. This only allows Chrome to install the APK you selected.",
    image: "/install-guide/step-6-allow-source.png"
  },
  {
    step: 7,
    title: "Go back to the APK install screen",
    description:
      "Tap the back button to return to the Zenmo APK installation screen.",
    image: "/install-guide/step-7-back-to-install.png"
  },
  {
    step: 8,
    title: "Tap Install",
    description: "Tap Install and wait for Zenmo to finish installing.",
    image: "/install-guide/step-8-install.png"
  },
  {
    step: 9,
    title: "Open Zenmo",
    description:
      "Tap Open, sign in, and select your school, class, and section.",
    image: "/install-guide/step-9-open-app.png"
  }
];

function SafetyWarning() {
  return (
    <div className="border border-solar/35 bg-solar/[0.08] p-4 shadow-soft-glow sm:p-5">
      <div className="flex gap-3">
        <span className="mt-1 h-3 w-3 shrink-0 bg-solar shadow-[0_0_24px_rgba(255,213,106,0.55)]" />
        <p className="min-w-0 break-words text-sm font-medium leading-7 text-yellow-100 sm:text-base">
          {safetyWarning}
        </p>
      </div>
    </div>
  );
}

function DownloadTrustNote() {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-ember/45 bg-ember/10 text-sm font-semibold text-solar">
          ✓
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">
            Official Zenmo APK
          </p>
          <p className="mt-1 text-xs font-medium leading-5 text-stone-300">
            Safe to download &bull; No third-party redirects
          </p>
        </div>
      </div>
    </div>
  );
}

function DownloadInstallNote() {
  return (
    <p className="max-w-md text-xs leading-6 text-stone-400">
      This is the official Zenmo download. If your phone shows an install
      warning, it is because the app is installed outside the Play Store.
    </p>
  );
}

export default function HowToDownloadPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto grid w-full max-w-[21rem] gap-8 sm:max-w-none lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-solar">
            Installation Guide
          </p>
          <h1 className="mt-5 max-w-full break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Get Zenmo on any device
          </h1>
          <p className="mt-6 max-w-full break-words text-base leading-8 text-stone-300 sm:max-w-2xl sm:text-lg">
            Recommended: Open the Zenmo PWA for the best experience across all
            your devices. No downloads required to get started.
          </p>

          <div className="mt-8 grid gap-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  platform: "Android / PC",
                  action: "One-click install"
                },
                {
                  platform: "iOS (iPhone)",
                  action: "Add to Home Screen"
                },
                {
                  platform: "Browser",
                  action: "Instant access"
                }
              ].map((item) => (
                <div
                  key={item.platform}
                  className="border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-solar">
                    {item.platform}
                  </p>
                  <p className="mt-1 text-sm text-white">{item.action}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://zenmo-pwa.vercel.app"
                className="inline-flex items-center justify-center border border-solar/50 bg-solar px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white shadow-[0_0_24px_rgba(255,213,106,0.25)]"
              >
                Open Zenmo PWA
              </Link>
              <Link
                href="https://github.com/pandastrikesgaming-dot/zenmo/releases/download/v1.0.0/zenmo.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
              >
                Download APK (Optional)
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <SafetyWarning />
        </div>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-[21rem] gap-5 sm:max-w-none">
        {installSteps.map((item) => (
          <article
            key={item.step}
            className="group grid gap-6 border border-white/10 bg-white/[0.04] p-5 shadow-premium-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ember/50 hover:bg-white/[0.06] sm:p-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8"
          >
            <div className="flex min-w-0 flex-col justify-between gap-8">
              <div>
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-solar">
                  Step {item.step}
                </p>
                <h2 className="mt-4 break-words text-2xl font-semibold text-white sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-5 break-words text-base leading-8 text-stone-300">
                  {item.description}
                </p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-ember via-solar to-transparent opacity-70" />
            </div>

            <figure className="relative mx-auto w-full max-w-xs overflow-hidden rounded-lg border border-white/12 bg-black/45 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:max-w-sm lg:mr-0">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/[0.05] via-cocoa/70 to-black p-8 text-center text-sm font-medium leading-6 text-stone-400">
                Screenshot placeholder for Step {item.step}: {item.title}
              </div>
              <img
                src={item.image}
                alt={`Screenshot placeholder for Step ${item.step}: ${item.title}`}
                loading="lazy"
                className="relative aspect-[9/16] h-auto w-full object-cover"
              />
            </figure>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-[21rem] gap-6 border border-white/10 bg-gradient-to-br from-ember/[0.14] via-white/[0.04] to-blueGlow/[0.12] p-5 shadow-soft-glow sm:max-w-none sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <SafetyWarning />
        <div className="grid gap-3 lg:justify-items-end">
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="https://zenmo-pwa.vercel.app"
              className="inline-flex items-center justify-center border border-solar/50 bg-solar px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white shadow-[0_0_24px_rgba(255,213,106,0.25)]"
            >
              Open Zenmo PWA
            </Link>
            <Link
              href="https://github.com/pandastrikesgaming-dot/zenmo/releases/download/v1.0.0/zenmo.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
            >
              Download APK (Optional)
            </Link>
          </div>
          <p className="max-w-md text-right text-xs leading-6 text-stone-400">
            Recommended: Open Zenmo in your browser and install it as an app for
            the best experience.
          </p>
        </div>
      </div>
    </section>
  );
}
