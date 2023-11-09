import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ScanmeComponent } from 'src/app/pages/scanme/scanme.component';
import { RechargeComponent } from 'src/app/pages/recharge/recharge.component';
import { WithdrawalComponent } from 'src/app/pages/withdrawal/withdrawal.component';
import { CheckBalanceComponent } from 'src/app/pages/check-balance/check-balance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'scanqr',   component: ScanmeComponent },
    { path: 'recharge',   component: RechargeComponent },
    { path: 'withdrawal',   component: WithdrawalComponent },
    { path: 'check-balance',   component: CheckBalanceComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
