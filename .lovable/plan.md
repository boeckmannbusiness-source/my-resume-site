## Add inquiry form to Services page

A new contact form at the bottom of `/services` that emails inquiries to you. Fully bilingual (EN/DE).

### Form fields
- Name (required)
- Email (required, validated)
- Budget (free-text input, optional)
- Message (required, max 1000 chars)
- Submit button + success/error toast feedback

### How it works
1. User fills out form on `/services`
2. On submit, a serverless function sends an email to your inbox with the inquiry details
3. User sees a success confirmation; form resets

### Setup steps
1. Enable Lovable Cloud (required for sending email).
2. Set up your sender email domain (one-click dialog — your emails will arrive from your own domain instead of a generic address).
3. Create the inquiry email template (subject: "New performance marketing inquiry from {name}"; body lists name, email, budget, message).
4. Create the `send-inquiry` edge function that validates input with Zod and sends the email to your address.
5. Build the `InquiryForm` component using existing shadcn `Input`, `Textarea`, `Button`, and `Label` — styled to match the Services page.
6. Mount the form in `src/pages/Services.tsx`, above the existing "Back to Home / Contact" CTAs.
7. Add EN + DE translations under `services.inquiry.*` (heading, subhead, field labels, placeholders, submit text, success/error messages) in `LanguageContext.tsx`.

### Where inquiries land
Emails are sent to a single recipient address baked into the edge function. After Cloud is enabled I'll ask which email address should receive the inquiries (defaults to the address in your existing Contact section if visible).

### Files
- New: `src/components/InquiryForm.tsx`, `supabase/functions/send-inquiry/index.ts`, `supabase/functions/_shared/transactional-email-templates/inquiry-notification.tsx`
- Edited: `src/pages/Services.tsx`, `src/contexts/LanguageContext.tsx`, `supabase/functions/_shared/transactional-email-templates/registry.ts`
