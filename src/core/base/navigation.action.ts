import { Page } from '@playwright/test';

export class NavigationAction {
  constructor(private page: Page) {}
  async enterWorkspace(workspaceName: string) {
    await this.page.locator('table').locator(`text=${workspaceName}`).click();
    await this.page.waitForLoadState('networkidle');
  }
  async goToGatewayServices() {
    await this.page.locator('nav').locator('text=Gateway Services').click();
    await this.page.waitForURL(/services/, { timeout: 60_000 });
    await this.page
    .getByTestId('toolbar-add-gateway-service')
    .waitFor({ state: 'visible', timeout: 60_000 });
}
  async goToRoutes() {
    await this.page.locator('nav').locator('text=Routes').click();
    await this.page.waitForURL(/routes/, { timeout: 60_000 });
    await this.page
    .getByTestId('toolbar-add-route')
    .waitFor({ state: 'visible', timeout: 60_000 });
  }
}
