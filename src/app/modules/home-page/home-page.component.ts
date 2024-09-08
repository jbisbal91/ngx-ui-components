import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ComponentsService,
  NavComponents,
} from '../components/components.service';
import { animationSequentialEntry } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    animationSequentialEntry
  ]
})
export class HomePageComponent implements OnInit {
  moduleImport = `  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';

  import { TabModule } from 'ngx-eagle/tab';


  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      TabModule
    ],
    bootstrap: [ AppComponent ],
    providers   : []
  })
  export class AppModule { }
`;

  installation = `  $ ng new PROJECT_NAME
  $ cd PROJECT_NAME
  $ npm i ngx-eagle
`;

  stylesImport = `{
    "assets": [
      {
        "src/favicon.ico",
        "src/assets"
      }
    ],
    "styles": [
        "src/styles.scss",
        "node_modules/ngx-eagle/ngx-eagle.min.scss"
      ]
  }
`;
  components: NavComponents[] = [];
  constructor(
    private componentsService: ComponentsService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.componentsService.getComponentList().subscribe((nc) => {
      this.components = nc;
    });
  }

  @ViewChild('cont_featured_comp') featuredCompRef!: ElementRef;

  showPrevious: boolean = false;
  showNext: boolean = true;

  onPrevious() {
    const transform = this.getTransformValue() + 200;
    this.showButtons(transform);
    this.renderer.setStyle(
      this.featuredCompRef.nativeElement,
      'transform',
      `translateX(${transform}px)`
    );
  }

  onNext() {
    const transform = this.getTransformValue() - 200;
    this.showButtons(transform);
    this.renderer.setStyle(
      this.featuredCompRef.nativeElement,
      'transform',
      `translateX(${transform}px)`
    );
  }

  getTransformValue() {
    const transform = this.featuredCompRef.nativeElement.style.transform;
    const match = transform.match(/translateX\((-?\d+\.?\d*)px\)/);
    return match ? parseFloat(match[1]) : 0;
  }

  showButtons(transform: number) {
    const featuredCompProp =
      this.featuredCompRef.nativeElement.getBoundingClientRect();
    this.showPrevious = transform !== 0;
    this.showNext = !(
      this.components.length * 200 - (featuredCompProp.width + 20) <=
      Math.abs(transform)
    );
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    this.showButtons(this.getTransformValue());
  }
}
