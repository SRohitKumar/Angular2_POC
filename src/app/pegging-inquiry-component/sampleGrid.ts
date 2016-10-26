import {Component} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app1',
  template: '<ag-grid-ng2 [gridOptions]="gridOptions" class="ag-fresh" style="height: 300px; width: 1420px; padding-left: 1%; padding-top: 0.1%; table-layout: fixed;" [columnDefs]="columnDefs"  [rowData] = "rowData"></ag-grid-ng2>',
  styles: [`
  `]
})
export class SampleAppComponent {
  rowCount = 2;
  columnDefs = [
    {headerName: "SOQ NUMBER", field: "SuggestedOrderQuantityReferenceId" , width: 300},
    {headerName: "UserID", field: "LastUpdateSystemUserId" , width: 250},
    {headerName: "MVNDRNBR", field: "MerchandiseVendorNumber" , width: 300},
    {headerName: "Total Peg Request Lines", field: "lineCount", width: 250},
    {headerName: "Peg Request Status", field: "statusDescription" , width: 300},
  ];
  // put data directly onto the controller
  rowData = [
    {
      "SuggestedOrderQuantityReferenceId": "48000",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "6"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123455",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123456",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294917",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "5"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294918",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300035",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300036",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300037",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "1"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300090",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300091",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    }, {
      "SuggestedOrderQuantityReferenceId": "48000",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "6"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123455",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123456",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294917",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "5"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294918",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300035",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300036",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300037",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "1"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300090",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300091",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    }, {
      "SuggestedOrderQuantityReferenceId": "48000",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "6"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123455",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123456",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294917",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "5"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294918",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300035",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300036",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300037",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "1"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300090",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300091",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    }, {
      "SuggestedOrderQuantityReferenceId": "48000",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "6"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123455",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "123456",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "2"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294917",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "5"
    },
    {
      "SuggestedOrderQuantityReferenceId": "294918",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300035",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300036",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "3"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300037",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "1"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300090",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    },
    {
      "SuggestedOrderQuantityReferenceId": "300091",
      "MerchandiseVendorNumber": "52847",
      "PegOrderStatusCode": "15",
      "UserModificationFlag": "false",
      "ProcessedFlag": "false",
      "LastUpdateSystemUserId": "KXS8102                 ",
      "statusDescription": "Uploaded to PPO",
      "lineCount": "4"
    }
  ];
  asddsa ($event){
    var rowData = 12;
    alert("Rohit");


    return rowData

}


  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    onRowClicked: this.asddsa


  }


}
