import { AppDataService } from './services/app-data.service';
import { AuthGuard } from './services/auth-guard.service';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { ScreenService } from '../../fw/services/screen.service';
import { FrameworkConfigService } from '../../fw/services/framework-config.service';
import { FwModule } from '../../fw/fw.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { SettingsComponent } from './settings/settings.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieMaintComponent } from './movie-maint/movie-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserApi } from '../../fw/users/user-api';
import { UserService } from './services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    SettingsComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieMaintComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FrameworkConfigService,ScreenService,UserService,{provide:UserApi,useExisting:UserService},AuthGuard,AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
