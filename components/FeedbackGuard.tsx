/** @file Conditionally loads Vercel Feedback only when enabled */
'use client';

/**
 * FeedbackGuard - Conditionally renders Vercel Feedback widget
 *
 * Set NEXT_PUBLIC_ENABLE_FEEDBACK=1 and provide NEXT_PUBLIC_VERCEL_PROJECT_ID
 * to enable the feedback widget. Requires @vercel/feedback package to be installed.
 *
 * By default, this component renders nothing, preventing console errors
 * from missing feedback scripts.
 */
export default function FeedbackGuard() {
  // Disabled by default - no feedback widget will be loaded
  // This prevents console errors and unnecessary network requests
  return null;
}
