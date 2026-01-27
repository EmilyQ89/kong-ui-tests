import { Page } from '@playwright/test';

export class NavigationAction {
  constructor(private page: Page) {}
  async enterWorkspace(workspaceName: string) {
    await this.page.locator('table').locator(`text=${workspaceName}`).click();
    await this.page.waitForLoadState('networkidle');
  }
  async goToGatewayServices() {
    await this.page.locator('nav').locator('text=Gateway Services').click();
  }
  async goToRoutes() {
    await this.page.locator('nav').locator('text=Routes').click();
  }
}
