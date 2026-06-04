/**
 * 60 Minute Cash Offer — Southern California
 * Dynamic-headline override table for the /apply landing page.
 *
 * Each entry's `match` regex is tested against the sanitized `utm_content`
 * (= ad.name per locked URL params convention). First match wins.
 *
 * Ad names here are FREEFORM (this client hasn't migrated to the
 * ConceptCode contract yet — match strings are the literal ad.name values).
 *
 * To test a row manually:
 *   curl -sL "https://apply.60minutecashoffernow.com/?utm_content=Insider" \
 *     | grep -oE "<h1[^>]*>[^<]+</h1>"
 */

export type HeadlineOverride = {
  match: RegExp
  h1: string
  sub: string
}

export const HEADLINE_OVERRIDES: HeadlineOverride[] = [
  // Insider — "what nobody explains" curiosity angle
  {
    match: /^Insider$/i,
    h1: "What Most Southern California Buyers Won't Tell You Before You Sign.",
    sub: "The numbers, the timeline, the walkthrough trap. Here's how to read a real cash offer before you sign anything.",
  },

  // SMS — text-style urgency, 24-hour cash anchor
  {
    match: /^SMS$/i,
    h1: "Need Cash For Your Southern California House In 24 Hours? Here's The Real Number.",
    sub: "Skip the listing, skip the showings, skip the \"we'll see at closing\" walkthrough trap. The real number stays the real number.",
  },

  // Jordan CTA — founder-fronted authority
  {
    match: /^Jordan CTA$/i,
    h1: "Here's How We Buy Houses in Southern California Without Dropping The Offer Later.",
    sub: "Cash, 14-day close, no commissions. The number we say is the number you get. Watch how we calculate it.",
  },

  // Podcast Perry — storytelling / case-study angle
  {
    match: /^Podcast Perry$/i,
    h1: "How Southern California Homeowners are Selling In 14 Days Without A Single Repair.",
    sub: "Not on the market, not through an agent. Here's the math he ran and the offer he took.",
  },

  // Ours Is + Our Offer Won't Change — REI Transfer proven winner angle
  {
    match: /^(Ours Is|Our Offer Won't Change)$/i,
    h1: "Why Our Cash Offer Won't Change After The Walkthrough.",
    sub: "Most Southern California cash buyers drop the number after they see the house. We don't. Here's how we lock the offer up front.",
  },
]

/**
 * Default H1/sub for visitors who arrive WITHOUT a matching utm_content
 * (organic, brand-new ads not yet mapped, bookmarks, link forwarders).
 *
 * This is the floor for organic + un-tagged paid traffic. Keep it strong.
 */
export const DEFAULT_HEADLINE = {
  h1: "Sell Your Southern California House For Cash. In 24 Hours.",
  sub: "Fair cash offers, no fees, no commissions. Local Southern California team.",
}
