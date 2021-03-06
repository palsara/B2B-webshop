import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails$: BehaviorSubject<any> = this.ds.orderDetailsList;

  constructor(
    private ds: DataService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let orderID;
    this.ar.params.forEach(param => orderID = param.id);
    this.ds.readTableByQuery('orderdetails', {
      select: 'orderdetails.id as id, orderdetails.insdate as insdate, orderdetails.projectid as projectid, orderdetails.quantity as quantity, orderdetails.status as status, projects.donation as price, projects.title as title, orderdetails.orderid as orderid',
      from: 'INNER JOIN projects ON orderdetails.projectid = projects.id',
      'orderdetails.orderid': orderID,
    });
  }

  deleteDonation(ev, detailID: number, status: number) {
    ev.preventDefault();
    if (!status) {
      return;
    }
    this.ds.deleteRecordByQuery('orderdetails', {
      id: detailID,
    });
    this.router.navigateByUrl('/orders');
  }

}
