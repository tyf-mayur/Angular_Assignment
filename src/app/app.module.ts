import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [AppComponent, PagenotfoundComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, UserAuthModule, DashboardModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent, PagenotfoundComponent],
})
export class AppModule {}
