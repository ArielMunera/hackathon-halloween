import { Component, OnInit, ViewChild } from '@angular/core';
import { Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  buttonOverlayOrigin: CdkOverlayOrigin;

  //isMenuOpen: boolean = false;

  //@ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin;

  constructor(/*overlay: Overlay*/) {
    /*const overlayRef = overlay.create({
      height: '400px',
      width: '600px',
    });*/
  }

  ngOnInit() {
  }

}
