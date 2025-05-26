import { test, expect } from '@playwright/test';
import CompanyPage from '../pages/company.page';
import LoginPage from '../pages/login.page';
import { users } from '../utils/users';
import ProjectPage from '../pages/project.page';
import {URLS} from '../utils/config'; 

// test.use({ storageState: 'utils/state/superAdmin.json' })

test('Check open and verify Company form by Super Admin', async({page})=>{
    const company = new CompanyPage(page);
    const login = new LoginPage(page);

    await login.performAuthentication(users.superadmin);
    await login.checkUserMenu();
    // await company.goToCompaniesPage(URLS.DASHBOARD);
    await company.goToCompanyPageBySidebarLink();
    await company.openCompanyForm();
    await company.verifyCompanyFormSnapshot();
    await company.cancelCompanyCreation();

});

test('Check open and verify Project form by Super Admin', async({page})=>{
    const project = new ProjectPage(page);
    const login = new LoginPage(page);

    await login.performAuthentication(users.superadmin);
    // await login.checkUserMenu();
    await project.goToProjectPage(URLS.COMPANY_DASHBOARD(32));
    await project.openCreateProjectForm();
    await project.verifyProjectFormSnapshot();
    await project.cancelProjectCreation();

});