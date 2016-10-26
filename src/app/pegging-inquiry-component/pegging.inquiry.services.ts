import { Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeggingInquiryService {
  mockVendorData: String[] = [];

  constructor(private http: Http){

   }


  getMVendorData() {
  let headers = new Headers();
  headers.append('Accept', 'application/xml');
  return this.http.get('https://webapps-qa.homedepot.com/VendorWS/vendor/search?type=O&subType=2&results=2000&max=2000', {
  headers: headers
  })
  .map(this.extractData).catch(this.handleError);
   //.map((response:Response) => response.json());

  }


private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  this.mockVendorData = ["10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL","10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL","10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL","10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL","10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL","10001 - LINKMAX ENTERPRISE LTD", "10026 - H.K. YIBO CERAMICS LIMIT", "52847 - HANGZHOU GREAT STAR INDL", "52976 - ROOSTER PRODUCTS INT.", "53012 - HK STONE PROJECTS LMTD.", "53034 - NEXGRILL INDUSTRIES", "53219 - LINON HOME DECOR PRODUCT", "53221 - BETAKEY CO., LTD.", "70894 - CREATIVE HOME PRODUCTS", "70919 - SUNFORCE PRODUCTS INC", "70930 - HOME FASHIONS TECHNOLOGI", "70985 - WEBER STEPHEN PRODUCTS", "71434 - KING OF FANS - IMPORTS", "71477 - LG ELECTRONICS INC", "71736 - SHANGHAI FOREIGN TRADE", "82360 - PACIFICO INDUSTRIAL LTD"];
   return this.mockVendorData;
  }






}
