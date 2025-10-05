# Design Guidelines: PetMart Indonesia

## Design Approach
**Reference-Based Approach** drawing inspiration from:
- **Shopee/Tokopedia**: Familiar Indonesian e-commerce patterns for trust and usability
- **Chewy.com**: Pet-specific visual language and category organization
- **Petco**: Clean product presentation with pet-friendly aesthetics

**Core Principles**:
1. Playful yet trustworthy - balance fun pet imagery with professional commerce
2. Mobile-first optimization for Indonesian market
3. Visual hierarchy prioritizing products and promotions
4. Warm, welcoming atmosphere that celebrates pet ownership

## Color Palette

**Light Mode** (Primary):
- Primary Brand: 25 85% 55% (warm orange - energetic, pet-friendly)
- Secondary: 200 70% 50% (sky blue - trust, cleanliness)
- Accent: 145 65% 50% (fresh green - health, natural)
- Background: 40 20% 97% (warm off-white)
- Surface: 0 0% 100% (white cards)
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%

**Dark Mode**:
- Primary: 25 80% 60%
- Background: 220 15% 12%
- Surface: 220 13% 16%
- Text Primary: 40 20% 95%

## Typography

**Font Stack**:
- Primary: 'Inter' (Google Fonts) - clean, modern readability for UI and body text
- Display: 'Fredoka' (Google Fonts) - friendly, rounded for headings and pet-related content

**Scale**:
- Hero Headings: text-5xl md:text-6xl font-bold (Fredoka)
- Section Headings: text-3xl md:text-4xl font-bold (Fredoka)
- Card Titles: text-lg font-semibold (Inter)
- Body Text: text-base (Inter)
- Small Text: text-sm (Inter)
- Price Display: text-2xl font-bold (Inter)

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Consistent padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-20
- Card gaps: gap-4, gap-6, gap-8

**Grid System**:
- Product Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
- Category Grid: grid-cols-2 md:grid-cols-4 lg:grid-cols-6
- Container: max-w-7xl mx-auto px-4

## Component Library

### Navigation
**Top Bar**: Sticky header with logo, search bar (prominent, full-width on mobile), cart icon with badge, user menu
**Category Bar**: Horizontal scrollable category chips with icons (Dog, Cat, Bird, Fish, Hamster, Reptile, Accessories)

### Hero Section
**Large hero image**: Happy pets with their products (1920x600px)
**Content overlay**: Translucent dark gradient (bottom to top) with white text
**CTA**: Two prominent buttons - "Shop Now" (filled primary) and "Browse Categories" (outline white with backdrop-blur)

### Product Cards
- Square product image with hover zoom effect
- Product name (2-line truncate)
- Star rating with review count
- Current price (bold, primary color)
- Original price (line-through, smaller, gray)
- Discount badge (top-right corner, accent green)
- Quick add-to-cart button on hover
- "Free Shipping" badge for eligible items

### Category Cards
- Rounded image with pet type
- Category name overlay
- Product count
- Soft shadow on hover

### Shopping Cart
- Slide-out panel from right side
- Product thumbnail, name, quantity selector, remove button
- Subtotal, shipping estimate, total
- Sticky checkout button at bottom

### Checkout Flow
- Multi-step indicator (Cart → Shipping → Payment → Confirmation)
- Payment method grid with Indonesian options (QRIS, DANA, Bank Transfer, E-wallets)
- Each payment option as card with logo and name
- Address form with autocomplete suggestions

### Product Detail Page
- Image gallery with thumbnail navigation
- Zoom on click/hover
- Product name, rating, sold count
- Price prominently displayed
- Stock status indicator
- Quantity selector and add-to-cart
- Seller information card
- Product description tabs (Description, Reviews, Specifications)
- Related products carousel

### Search & Filters
- Sidebar filters: Category, Pet Type, Price Range, Brand, Rating
- Sort options: Relevance, Price (Low-High), Price (High-Low), Best Selling, Newest
- Applied filters as removable chips
- Results count display

### Promotional Banners
- Carousel for flash sales and promotions
- Full-width colorful banners with pet imagery
- Countdown timers for limited offers

### Footer
- Multi-column layout: Categories, Customer Service, About Us, Payment Methods
- Social media icons
- Indonesian payment method logos grid
- Newsletter signup with pet-themed illustration

## Images

**Hero Section**: 
- Full-width banner showing happy pets (dog and cat together) with colorful product displays in background
- Warm, bright lighting creating joyful atmosphere
- Professional photography with shallow depth of field

**Category Headers**:
- Close-up pet portraits for each animal category
- Circular crop with subtle border

**Product Images**:
- White background for consistency
- Multiple angles where applicable
- 1:1 aspect ratio (square)

**Promotional Sections**:
- Lifestyle images showing pets using products
- Action shots (dogs playing with toys, cats enjoying food)
- Owner-pet bonding moments

## Animations

**Minimal Motion Strategy**:
- Product card hover: subtle scale (1.02) and shadow increase
- Add-to-cart: gentle bounce feedback
- Category navigation: smooth horizontal scroll
- Image galleries: fade transitions only
- Loading states: simple spinner, no elaborate animations
- Cart panel: slide-in/out (300ms ease)

**NO elaborate scroll animations, parallax effects, or continuous motion**

## Key Differentiators

1. **Pet Type Quick Filter**: Prominent animal icons for instant category filtering
2. **Trust Indicators**: Seller ratings, verified badges, delivery guarantees
3. **Indonesian Payment Prominence**: Large, recognizable payment method icons
4. **Mobile-Optimized**: Bottom navigation bar for key actions on mobile
5. **Playful Touches**: Paw print icons, pet-themed empty states, friendly micro-copy