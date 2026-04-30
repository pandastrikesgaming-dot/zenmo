import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Install Guide", href: "/how-to-download" },
  { label: "Download", href: "/#download" },
  { label: "Support", href: "/support" }
];

const contactLinks = [
  { label: "Email", href: "mailto:support.zenmo@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/zenmo.app/" },
  { label: "X (Twitter)", href: "https://x.com/ZenmoApp" },
  { label: "Discord", href: "https://discord.gg/wnrd9BkTNV" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr_auto] lg:items-start">
        <div>
          <p className="text-lg font-semibold text-white">Zenmo</p>
          <p className="mt-2 text-sm text-stone-400">
            Notes, shared safely within your class.
          </p>
          <a
            href="mailto:support.zenmo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-solar transition duration-300 hover:text-white"
          >
            support.zenmo@gmail.com
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              Links
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-stone-300">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              Contact
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-stone-300">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-stone-500 lg:text-right">
          &copy; {new Date().getFullYear()} Zenmo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
