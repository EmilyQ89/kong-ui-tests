import { Page } from '@playwright/test';

export class AuthAction {
  constructor(private page: Page) {}

  async openApplication(baseUrl: string) {
    await this.page.goto(baseUrl);
    await this.page.waitForLoadState('networkidle');
  }
}
