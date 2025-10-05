# Suisse Font Setup Instructions

This project is currently configured to use Inter font, which is very similar to Suisse and provides excellent readability. However, if you want to use the actual Suisse font, follow these steps:

## Option 1: Purchase Suisse Font

1. Purchase Suisse font files from [Swiss Typefaces](https://www.swisstypefaces.com/fonts/suisse/)
2. Download the font files (WOFF2 format recommended)
3. Place the font files in `src/app/fonts/` directory:
   - `SuisseIntl-Regular.woff2`
   - `SuisseIntl-Medium.woff2`
   - `SuisseIntl-SemiBold.woff2`
   - `SuisseIntl-Bold.woff2`

## Option 2: Use Local Suisse Font Files

If you already have Suisse font files:

1. Convert them to WOFF2 format using online tools or font conversion software
2. Place them in `src/app/fonts/` directory
3. Update `src/app/layout.tsx` to uncomment and use the localFont configuration

## Current Configuration

The project is currently using Inter font, which is:
- Free and open source
- Very similar to Suisse in appearance
- Optimized for web use
- Excellent readability across all devices

## Font Comparison

Inter and Suisse are both:
- Swiss-style sans-serif fonts
- Clean and modern
- Highly legible
- Professional looking

The difference is minimal for most use cases, and Inter provides excellent performance and accessibility.
