import { Page } from '@playwright/test';
import { RoutePage } from '@pages/route/route.page';
import { Logger } from '@utils/logger';

export class RouteCreateFlow {
  constructor(private page: Page) {}

  async create(route: string, service: string, path: string) {
    Logger.info(`Creating route: ${route}`);
    const routePage = new RoutePage(this.page);
    await routePage.clickCreateRoute();
    await routePage.fillRouteForm(route, service, path);
    await routePage.submit();
    Logger.info(`Route created: ${route}`);
  }
}