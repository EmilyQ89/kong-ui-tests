import { Page, Locator } from '@playwright/test';

export class ServicePage {
  constructor(private page: Page) {}

  async clickCreateService() {
    await this.page.getByTestId('toolbar-add-gateway-service').click();
  }

  async fillServiceForm(name: string, url: string, tag?: string) {
    await this.page.getByTestId('gateway-service-url-input').fill(url);
    await this.page.getByTestId('gateway-service-name-input').fill(name);
    if(tag){
      await this.page.getByTestId('tags-collapse').getByTestId('collapse-trigger-content').click();
      await this.page.getByTestId('gateway-service-tags-input').fill(tag);
    }
  }

  async submit() {
    await this.page.getByTestId('service-create-form-submit').click();
  }
  successToast(): Locator {
    return this.page.getByText('successfully created', { exact: false });
  }
  statusEnabled(): Locator {
    return this.page.getByTestId('status').getByText('Enabled');
  }
}