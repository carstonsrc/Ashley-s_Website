import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { AboutComponent } from '../components/about/about.component';
import { MediaKitComponent } from '../components/media-kit/media-kit.component';
import { ProfessionalPortfolioComponent } from '../components/professional-portfolio/professional-portfolio.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
    {path:"homepage", component: HomepageComponent},
    {path:"about", component: AboutComponent},
    {path: "mediakit", component: MediaKitComponent},
    {path: "portfolio", component: ProfessionalPortfolioComponent},
    {path: "contact", component:ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
