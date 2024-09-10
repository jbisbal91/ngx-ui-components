import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-cropper-docs',
  templateUrl: './image-cropper-docs.component.html'
})
export class ImageCropperDocsComponent implements OnInit {
  displayedColumns: string[] = ['Property', 'Description', 'Type', 'Default'];
  propertiesImageCropper: Property[] = [];
  variation1DemoImageCropper!: Tabs[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.variation1DemoImageCropper = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/resize/resize-demo1/resize-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resize/resize-demo1/resize-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/resize/resize-demo1/resize-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

    this.propertiesImageCropper = [
      {
        property: '[imageChangedEvent]',
        description: 'Event emitted when the image is changed',
        type: 'Event | null',
        default: '-',
      },
      {
        property: '[imageURL]',
        description: 'URL of the image to be cropped',
        type: 'string',
        default: '-',
      },
      {
        property: '[imageBase64]',
        description: 'Base64 of the image to be cropped',
        type: 'string',
        default: '-',
      },
      {
        property: '[imageFile]',
        description: 'File of the image to be cropped',
        type: 'File',
        default: '-',
      },
      {
        property: '[imageAltText]',
        description: 'Alt text of the image',
        type: 'string',
        default: '-',
      },
      {
        property: '[options]',
        description: 'Options for the image cropper',
        type: 'Partial<CropperOptions>',
        default: '-',
      },
      {
        property: '[cropperFrameAriaLabel]',
        description: 'Aria label for the cropper frame for accessibility',
        type: 'string',
        default: '-',
      },
      {
        property: '[output]',
        description: 'Output format of the cropped image, either blob or base64',
        type: "'blob' | 'base64'",
        default: 'blob',
      },
      {
        property: '[format]',
        description: 'Format of the output image (e.g., jpeg, png)',
        type: 'OutputFormat',
        default: 'jpeg',
      },
      {
        property: '[autoCrop]',
        description: 'Automatically crop the image after selection',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[cropper]',
        description: 'Position of the cropper on the image',
        type: 'CropperPosition',
        default: '-',
      },
      {
        property: '[transform]',
        description: 'Transformations to apply to the image (rotate, scale, etc.)',
        type: 'ImageTransform',
        default: '-',
      },
      {
        property: '[maintainAspectRatio]',
        description: 'Maintains the aspect ratio during cropping',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[aspectRatio]',
        description: 'Aspect ratio to maintain during cropping (width/height)',
        type: 'number',
        default: '1',
      },
      {
        property: '[resetCropOnAspectRatioChange]',
        description: 'Resets the cropper when the aspect ratio changes',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[resizeToWidth]',
        description: 'Resizes the cropped image to a specific width',
        type: 'number',
        default: '-',
      },
      {
        property: '[resizeToHeight]',
        description: 'Resizes the cropped image to a specific height',
        type: 'number',
        default: '-',
      },
      {
        property: '[cropperMinWidth]',
        description: 'Minimum width of the cropper',
        type: 'number',
        default: '0',
      },
      {
        property: '[cropperMinHeight]',
        description: 'Minimum height of the cropper',
        type: 'number',
        default: '0',
      },
      {
        property: '[cropperMaxWidth]',
        description: 'Maximum width of the cropper',
        type: 'number',
        default: '-',
      },
      {
        property: '[cropperMaxHeight]',
        description: 'Maximum height of the cropper',
        type: 'number',
        default: '-',
      },
      {
        property: '[cropperStaticWidth]',
        description: 'Static width of the cropper frame',
        type: 'number',
        default: '-',
      },
      {
        property: '[cropperStaticHeight]',
        description: 'Static height of the cropper frame',
        type: 'number',
        default: '-',
      },
      {
        property: '[canvasRotation]',
        description: 'Rotation angle of the canvas in degrees',
        type: 'number',
        default: '0',
      },
      {
        property: '[initialStepSize]',
        description: 'Initial step size for resizing the cropper',
        type: 'number',
        default: '3',
      },
      {
        property: '[roundCropper]',
        description: 'Sets the cropper frame to a circular shape',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[onlyScaleDown]',
        description: 'Scales the image down only if necessary to fit within the cropper',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[imageQuality]',
        description: 'Quality of the output image (0 to 1)',
        type: 'number',
        default: '0.92',
      },
      {
        property: '[backgroundColor]',
        description: 'Background color behind the image (useful for PNG)',
        type: 'string',
        default: 'transparent',
      },
      {
        property: '[containWithinAspectRatio]',
        description: 'Contains the image within the defined aspect ratio',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[hideResizeSquares]',
        description: 'Hides the resize squares around the cropper',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[allowMoveImage]',
        description: 'Allows the image to be moved within the cropper',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[checkImageType]',
        description: 'Checks the type of the image before processing',
        type: 'boolean',
        default: 'true',
      },
      {
        property: '[alignImage]',
        description: 'Alignment of the image within the cropper frame',
        type: "'left' | 'center'",
        default: 'center',
      },
      {
        property: '[disabled]',
        description: 'Disables the cropper component',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '[hidden]',
        description: 'Hides the cropper component',
        type: 'boolean',
        default: 'false',
      },
      {
        property: '(imageCropped)',
        description: 'Emits when the image is successfully cropped',
        type: 'EventEmitter<ImageCroppedEvent>',
        default: '-',
      },
      {
        property: '(startCropImage)',
        description: 'Emits when the cropping process starts',
        type: 'EventEmitter<void>',
        default: '-',
      },
      {
        property: '(imageLoaded)',
        description: 'Emits when the image is fully loaded',
        type: 'EventEmitter<LoadedImage>',
        default: '-',
      },
      {
        property: '(cropperReady)',
        description: 'Emits when the cropper is ready for interaction',
        type: 'EventEmitter<Dimensions>',
        default: '-',
      },
      {
        property: '(loadImageFailed)',
        description: 'Emits when loading the image fails',
        type: 'EventEmitter<void>',
        default: '-',
      },
      {
        property: '(transformChange)',
        description: 'Emits when image transformation changes (scale, rotate)',
        type: 'EventEmitter<ImageTransform>',
        default: '-',
      },
      {
        property: '(cropperChange)',
        description: 'Emits when the cropper position changes',
        type: 'EventEmitter<CropperPosition>',
        default: '-',
      },
    ];
    
  }
}
