import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';
import { faker } from '@faker-js/faker';

test('signup', async ({ page }) => {
  qase.id(1)
  qase.title('signup')
  qase.fields({ 'Priority': 'High', 'Automation status': 'Automated' });
  const password = faker.internet.password();
  await page.goto('');
  await page.getByRole('link', { name: 'Signup' }).click();
  await page.getByTestId('first-name').fill(faker.person.firstName());
  await page.getByTestId('last-name').fill(faker.person.lastName());
  await page.getByTestId('email').fill(faker.internet.email());
  await page.getByTestId('password').fill(password);
  await page.getByTestId('confirm-password').fill(password);
  await page.getByTestId('submit').click();
  await expect(page).toHaveURL('/todo');
});
