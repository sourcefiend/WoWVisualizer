import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Overview',
      },
      {
        label: 'Achievements',
        
        items: [
          { label: 'Character' },
          { label: 'Quests' },
          { label: 'Exploration' },
          { label: 'Players vs. Player' },
          { label: 'Dungeons & Raids' },
          { label: 'Professions' },
          { label: 'Reputation' },
          { label: 'World Events' },
          { label: 'Pet Battles' },
          { label: 'Collections' },
          { label: 'Expansion Features' },
          { label: 'Legacy' },
          { label: 'Feats of Strength' },
        ]
      },
      {
        label: 'Collectables',
        
        items: [
          { label: 'Mounts' },
          { label: 'Companions' },
          { label: 'Battle Pets' },
          { label: 'Toys' },
          { label: 'Titles' },
        ]
      },
      {
        label: 'Calendar',
      },
      {
        label: 'Reputation',
      },
    ];
  }

}
