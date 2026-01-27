import { test } from '@playwright/test';

export class AllureAdapter {
  static attachJson(name: string, data: unknown) {
    test.info().attach(name, {
      body: JSON.stringify(data, null, 2),
      contentType: 'application/json',
    });
  }
}
