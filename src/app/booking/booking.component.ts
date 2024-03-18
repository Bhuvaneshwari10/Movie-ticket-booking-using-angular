import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  place!:string;
  movie!:string;
  theatre!:string;
  timing!:string;
  movie1!:string;
  movie2!:string;
  movie3!:string;
  theatre1!:string;
  theatre2!:string;
  theatre3!:string;
  timing2!:string;
  timing3!:string;
  show!:boolean;
  show1!:boolean;
  show2!:boolean;
  show3!:boolean;
  show4!:boolean;
  show5!:boolean;
  show6!:boolean;
showOutput:boolean=false;
  onClick(){
    this.showOutput=true;
console.log(this.place);
  }

}
