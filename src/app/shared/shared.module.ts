import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MaterialModule], // 👈 changed
  exports: [SidenavComponent], // 👈 added
})
export class SharedModule {}
