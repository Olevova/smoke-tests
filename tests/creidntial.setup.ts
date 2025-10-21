import { test as setup, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import { users } from '../utils/users';

const authUsers = [
    //  { name: 'Super Admin', user: users.superadmin },
   { name: 'Manager', user: users.manager },
  { name: 'Member', user: users.member },
  { name: 'Viewer', user: users.viewer },
]

authUsers.forEach(({name,user})=>{
    setup(`Log In, check user menu and Log Out by ${name}`, async({page})=>{
    const login = new LoginPage(page);
    await login.performAuthentication(user);
    await login.checkUserMenu();
    await login.logOut();
})
})

setup('Check forgot password page', async({page})=>{
    const login = new LoginPage(page);
    await login.openForgotPasswordPage();
})

// setup('Log In, check user menu and Log Out by Manager', async({page})=>{
//     const login = new LoginPage(page);
//     await login.performAuthentication(users.manager);
//     await login.checkUserMenu();
//     await login.logOut();
// });

// setup('Log In, check user menu and Log Out by Member', async({page})=>{
//     const login = new LoginPage(page);
//     await login.performAuthentication(users.member);
//     await login.checkUserMenu();
//     await login.logOut();
// });


// setup('Log In, check user menu and Log Out by Viewer', async({page})=>{
//     const login = new LoginPage(page);
//     await login.performAuthentication(users.viewer);
//     await login.checkUserMenu();
//     await login.logOut();
// });

// setup('login by Super Admin', async({page}) =>{
//     const login = new LoginPage(page);
//     await login.performAuthentication(users.superadmin);
//     await page.context().storageState({path:'utils/state/superAdmin.json'})
// });

setup('login by Admin', async({page}) =>{
    const login = new LoginPage(page);
    await login.performAuthentication(users.admin);
    await page.context().storageState({path:'utils/state/admin.json'});

});