import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT, SKILL_GROUPS, TIMELINE } from '../../data/portfolio.data';   // NUEVO



@Component({
  imports: [RouterLink],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  about = ABOUT;  
  timeline = TIMELINE;
  skillGroups = SKILL_GROUPS;

}
