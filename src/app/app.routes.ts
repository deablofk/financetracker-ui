import {Routes} from '@angular/router';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {PaymentsComponent} from './payments/payments.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'payments', component: PaymentsComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
];
