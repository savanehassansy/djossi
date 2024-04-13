import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from './components/project/project.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { AnimationComponent } from './animation/animation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    ContactComponent,
    ProjectComponent,
    // AnimationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
