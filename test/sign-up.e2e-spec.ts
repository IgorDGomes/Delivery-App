import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Name of the Establishment').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoes@example.com')
  await page.getByLabel('Your phone number').fill('67545323434')

  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Your establishment was successfully registered')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Name of the Establishment').fill('Invalid Name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoes@example.com')
  await page.getByLabel('Your phone number').fill('67545323434')

  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Error registering Establishment.')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Access Panel' }).click()

  expect(page.url()).toContain('/sign-in')
})
