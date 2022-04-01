import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  errors: any = {
    1: "A bad error",
    2: "A really bad error",
    3: "A terrible error"
  }
  errorMessage: string = "";
  errorCode: number = -1;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let err = +this.route.snapshot.params["err"];
    this.errorMessage = this.errors[err];
    this.errorCode = err;
  }

}
