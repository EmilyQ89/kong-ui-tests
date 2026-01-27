import { Page } from '@playwright/test';
import { ServicePage } from '@pages/service/service.page';
import { AllureAdapter } from '@reporting/allure.adapter';
import { Logger } from '@utils/logger';

export class ServiceCreateFlow {
  constructor(private page: Page) {}

  async create(name: string, url: string, tag?: string) {
    Logger.info(`Creating service: ${name}`);
    AllureAdapter.attachJson('service-create-input', {
      name,
      url,
    });
    const service = new ServicePage(this.page);
    await service.clickCreateService();
    await service.fillServiceForm(name, url, tag);
    await service.submit();
    Logger.info(`Service created: ${name}`);
    AllureAdapter.attachJson('service-create-result', {
      name,
      status: 'submitted',
    });
  }
}