import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storeFeatureGameDetailsRoutes } from './lib.routes';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule, RouterModule.forChild(storeFeatureGameDetailsRoutes)],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailsModule {}
