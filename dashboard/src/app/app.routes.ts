import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'',
    component:LayoutComponent,
    children:[
        {
            path:'dashboard',
            component:DashbordComponent,
            title:'Dashboard'
        },
        {
            path:'login',
            component:LoginComponent,
            title:'Login'
        }
    ]   
    },
    
];
