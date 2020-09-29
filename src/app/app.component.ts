import { Component } from '@angular/core';
import * as sha512 from 'js-sha512';

// Services
import { HomeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private homeService: HomeService
  ) {}

  res: any;
  orderId: any;

  getTrendingProductList() {
const value = '45d3e30c7b244ce6f496293d6d3dbd963922c060|charvila veedu|pulipra|10|01113598-0efc-49a1-853e-183fb39c7861|KOllam|India|INR|description|arunkumar@aabasoft.in|TEST|Arunkumar|123|8943639627|http://localhost:4200/payment|Kerala|udf1|udf2|udf3|udf4|udf5|989898';
    const data = {
      address_line_1: 'charvila veedu',
      address_line_2: 'pulipra',
      amount: '10',
      api_key: '01113598-0efc-49a1-853e-183fb39c7861',
      city: 'KOllam',
      country: 'India',
      currency: 'INR',
      description: 'description',
      email: 'arunkumar@aabasoft.in',
      hash: sha512.sha512(value).toUpperCase(),
      mode: 'TEST',
      name: 'Arunkumar',
      order_id: this.orderId,
      phone: '8943639627',
      return_url: 'https://app.getpostman.com/',
      state: 'Kerala',
      zip_code: '989898',
      udf1: 'udf1',
      udf2: 'udf2',
      udf3: 'udf3',
      udf4: 'udf4',
      udf5: 'udf5'
    };
    this.homeService.requestPayment(data)
      .subscribe((res: any) => {
        console.log('afsf ', res)
        window.location.replace(res['data']['url']);
        this.res = res;
      });
  }

}
