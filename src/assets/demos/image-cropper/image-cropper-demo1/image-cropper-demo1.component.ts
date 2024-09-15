import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'ngx-eagle/button';
import { GridModule } from 'ngx-eagle/grid';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-eagle/image-cropper';


@Component({
  selector: 'app-image-cropper-demo1',
  templateUrl: './image-cropper-demo1.component.html',
  styleUrls: ['./image-cropper-demo1.component.scss'],
  standalone: true,
  imports: [NgIf, ImageCropperComponent, ButtonModule, GridModule]

})
export class ImageCropperDemo1Component {
  imageChangedEvent: Event | null = null;
  croppedImageBlob: Blob | null | undefined = null;
  croppedImagebase64: string | null = null;
  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = null;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      this.croppedImagebase64 = event.base64;
    } else {
      console.error('blob is null or undefined');
    }
  }
}
