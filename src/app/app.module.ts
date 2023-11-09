import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ScanmeComponent } from './pages/scanme/scanme.component';
import { CheckBalanceComponent } from './pages/check-balance/check-balance.component';
import { RechargeComponent } from './pages/recharge/recharge.component';
import { WithdrawalComponent } from './pages/withdrawal/withdrawal.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ScanmeComponent,
    CheckBalanceComponent,
    RechargeComponent,
    WithdrawalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
