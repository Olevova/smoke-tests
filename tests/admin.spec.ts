import { test, expect } from '@playwright/test';
import ProjectPage from '../pages/project.page';
import UserPage from '../pages/user.page';
import ColorBoardPage from '../pages/colorBoard.page';
import {URLS} from '../utils/config';
import { DashboardPage } from '../pages/dashboard.page';
import MyTaskPage from '../pages/mytask.page';

test.use({ storageState: 'utils/state/admin.json' });

test('Check open and verify Project by Admin', async({page})=>{
    const project = new ProjectPage(page);

    await project.goToProjectPage(URLS.COMPANY_DASHBOARD(32));
    await project.openCreateProjectForm();
    await project.verifyProjectFormSnapshot();
    await project.cancelProjectCreation();

});

test('Check open and verify Invite form by admin', async({page})=>{
    const user = new UserPage(page);

    await user.goToInviteUserPage(URLS.USER_DASHBOARD(32));
    await user.openInviteUserForm();
    await user.cancelUserInvitation();

});

test('Check open and verify Color Board create form by admin', async({page})=>{
    const colorboard = new ColorBoardPage(page);

    await colorboard.goToColorBoardPage(URLS.COMPANY_DASHBOARD(32));
    await colorboard.openCreateColorBoardForm();
    await colorboard.cancelColorBoardCreation();

});

test('Check open and verify Task create form by admin on My Task', async({page})=>{
    const mytask = new MyTaskPage(page);

    await mytask.goToMyTaskPage(URLS.COMPANY_DASHBOARD(32));
    await mytask.openCreateTaskForm();
    await mytask.verifyTaskFormSnapshot();
    await mytask.cancelTaskCreation();

});

test('Check admin dashboard page', async({page})=>{
    const dashboard = new DashboardPage(page);

    await dashboard.navigateToPage(URLS.COMPANY_DASHBOARD(32));
    await dashboard.verifyAllWidgets();
});