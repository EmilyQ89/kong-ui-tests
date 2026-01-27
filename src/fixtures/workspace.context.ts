import { test as base, Page, expect } from '@playwright/test';
import { env } from '@config/env.local';
import { defaultWorkspace } from '@src/config/workspace';
import { AuthAction } from '@base/auth.action';
import { NavigationAction } from '@base/navigation.action';

type WorkspaceFixtures = {
  workspacePage: Page;
};

export const test = base.extend<WorkspaceFixtures>({
  workspacePage: async (
    { page }: { page: Page },
    use
  ) => {
    const auth = new AuthAction(page);
    await auth.openApplication(env.baseUrl);

    const navigation = new NavigationAction(page);
    await navigation.enterWorkspace(defaultWorkspace.name);

    await use(page);
  },
});

export { expect };

