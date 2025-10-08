export interface ScorecardCriteria {
  id: string;
  question: string;
  criteria: string;
  lowLabel: string;
  highLabel: string;
}

export interface ScorecardSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  criteria: ScorecardCriteria[];
}

export const scorecardSections: ScorecardSection[] = [
  {
    id: 'website',
    title: 'Your Website',
    description: 'How well is your website working for you?',
    icon: 'monitor',
    criteria: [
      {
        id: 'website_trust',
        question: 'When customers land on your website, do they immediately trust you or does it look cheap and sketchy?',
        criteria: 'You have 3 seconds to make a first impression. A trustworthy website: looks modern and professional (not from 2005), has real photos of your work and team, shows your reviews and credentials, loads fast, and makes your phone number obvious.',
        lowLabel: 'Looks cheap/sketchy',
        highLabel: 'Professional & trustworthy'
      },
      {
        id: 'website_calls',
        question: 'Do people who visit your website actually call you, or do they just leave?',
        criteria: 'Your website exists to get your phone ringing. That means: easy to call from their phone (tap to dial), your number is everywhere, clear reasons to call NOW instead of keep shopping, and it works fast on mobile.',
        lowLabel: 'They just leave',
        highLabel: 'They call me'
      },
      {
        id: 'website_info',
        question: 'Can customers quickly understand what you do, what it costs, and why you\'re better than the other guys?',
        criteria: 'They\'re comparison shopping and busy. Make it obvious: what services you offer, ballpark pricing so they know if they can afford you, what makes you different, and why they should pick you over competitors.',
        lowLabel: 'Confusing/vague',
        highLabel: 'Crystal clear'
      }
    ]
  },
  {
    id: 'lead_flow',
    title: 'Lead Flow',
    description: 'How consistent and predictable is your customer pipeline?',
    icon: 'phone',
    criteria: [
      {
        id: 'lead_volume',
        question: 'Are you getting enough leads to keep your calendar full and your team busy?',
        criteria: 'A healthy business stays booked out 2-3 weeks. You should: have more work than you can handle, be able to turn down low-margin jobs, keep your crew busy year-round, and be selective about which projects to take.',
        lowLabel: 'Struggling for work',
        highLabel: 'Calendar is full'
      },
      {
        id: 'lead_consistency',
        question: 'Is your lead flow predictable, or does it feel like a roller coaster?',
        criteria: 'Feast or famine kills businesses. Consistent lead flow means: similar volume each month, you can predict revenue and plan ahead, afford to hire and keep good people, and sleep better at night knowing work is coming.',
        lowLabel: 'Feast or famine',
        highLabel: 'Steady & predictable'
      },
      {
        id: 'lead_quality',
        question: 'Are your leads high-quality customers ready to buy, or tire-kickers wasting your time?',
        criteria: 'Not all leads are equal. Good leads: have a real need NOW, can actually afford your services, are in your service area, and are ready to book (not just getting 10 quotes).',
        lowLabel: 'Tire-kickers',
        highLabel: 'Ready to buy'
      },
      {
        id: 'lead_tracking',
        question: 'Do you know which marketing is making you money versus which is wasting it?',
        criteria: 'Flying blind is expensive. You should know: which marketing sources bring in the best customers, what you\'re paying per lead from each source, which channels are profitable vs. money pits, so you can double down on what works.',
        lowLabel: 'No clue',
        highLabel: 'Track everything'
      }
    ]
  },
  {
    id: 'google',
    title: 'Getting Found on Google',
    description: 'When people search for your services, do they find you?',
    icon: 'search',
    criteria: [
      {
        id: 'google_ranking',
        question: 'When people Google your services in your area, are you showing up or are your competitors getting those calls?',
        criteria: 'Google is where customers find you. You need to: show up on page 1 when people search for your services, appear in the map section at the top with competitors, and be visible in all the cities/towns you serve (not just your main location).',
        lowLabel: 'Competitors show up',
        highLabel: 'I dominate search'
      },
      {
        id: 'google_reviews',
        question: 'Do you have enough reviews that customers pick you over the competition?',
        criteria: 'Customers compare everyone before calling. You need: 50+ reviews minimum (competitors probably have this many), mostly 5-stars, recent reviews from the last few months, and reviews that mention your actual services.',
        lowLabel: 'Way behind competitors',
        highLabel: 'Most reviews'
      },
      {
        id: 'google_profile',
        question: 'Does your Google Business Profile look professional and active, or bare-bones and neglected?',
        criteria: 'Your Google profile is often the first thing customers see. It should: have all info filled out completely, tons of photos showing your real work, look like you\'re actively in business and taking calls, not like you set it up in 2015 and forgot about it.',
        lowLabel: 'Looks neglected',
        highLabel: 'Looks professional'
      }
    ]
  },
  {
    id: 'ads',
    title: 'Paid Advertising',
    description: 'Are you using ads to get immediate leads?',
    icon: 'target',
    criteria: [
      {
        id: 'ads_running',
        question: 'Are you using ads to fill your calendar when you need more work?',
        criteria: 'Ads are the instant-on switch for leads. The right ads: show up when customers search for your services, get your phone ringing with real customers, and bring in enough volume to keep you booked solid.',
        lowLabel: 'Not using ads',
        highLabel: 'Ads fill my calendar'
      },
      {
        id: 'ads_roi',
        question: 'Are your ads profitable or are they bleeding money?',
        criteria: 'Too many contractors waste thousands on bad ads. Profitable ads mean: you know what each lead costs, you track which ones become paying customers, and you make $3-5+ back for every dollar you spend (or you kill the campaign).',
        lowLabel: 'Losing money',
        highLabel: 'Very profitable'
      },
      {
        id: 'ads_optimization',
        question: 'Is someone actively managing your ads or did you set them up years ago and forget about them?',
        criteria: 'Set-and-forget ads waste money FAST. Good management means: constantly testing what works and cutting what doesn\'t, adjusting bids and targeting, improving your cost per lead every month, not paying for junk clicks from people who\'ll never hire you.',
        lowLabel: 'Set and forgotten',
        highLabel: 'Actively managed'
      }
    ]
  }
];
