import { NgModule } from '@angular/core';

import { AvatarModule } from 'ngx-eagle/avatar';
import { BadgeModule } from 'ngx-eagle/badge';
import { ButtonModule } from 'ngx-eagle/button';
import { CarouselModule } from 'ngx-eagle/carousel';
import { CardModule } from 'ngx-eagle/card';
import { CheckboxModule } from 'ngx-eagle/checkbox';
import { DialogModule } from 'ngx-eagle/dialog';
import { DividerModule } from 'ngx-eagle/divider';
import { DrawerModule } from 'ngx-eagle/drawer';
import { ExpansionPanelModule } from 'ngx-eagle/expansion-panel';
import { GridModule } from 'ngx-eagle/grid';
import { InputModule } from 'ngx-eagle/input';
import { PieChartModule } from 'ngx-eagle/pie-chart';
import { ProgressModule } from 'ngx-eagle/progress';
import { RadioButtonModule } from 'ngx-eagle/radio-button';
import { RateModule } from 'ngx-eagle/rate';
import { SelectModule } from 'ngx-eagle/select';
import { SwitchModule } from 'ngx-eagle/switch';
import { TableModule } from 'ngx-eagle/table';
import { TabModule } from 'ngx-eagle/tab';
import { TagModule } from 'ngx-eagle/tag';
import { TimelineModule } from 'ngx-eagle/timeline';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    DividerModule,
    DrawerModule,
    ExpansionPanelModule,
    GridModule,
    InputModule,
    PieChartModule,
    ProgressModule,
    RadioButtonModule,
    RateModule,
    SelectModule,
    SwitchModule,
    TableModule,
    TabModule,
    TagModule,
    TimelineModule,
  ],
})
export class NgxEagleModule {}
