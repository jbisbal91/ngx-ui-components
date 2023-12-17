import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Tabs } from 'src/app/modules/component/interfaces/tabs.interface';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  constructor() { }

  demoConfig!: Tabs[];

  moduleImport = `<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">import</span> { NgModule } from <span class="hljs-string" style="color: rgb(221, 17, 68);">'@angular/core'</span>;
<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">import</span> { BrowserModule } from <span class="hljs-string" style="color: rgb(221, 17, 68);">'@angular/platform-browser'</span>;

<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">import</span> { AppRoutingModule } from <span class="hljs-string" style="color: rgb(221, 17, 68);">'./app-routing.module'</span>;
<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">import</span> { AppComponent } from <span class="hljs-string" style="color: rgb(221, 17, 68);">'./app.component'</span>;

<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">import</span> {TabModule} from <span class="hljs-string" style="color: rgb(221, 17, 68);">'ngx-ui-components'</span>;


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
<span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">export</span> <span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">class</span> AppModule { }`;

  stylesImport = `{
  <span class="hljs-attr">"assets"</span>: [
    {
      <span class="hljs-string" style="color: rgb(221, 17, 68);">"src/favicon.ico"</span>,
      <span class="hljs-string" style="color: rgb(221, 17, 68);">"src/assets"</span>
    }
   ],
   <span class="hljs-attr">"styles"</span>: [
      <span class="hljs-string" style="color: rgb(221, 17, 68);">"src/styles.scss"</span>,
      <span class="hljs-string" style="color: rgb(221, 17, 68);">"node_modules/ngx-ui-components/src/lib/assets/styles/main.scss"</span>
    ]
}`;

  ngOnInit() {
    this.demoConfig = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: EMPTY
        }
      }, {
        tabTitle: 'TS',
        tabContent: {
          code: EMPTY
        }
      }, {
        tabTitle: 'SCSS',
        tabContent: {
          code: EMPTY
        }
      }];
  }

}
