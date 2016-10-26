import { Component, OnInit } from '@angular/core';
import {PeggingInquiryService} from './pegging.inquiry.services';

@Component({
  selector: 'app-pegging-inquiry-component',
  templateUrl: './pegging-inquiry-component.component.html',
  styleUrls: ['./pegging-inquiry-component.component.css'],
  providers: [PeggingInquiryService]
})
export class PeggingInquiryComponentComponent implements OnInit {
  deviceObjects : String[] = ["none"];
  selectedDeviceObj = this.deviceObjects[1];
  displaySearchArea: boolean = true;
  displayResultArea: boolean = false;



  clickedSearchButton(event){
    this.displaySearchArea = false;
    this.displayResultArea = true;
  }
  clickedSearchAreaButton(event){
    this.displaySearchArea = true;
    this.displayResultArea = false;
  }

  clickedResultButtonArea(event){
    this.displaySearchArea = false;
    this.displayResultArea = true;
  }

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
  }
  constructor(private peggingInquiryService: PeggingInquiryService) {
    //Service Call
    this.peggingInquiryService.getMVendorData()
      .subscribe(
        (data : any ) => this.deviceObjects.push(data)
      );
  }

  ngOnInit() {
  }

}
