import {Component} from '@angular/core';
import {Car} from './car';
import {CARS} from './mock-car';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;
  cars=CARS;
  car_details=Object.keys;
  show:boolean;

  constructor(private modalService: NgbModal) {}

  open(content) {
    
    //console.log(i);
      
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }); 
    
    


  }


  
}
