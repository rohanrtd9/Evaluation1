import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactInfoComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot([
      {
        path:'about',
        component:AboutMeComponent
      } 
      ,{
        path:"contact",
        component:ContactInfoComponent
      }
      ,{
        path:"experience",
        component:ExperienceComponent
      }
      ,{
        path:"recommendations",
        component:RecommendationsComponent
      }
      ,{
        path:"skills",
        component:SkillsComponent
      }
      
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
