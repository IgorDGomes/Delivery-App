import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('We sent a link to your email.')

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('Your email is invalid.')

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New Establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})
