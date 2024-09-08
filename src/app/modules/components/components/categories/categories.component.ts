import { Component, OnInit } from '@angular/core';
import { ComponentsService, NavComponents } from '../../components.service';
import { animationSequentialEntry } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    animationSequentialEntry
  ]
})
export class CategoriesComponent implements OnInit {
  allComponents: NavComponents[] = [];
  components: NavComponents[] = [];

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.componentsService.getComponentList().subscribe((nc) => {
      this.components = nc;
      this.allComponents = nc;
    });
  }
  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    if (search === '') {
      this.components = [...this.allComponents];
      return;
    }
    this.components = this.allComponents.filter((cmp) => {
      return String(cmp.title).toLowerCase().includes(search);
    });
  }
}
