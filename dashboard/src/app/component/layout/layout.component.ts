import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sidebarWidth: string = '250px';

  openNav() {
    //this.sidebarWidth = '250px';
    this.sidebarWidth = this.sidebarWidth === '250px' ? '0' : '250px';
  }

  closeNav() {
    this.sidebarWidth = '250px';
  }
}
