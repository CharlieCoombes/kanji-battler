# Kanji Battler - Landing Page

## Project Overview
Kanji Battler transforms Japanese character learning into addictive Street Fighter-style battles where every correct answer lands a hit. Users master 2,000+ kanji through head-to-head combat, turning language study into a gaming experience.

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - Lightweight interactivity
- **Deployment** - Vercel/Netlify for quick preview links

## Project Structure
```
kanji-battler/
├── assets/
│   ├── images/          # App mockups, logos, graphics from Figma
│   ├── documents/        # App memo, copy document
│   └── inspiration/      # Reference landing pages
├── src/
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── public/              # Static assets for deployment
└── index.html           # Main landing page
```

## Assets Checklist
- [x] App memo - Kanji Battler Research PDF (assets/documents/)
- [x] Landing page guide - Demand Curve guide (assets/documents/)
- [x] Inspiration site - mymind.com (clean, minimal structure)
- [x] Copy document - kanji_battler_landing_copy.md (assets/documents/)
- [x] Figma mockups - 6 screenshots showing app UI (assets/images/)

## Design Principles
- **Minimal** - Clean, uncluttered layout
- **Mobile-first** - Responsive design optimized for mobile
- **Fast** - Lightweight, optimized for performance
- **Accessible** - WCAG compliant

## Color Palette (Extracted from Mockups)
- **Primary Green**: #5CB85C (vibrant green used in maps/progress)
- **Dark Background**: #1A1A1A (dark mode UI)
- **Light Background**: #F5F5F5 (light mode alternative)
- **Accent Yellow**: #FFD700 (highlights, achievements)
- **Text Dark**: #333333
- **Text Light**: #FFFFFF

## Typography
- **Headers**: Bold, clean sans-serif (like SF Pro or Inter)
- **Body**: Regular weight, high readability
- **Japanese Characters**: Large, clear display font

## Target Audience
- **Primary**: Gamers (18-35) interested in Japanese culture
- **15M** anime fans actively studying Japanese
- **$2.0B** global Japanese learning market
- **Problem**: Duolingo's 4% completion rate proves traditional apps are boring

## Value Proposition
- Street Fighter-style combat mechanics
- 2,000+ kanji through gameplay
- Progress tracking with visual world map
- Real-time PvP battles
- Seasonal content and rewards

## Landing Page Structure Plan

### 1. Hero Section
- **Headline**: "Master Kanji — Three‑Minute Battles"
- **Sub-header**: Turn dull drills into Street‑Fighter duels
- **Supporting copy**: Battle friends, climb leaderboards, conquer 2,000+ kanji
- **Primary CTA**: "Start Fighting Free" button
- **Hero Visual**: App mockup showing battle screen

### 2. Social Proof Bar
- "Join 50,000+ fighters already training"
- ★ 4.8/5 App Store rating
- Platform logos: Twitch, Discord, Google Play

### 3. Features Section (4 blocks)
1. **Real Combat, Real Learning**
   - Timer-based battles make kanji stick
   - Visual: Battle screen with health bars
   
2. **Journey Through Japan**
   - World map progression system
   - Visual: Map interface showing regions
   
3. **Compete with Friends**
   - Leaderboards and friend challenges
   - Visual: Leaderboard screen
   
4. **Built for Busy People**
   - 2-3 minute sessions
   - Visual: Timer/quick session indicator

### 4. Secondary CTA
- "Ready to level up your Japanese?"
- Download buttons for iOS/Android
- "Free download • No subscription to start"

### 5. FAQ Section
- Collapsible Q&A format
- Key questions about prerequisites, compatibility, safety, seasons

## Implementation Notes for Cursor

### Design Approach (mymind.com inspired)
- **Minimalist layout** with generous whitespace
- **Asymmetrical sections** with offset content blocks
- **Smooth animations** (0.5-0.7s transitions)
- **Rounded corners** (border-radius: 1-2rem)
- **No complex navigation** - single page scroll
- **Mobile-first responsive design**

### Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Flexbox/Grid layouts, CSS variables for colors
- **Vanilla JS** - Smooth scroll, FAQ toggles, simple interactions
- **No frameworks** - Keep it lightweight for fast loading

### File Structure
```
kanji-battler/
├── index.html           # Main landing page
├── src/
│   ├── css/
│   │   ├── main.css    # Main styles
│   │   ├── reset.css   # CSS reset/normalize
│   │   └── animations.css # Transitions and animations
│   └── js/
│       └── main.js     # Interactions (FAQ, smooth scroll)
├── assets/
│   ├── images/         # Mockup screenshots
│   ├── documents/      # Copy and reference docs
│   └── inspiration/    # Design references
└── README.md           # This file
```

## Next Steps for Development in Cursor

1. **Create base HTML structure** (index.html)
   - Use semantic HTML5 elements
   - Include all copy from kanji_battler_landing_copy.md
   
2. **Style with CSS** (src/css/main.css)
   - Use CSS Grid for main layout
   - Flexbox for component layouts
   - CSS variables for color palette
   - Mobile-first media queries
   
3. **Add interactions** (src/js/main.js)
   - Smooth scroll to sections
   - FAQ accordion functionality
   - Subtle hover animations
   - Optional: Intersection Observer for scroll animations
   
4. **Optimize images**
   - Convert mockups to WebP format
   - Use responsive images (srcset)
   - Lazy load below-fold images
   
5. **Deploy to Vercel**
   - Connect GitHub repo
   - Auto-deploy on push
   - Share preview link

## Deployment
Once built, the site can be deployed to:
- **Vercel** (recommended for quick preview links)
- **Netlify** (alternative)
- **GitHub Pages** (simplest option)