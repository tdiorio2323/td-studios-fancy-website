import { test, expect } from "@playwright/test";

test("homepage loads + sticky CTA appears", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.getByTestId("hero-title")).toBeVisible();
  await page.waitForTimeout(500);
  await page.mouse.wheel(0, 1200);
  await expect(page.getByTestId("cta-sticky")).toBeVisible({ timeout: 8000 });
  await expect(page.getByTestId("cta-sticky-link")).toHaveAttribute("href", "/contact");
});

test("/contact validates + submits disabled state", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "networkidle" });
  await expect(page.getByTestId("contact-form")).toBeVisible();
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("bad@email");
  await page.getByTestId("contact-submit").click();
  await expect(page.getByTestId("contact-error")).toContainText(/valid/i);
});

test("services page loads with proper structure", async ({ page }) => {
  await page.goto("/services", { waitUntil: "networkidle" });
  await expect(page.getByTestId("services-page")).toBeVisible();
  await expect(page.getByTestId("service-website")).toBeVisible();
  await expect(page.getByTestId("service-brand")).toBeVisible();
  await expect(page.getByTestId("service-social")).toBeVisible();
  await expect(page.getByTestId("service-engineering")).toBeVisible();
});

test("navigation works correctly", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByTestId("nav-services").click();
  await page.getByRole("menuitem", { name: "Website Design" }).click();
  await expect(page).toHaveURL(/\/services\/website-design$/);
});
