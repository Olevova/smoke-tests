import dotenv from 'dotenv';
dotenv.config();

export interface User {
    name:string
    email:string,
    password:string
    check?: boolean
}

const allUsers: Record<string, User> = {
  admin: {name:'Vova CA', email: 'volodymyr_o@terenbro.com', password: '222222',check:true  },
  manager: {name:'Vova PM', email: 'olevova1983@gmail.com', password: '222222' },
  member: {name:'Vova SU', email: 'olevova@ukr.net', password: '222222' },
  viewer:{name:'Vova Vi', email: 'olevova1983+viewer@gmail.com', password: '222222'},
  superadmin: {name:'Vova', email: 'volodymyr_o+3@terenbro.com', password: process.env.SUPERADMIN_PASSWORD || '' },
};

export const users = allUsers;