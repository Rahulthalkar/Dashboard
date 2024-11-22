import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  openSidebar() {
    this.sidebarToggle.emit();
  }
}
