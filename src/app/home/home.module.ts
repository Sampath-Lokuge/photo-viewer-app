import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { PhotoviewerComponent } from './shared/components/photoviewer/photoviewer.component';
import { HomePage } from './pages/home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, PhotoviewerComponent],
})
export class HomePageModule {}
