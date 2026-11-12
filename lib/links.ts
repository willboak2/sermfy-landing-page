/** This site's own addresses: links to them stay in the same tab. */
const OWN_HOSTS = new Set(["sermfy.com", "www.sermfy.com"]);

/**
 * Props for a link: one to another site (Studio, CMS, Go, Help, social pages…) opens in a new
 * tab. This site's own pages, email and phone links, in-page anchors and direct file downloads
 * (an installer or app file, or a /download/ address that hands one over) stay in the same tab,
 * so a download never leaves an empty tab behind.
 */
export function newTab(href: string): { target?: "_blank"; rel?: string } {
  if (!/^https?:\/\//i.test(href)) return {};
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return {};
  }
  if (OWN_HOSTS.has(url.hostname)) return {};
  if (/\.(apk|exe|dmg|msi|zip|pdf)$/i.test(url.pathname) || url.pathname.startsWith("/download/")) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}
