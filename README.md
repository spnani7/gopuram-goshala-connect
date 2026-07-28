# Ranganatha Goshala Digital

Build a full-stack, dual-language (English & Telugu) Web Application for "Sri Ranganatha Goshala" using React, Tailwind CSS, Lucide Icons, and a robust mock database/backend system (ready for Supabase/Firebase migration). Follow this exact design theory and structural specification: 1. THEME & BRANDING: - Color Palette: Clean, professional light theme using Sky Blue (primary accents) and Soft Warm Yellow (secondary highlights) reflecting a modern spiritual aesthetic. - Language Switcher: Floating toggle globally switching all UI text between English and Telugu. 2. HERO SECTION: - Display a prominent, elegant layout featuring a placeholder for a high-quality visual of the Nellore Ranganatha Temple Gopuram, seamlessly transitioning into an image of Lord Ranganatha Swami surrounded by cows and calves. - Include a slow, professional ticker/banner below the hero displaying these three phrases on a clean loop: "Gow Savaai Saravagath Raksha", "Desi Cow Samrakshna Kendhram", and "Old Desi Cows Feeding Center Without Selfishness". 3. CORE NAVIGATION & CARD COMPONENTS: Build a highly visual grid of responsive Card Components for these 6 main pillars: - Goshala (About our mission & daily operations) - Gallery (High-quality image grid of cows and infrastructure) - Courses & Lectures (Video/Audio list card view) - Products (Direct access to the store) - Organic Food Products (Filtered store category) - Agriculture Products (Filtered store category) 4. E-COMMERCE ENGINE: - Build a full-functioning Product Catalog featuring item images, descriptions, stock limits, and prices. - Implement an active "Add to Cart" system with an accessible side-drawer Cart Summary. - Create an elegant E-cart Checkout Page calculating totals, taxes, and shipping fees. - Integrate a realistic mock "Razorpay Checkout" modal window that triggers upon clicking "Pay Now", capturing successful mock transactions, generating invoice receipts, and resetting the cart. 5. DAILY A2 MILK SUBSCRIPTION MATRIX (CRITICAL LOGIC): Build a dedicated User Dashboard area for the 150+ daily milk delivery customers to manage their accounts: - Tier Selection: Allow users to fix their daily default quantity requirement (e.g., 1/2 Liter, 3/4 Liter, 1 Liter, or Custom). - Interactive Calendar Interface: A visual monthly calendar grid where the customer can click on specific dates to toggled states: "Normal Delivery", "Pause Delivery (No Milk Today)", or "Request Extra Milk (+0.5L or +1L)". - Automated Bill Calculator: A dynamic calculation engine that scans the current month's calendar. It must automatically subtract paused days and add extra quantities to display a live, updating Estimated Monthly Bill statement. 6. ADMIN & SUPER ADMIN CONTROL PANEL: Create a secure Admin Dashboard layout containing: - Customer Directory: A master view of all 150+ users showing their fixed daily milk quantities. - Daily Log Overview: A master calendar view showing total aggregated milk demand for today (e.g., "Total Milk Needed Today: 120 Liters") based on user vacation pauses or extra requests. - Inventory Manager: Simple CRUD panel to add, edit, or delete store products, update prices, change product images (using Cloudinary hooks), and track stock levels. - Database Free-Up System: A quick-action utility button labeled "Archive Data to Google Sheets" which simulates flushing historic logs older than 3 months to optimize database memory. Ensure all UI components are beautifully padded, accessible, responsive on mobile devices, and highly polished.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gopuram-goshala-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1fbf493c-22ac-474c-9a97-a7035397316f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
