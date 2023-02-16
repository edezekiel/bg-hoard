import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, FormatRatingPipe } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { StoreFeatureGameDetailsModule } from '@bg-hoard/store/feature-game-details';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, FormatRatingPipe],
  imports: [
    BrowserModule,
    StoreUiSharedModule,
    StoreFeatureGameDetailsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
