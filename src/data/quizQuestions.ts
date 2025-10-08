import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'business_type',
    question: 'First, what kind of home service business do you run?',
    subtitle: 'This helps us give you specific advice for your industry',
    type: 'single',
    category: 'general',
    options: [
      { value: 'plumbing', label: 'Plumbing', points: 0 },
      { value: 'hvac', label: 'HVAC / Heating & Cooling', points: 0 },
      { value: 'electrical', label: 'Electrical', points: 0 },
      { value: 'roofing', label: 'Roofing', points: 0 },
      { value: 'landscaping', label: 'Landscaping / Lawn Care', points: 0 },
      { value: 'cleaning', label: 'Cleaning Services', points: 0 },
      { value: 'pest_control', label: 'Pest Control', points: 0 },
      { value: 'other', label: 'Other Home Service', points: 0 },
    ],
  },
  {
    id: 'phone_leads',
    question: 'How many new customer phone calls do you get each month?',
    subtitle: 'Just ballpark it - we\'re looking at the big picture here',
    type: 'single',
    category: 'general',
    options: [
      {
        value: '0-10',
        label: 'Less than 10 calls',
        points: 10,
        painPoint: 'Your phone should be ringing more - customers are out there searching right now',
        benefit: 'Imagine getting 30-50 qualified calls every month without working harder'
      },
      {
        value: '10-25',
        label: '10-25 calls',
        points: 8,
        painPoint: 'You\'re getting some business, but it\'s probably feast or famine',
        benefit: 'Consistent marketing means consistent calls - no more slow months'
      },
      {
        value: '25-50',
        label: '25-50 calls',
        points: 5,
        painPoint: 'Decent volume, but you could be capturing way more of your local market',
        benefit: 'Double your calls and fill your schedule weeks in advance'
      },
      {
        value: '50+',
        label: 'More than 50 calls',
        points: 3,
        painPoint: 'Great volume! But are they quality leads? And are you turning enough into jobs?',
        benefit: 'Let\'s improve your lead quality and conversion rate'
      },
    ],
  },
  {
    id: 'find_customers',
    question: 'When people in your area need your services, how do they usually find you?',
    subtitle: 'Be honest - where do most of your jobs actually come from?',
    type: 'single',
    category: 'general',
    options: [
      {
        value: 'word_of_mouth',
        label: 'Mostly word of mouth and referrals',
        points: 8,
        painPoint: 'Referrals are great, but you\'re at the mercy of other people remembering to mention you',
        benefit: 'Control your own lead flow instead of hoping someone refers you'
      },
      {
        value: 'repeat_customers',
        label: 'Repeat customers',
        points: 6,
        painPoint: 'Repeat business is gold, but you need new customers to grow',
        benefit: 'Keep those loyal customers AND attract new ones consistently'
      },
      {
        value: 'google_search',
        label: 'They find me on Google',
        points: 3,
        painPoint: 'If you\'re showing up on Google, that\'s great - let\'s make sure you\'re #1',
        benefit: 'Dominate page 1 and get even more search traffic'
      },
      {
        value: 'not_sure',
        label: 'Honestly, I\'m not really sure',
        points: 10,
        painPoint: 'Not knowing where customers come from means you can\'t get more of them',
        benefit: 'Track everything so you know exactly what\'s working and what\'s wasting money'
      },
    ],
  },
  {
    id: 'google_yourself',
    question: 'Have you Googled your services in your area recently?',
    subtitle: 'Like "plumber near me" or "HVAC repair [your city]" - do you show up?',
    type: 'single',
    category: 'seo',
    options: [
      {
        value: 'havent_checked',
        label: 'I haven\'t checked',
        points: 10,
        painPoint: 'Your competitors are showing up when customers search - and you might not be',
        benefit: 'Get found by people actively looking for your services RIGHT NOW'
      },
      {
        value: 'not_showing',
        label: 'I checked - I\'m nowhere to be found',
        points: 10,
        painPoint: 'If you\'re not on page 1 of Google, you\'re invisible to 92% of potential customers',
        benefit: 'Show up on page 1 where the phone calls are'
      },
      {
        value: 'page_2_3',
        label: 'I\'m on page 2 or 3',
        points: 8,
        painPoint: 'Being on page 2 is like having a billboard in the desert - nobody sees it',
        benefit: 'Jump to page 1 and watch your phone start ringing'
      },
      {
        value: 'page_1_bottom',
        label: 'I show up on page 1, near the bottom',
        points: 5,
        painPoint: 'Close! But the top 3 results get 75% of all clicks',
        benefit: 'Break into the top 3 and dominate your local market'
      },
      {
        value: 'top_3',
        label: 'I\'m in the top 3 results',
        points: 2,
        painPoint: 'Awesome! Let\'s make sure you stay there and expand to more search terms',
        benefit: 'Protect your position and capture even more market share'
      },
    ],
  },
  {
    id: 'google_reviews',
    question: 'How many Google reviews does your business have?',
    subtitle: 'Reviews are huge for local businesses - people check them before they call',
    type: 'single',
    category: 'seo',
    options: [
      {
        value: 'under_10',
        label: 'Less than 10',
        points: 10,
        painPoint: 'Most people won\'t call a business with only a handful of reviews',
        benefit: 'Build trust fast with a steady stream of 5-star reviews'
      },
      {
        value: '10-30',
        label: '10-30 reviews',
        points: 7,
        painPoint: 'Your competitors with 50+ reviews are winning jobs you should be getting',
        benefit: 'Catch up fast and become the obvious choice'
      },
      {
        value: '30-75',
        label: '30-75 reviews',
        points: 5,
        painPoint: 'Good start, but reviews are like money in the bank - you can never have too many',
        benefit: 'Blow past your competition with systematic review generation'
      },
      {
        value: '75+',
        label: 'More than 75',
        points: 2,
        painPoint: 'Nice! Are you actively asking for reviews or just hoping people leave them?',
        benefit: 'Put your review generation on autopilot'
      },
    ],
  },
  {
    id: 'website_quality',
    question: 'Tell us about your website...',
    subtitle: 'No judgment here - just being real about where things stand',
    type: 'single',
    category: 'website',
    options: [
      {
        value: 'no_website',
        label: 'I don\'t have a website',
        points: 10,
        painPoint: 'In 2025, not having a website is like not having a phone number',
        benefit: 'A professional website works for you 24/7, even when you\'re sleeping'
      },
      {
        value: 'outdated',
        label: 'I have one but it\'s old and looks dated',
        points: 9,
        painPoint: 'An old website makes people think your business is old and outdated too',
        benefit: 'A modern website builds instant trust and credibility'
      },
      {
        value: 'no_mobile',
        label: 'I have one but it doesn\'t work well on phones',
        points: 9,
        painPoint: '60% of people search on their phones - if your site doesn\'t work mobile, you lose them',
        benefit: 'Mobile-friendly sites convert 5x better than ones that aren\'t'
      },
      {
        value: 'no_calls',
        label: 'I have a decent site but it doesn\'t generate many calls',
        points: 7,
        painPoint: 'A website that doesn\'t generate calls is just an expensive digital business card',
        benefit: 'Turn your website into a lead-generating machine'
      },
      {
        value: 'working_well',
        label: 'My website is working well for me',
        points: 2,
        painPoint: 'Great! Let\'s make sure it\'s optimized and keeping up with changes',
        benefit: 'Fine-tune what\'s working to squeeze out even better results'
      },
    ],
  },
  {
    id: 'tried_ads',
    question: 'Have you tried running ads online? (Google, Facebook, etc.)',
    subtitle: 'Ads can get you fast results if done right - let\'s see where you\'re at',
    type: 'single',
    category: 'ads',
    options: [
      {
        value: 'never_tried',
        label: 'Never tried it',
        points: 7,
        painPoint: 'While you wait for organic to build, your competitors are buying leads TODAY',
        benefit: 'Get qualified leads within days with the right ad strategy'
      },
      {
        value: 'tried_didnt_work',
        label: 'Tried it, didn\'t work, stopped',
        points: 9,
        painPoint: 'Most DIY ads waste money - it\'s not your fault, this stuff is complicated',
        benefit: 'Done right, ads should bring you $3-8 back for every $1 spent'
      },
      {
        value: 'doing_myself',
        label: 'I\'m running ads myself right now',
        points: 6,
        painPoint: 'Are you confident you\'re getting the best return? Or just hoping it works?',
        benefit: 'Expert optimization typically cuts costs by 30-50% while getting better results'
      },
      {
        value: 'someone_else',
        label: 'Someone else manages my ads',
        points: 4,
        painPoint: 'Are they specialized in home services? Getting you real ROI data?',
        benefit: 'Home service specialists know the tricks that generalists miss'
      },
      {
        value: 'not_interested',
        label: 'Not interested in paid ads',
        points: 5,
        painPoint: 'Organic takes 6-12 months to build - ads can fill the gap NOW',
        benefit: 'Smart ad strategy accelerates growth while organic builds'
      },
    ],
  },
  {
    id: 'track_results',
    question: 'Do you know which marketing efforts actually bring you customers?',
    subtitle: 'Like, do you know if your website, ads, or something else is working best?',
    type: 'single',
    category: 'general',
    options: [
      {
        value: 'no_tracking',
        label: 'No, I have no idea what\'s working',
        points: 10,
        painPoint: 'You could be wasting half your marketing budget and not even know it',
        benefit: 'Know exactly where every dollar goes and what it brings back'
      },
      {
        value: 'ask_customers',
        label: 'I ask customers how they found me',
        points: 7,
        painPoint: 'People forget, misremember, or give you the wrong answer',
        benefit: 'Accurate tracking shows the REAL customer journey'
      },
      {
        value: 'some_tracking',
        label: 'I track some things',
        points: 5,
        painPoint: 'Partial data gives you a partial picture - and leads to bad decisions',
        benefit: 'Complete tracking means complete confidence in your investments'
      },
      {
        value: 'track_everything',
        label: 'Yes, I track everything',
        points: 2,
        painPoint: 'Perfect! Are you using that data to optimize and improve?',
        benefit: 'Turn data into action and continuously improve your ROI'
      },
    ],
  },
  {
    id: 'business_goal',
    question: 'What\'s your main goal for the business right now?',
    subtitle: 'What would make the biggest difference for you?',
    type: 'single',
    category: 'general',
    options: [
      {
        value: 'more_calls',
        label: 'Get more phone calls and leads',
        points: 8,
        painPoint: 'Empty calendar = lost revenue and missed opportunities',
        benefit: 'Fill your schedule 2-3 weeks out consistently'
      },
      {
        value: 'consistent_work',
        label: 'Have more consistent work (no more slow months)',
        points: 7,
        painPoint: 'Feast-or-famine makes it impossible to plan and grow',
        benefit: 'Predictable lead flow means predictable income'
      },
      {
        value: 'better_customers',
        label: 'Attract better quality customers',
        points: 6,
        painPoint: 'Cheap customers who haggle on price are exhausting',
        benefit: 'Premium positioning attracts customers who value quality'
      },
      {
        value: 'compete_better',
        label: 'Stay competitive with other companies in my area',
        points: 7,
        painPoint: 'If you\'re not visible online, competitors are eating your lunch',
        benefit: 'Dominate your market and become the go-to choice'
      },
      {
        value: 'grow_business',
        label: 'Grow the business (hire more people, more trucks, etc.)',
        points: 6,
        painPoint: 'Can\'t grow without consistent leads to support the expansion',
        benefit: 'Scale confidently with predictable marketing systems'
      },
    ],
  },
  {
    id: 'current_marketing',
    question: 'Who handles your marketing right now?',
    subtitle: 'Be honest - what\'s your current situation?',
    type: 'single',
    category: 'general',
    options: [
      {
        value: 'do_it_myself',
        label: 'I do it myself when I have time',
        points: 8,
        painPoint: 'Your time is worth more fixing a water heater than figuring out Facebook ads',
        benefit: 'Focus on the work you love while experts handle your marketing'
      },
      {
        value: 'no_one',
        label: 'Honestly, no one is really doing it',
        points: 10,
        painPoint: 'Every day without marketing is money left on the table',
        benefit: 'Start attracting customers consistently with a proven system'
      },
      {
        value: 'agency_unhappy',
        label: 'I have an agency but I\'m not happy with the results',
        points: 9,
        painPoint: 'Paying for marketing that doesn\'t work is worse than doing nothing',
        benefit: 'Get an honest evaluation of what\'s wrong and what good marketing looks like'
      },
      {
        value: 'agency_not_sure',
        label: 'I have an agency but I don\'t know if they\'re doing a good job',
        points: 8,
        painPoint: 'If you can\'t see results, you might be wasting money every month',
        benefit: 'Learn what questions to ask and what results you should be getting'
      },
      {
        value: 'agency_happy',
        label: 'I have an agency and things are going well',
        points: 3,
        painPoint: 'Great! But are they specialized in home services? Could you do even better?',
        benefit: 'A second opinion never hurts - see if there are missed opportunities'
      },
      {
        value: 'employee',
        label: 'I have someone in-house handling it',
        points: 5,
        painPoint: 'In-house teams often lack specialized expertise and cost more than agencies',
        benefit: 'Compare what you\'re spending vs what you could get with specialists'
      },
    ],
  },
  {
    id: 'biggest_frustration',
    question: 'What frustrates you most about marketing your business?',
    subtitle: 'Last question - be honest, what really bugs you?',
    type: 'single',
    category: 'general',
    options: [
      {
        value: 'dont_understand',
        label: 'I don\'t understand it and it confuses me',
        points: 8,
        painPoint: 'Marketing shouldn\'t be complicated - you need clear answers in plain English',
        benefit: 'Get a simple plan you can actually understand and execute'
      },
      {
        value: 'no_time',
        label: 'I don\'t have time for it',
        points: 7,
        painPoint: 'You became a business owner to do the work you love, not be a marketer',
        benefit: 'Hand it off and focus on what you do best'
      },
      {
        value: 'wasted_money',
        label: 'I\'ve wasted money on things that didn\'t work',
        points: 9,
        painPoint: 'Bad marketing feels like throwing money in the trash',
        benefit: 'Work with proven strategies and track every dollar'
      },
      {
        value: 'agency_not_delivering',
        label: 'My agency charges a lot but I\'m not seeing results',
        points: 10,
        painPoint: 'Paying monthly fees for vague "reports" while your phone still isn\'t ringing',
        benefit: 'See what real agency performance looks like and get an honest evaluation'
      },
      {
        value: 'dont_know_what_works',
        label: 'I don\'t know what actually works',
        points: 8,
        painPoint: 'Guessing is expensive - you need a clear roadmap',
        benefit: 'Follow a proven playbook that works for home services'
      },
      {
        value: 'inconsistent_results',
        label: 'Results are too inconsistent',
        points: 8,
        painPoint: 'Random results come from random effort',
        benefit: 'Build marketing systems that deliver predictable growth'
      },
    ],
  },
];
