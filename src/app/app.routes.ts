import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {
        path:'booking',
        component:BookingComponent
    },
    {
        path:'',
        component:LoginComponent
    }
];
