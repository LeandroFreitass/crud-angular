import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HorasTrabalhadasPipe } from './pipes/horas-trabalhadas.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    HorasTrabalhadasPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
