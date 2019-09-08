import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { FishProfileComponent } from './fish-profile/fish-profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FishCamComponent } from './fish-cam/fish-cam.component';
import { FishSubmissionComponent } from './fish-submission/fish-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    FishProfileComponent,
    ToolbarComponent,
    FishCamComponent,
    FishSubmissionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: FishProfileComponent },
      { path: 'fish-submission', component: FishSubmissionComponent },
      { path: 'fish-cam', component: FishCamComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
