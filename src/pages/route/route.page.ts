import { Page, Locator } from '@playwright/test';

export class RoutePage {
  constructor(private page: Page) {}

  async clickCreateRoute() {
    await this.page.getByTestId('toolbar-add-route').click();
  }

  async fillRouteForm(routeName: string, serviceName: string, path: string) {
    await this.page.getByTestId('route-form-name').fill(routeName);

    await this.page.getByTestId('route-form-service-id').click();
    await this.page.getByRole('button', { name: serviceName }).click();

    await this.page.getByTestId('route-form-paths-input-1').fill(path);
  }

  async submit() {
    await this.page.getByTestId('route-create-form-submit').click();
  }
  successToast(): Locator {
    return this.page.getByText('successfully', { exact: false });
  }
}