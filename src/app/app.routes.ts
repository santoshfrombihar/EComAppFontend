import { Routes } from '@angular/router';
import { Login } from './customer/login/login';
import { Register } from './customer/register/register';

export const routes: Routes = [
    {
        path:'login',
        component: Login
    },
    {
        path:'register',
        component: Register
    }
];
