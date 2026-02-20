import { Page } from '@playwright/test';

const NAV_TIMEOUT = 60_000;

export class NavigationAction {
  constructor(private page: Page) {}
  async enterWorkspace(workspaceName: string) {
    await this.page.locator('table').locator(`text=${workspaceName}`).click();
  }

  async goToGatewayServices() {
    await this.page.locator('nav').locator('text=Gateway Services').click();
    await this.page
      .getByTestId('toolbar-add-gateway-service')
      .waitFor({ state: 'visible', timeout: NAV_TIMEOUT });
}

  async goToRoutes() {
    await this.page.locator('nav').locator('text=Routes').click();
    await this.page
      .getByTestId('toolbar-add-route')
      .waitFor({ state: 'visible', timeout: NAV_TIMEOUT });
  }
}
