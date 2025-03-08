import { Component } from '@angular/core';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import {ToolbarComponent} from '../shared/components/toolbar/toolbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [
    SidebarComponent,
    ToolbarComponent,
    RouterOutlet
  ],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
