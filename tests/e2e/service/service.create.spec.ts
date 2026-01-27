import { expect } from '@playwright/test';
import { test } from '@fixtures/workspace.context';
import { NavigationAction } from '@base/navigation.action';
import { ServiceCreateFlow } from '@flows/service/service.create.flow';
import { ServicePage } from '@pages/service/service.page';
import { serviceData } from '@data/service.data';
import { RouteCreateFlow } from '@flows/route/route.create.flow';
import { RoutePage } from '@pages/route/route.page';
import { routeData } from '@data/route.data';

test('service + route happy path', async ({ workspacePage }) => {
  const navigation = new NavigationAction(workspacePage);

  const sflow = new ServiceCreateFlow(workspacePage);
  const spage = new ServicePage(workspacePage);
  const rflow = new RouteCreateFlow(workspacePage);
  const rpage = new RoutePage(workspacePage);

  //Go to Services
  await navigation.goToGatewayServices();
  //Create Service
  await sflow.create(serviceData.name, serviceData.url, serviceData.tag);
  //Verify service created successfully
  await expect(spage.successToast()).toBeVisible();
  await expect(spage.statusEnabled()).toBeVisible();

  //Go to Routes
  await navigation.goToRoutes();
  //Create Route associated with Service
  await rflow.create(
    routeData.name,
    serviceData.name,
    routeData.path
  );
  //Verify route created successfully
  await expect(rpage.successToast()).toBeVisible();
});
