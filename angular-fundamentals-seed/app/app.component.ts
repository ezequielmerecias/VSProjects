// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//   <div class="app">
//     <h1 [innerHTML]="title"></h1>
//     <h1>{{title + '!'}}</h1>
//     <div>
//     {{numberOne + numberTwo}}
//     </div>
//     <div>
//       {{ isHappy ? ':)' : ':('}}
//     </div>
//     <img [src]="logo"> <!--PropertyBinding -->
//     <button (click)="handleClick()">
//       Change me
//     </button>
//     <input type="text" 
//             [value]="name"
//             (input)="handleInput($event)"
//             (blur)="handleBlur($event)">

//             <!-- <input type="text" 
//             [ngModel]="name"
//             (ngModelChange)="handleChange($event)"> -->

//             <!-- <input type="text" 
//             [(ngModel)]="name"> -->
//     <div>{{name}}</div>
//     <br>
//     <br>
//     <button (click)="handleClickTemplateReference(username.value)">
//       Get Value
//     </button>
//     <input type="text" #username> 
//     <!-- Crea una variable dinámica -->
//     <div>{{name}}</div>

//     <br>
//     <br>
//     <template [ngIf]="name.length > 2">
//       <div > 
//         Searching for...{{name}}
//       </div>
//     </template>

//     <div *ngIf="name.length > 2">
//       Searching for...{{name}}
//     </div>
//   </div>
//   `
// })

// export class AppComponent {
//   // constructor(){
//   //   this.groceries = []
//   // }
//   // groceries: string[]
//   // title: string = 'Ultimate Angular';
//   title: string;
//   isHappy: boolean = false;
//   numberOne: number = 1;
//   numberTwo: number = 2;
//   name:string = "Todd"; //Property binding
//   logo:string = "img/logo.svg";

//   //Event Binding
//   handleClick(){
//     this.name = "Moto";
//   }
//   handleClickTemplateReference(value:string){
//     console.log(value);
//   }
//   handleInput(event: any){
//     this.name = event.target.value;
//   }
//   handleBlur(event: any){
//     this.name = event.target.value;
//     console.log(event);
//   }
//   handleChange(value:string){
//     this.name = value;
//   }
//   constructor(){
//     this.title = 'Ultimate Angular';
//   }
// }

import { Component } from "@angular/core";

interface Child{
    name:string,
    age:number
}

interface Passenger{
    id:number,
    fullname: string,
    checkedIn: boolean,
    checkInDate?: number,
    children: Child[] | null
}

@Component({
    selector: 'app-root',
    styleUrls:['app.component.scss'],
    template:`
        <div class="app">
          <!-- <h3>Airline Passengers</h3>
            <ul>
              <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
                <li>
                    {{i}}: {{ passenger.fullname}}
                </li>
              </template>
            </ul> -->

            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span class="status"
                            [class.checked-in]="passenger.checkedIn"></span>
                    {{i}}: {{ passenger.fullname}}
                </li>
            </ul>

            <!-- Hacerlo de esta forma oculta el estado de la clase con ngClass -->
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span class="status"
                            [ngClass]="{
                                'checked-in':passenger.checkedIn,
                                'checked-out':!passenger.checkedIn
                            }"></span>
                    {{i}}: {{ passenger.fullname}}
                </li>
            </ul>

            <!-- Agregar estilos utilizando [style] -->
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span class="status"
                          [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"></span>
                    {{i}}: {{ passenger.fullname}}
                </li>
            </ul>

             <!-- Agregar estilos utilizando [ngStyle] -->
             <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span class="status"
                          [ngStyle]="{
                            backgroundColor: (passenger.checkedIn ? 'green' : 'red')
                          }"></span>
                    {{i}}: {{ passenger.fullname}}
                </li>
            </ul>

            <!-- Using pipes convertidores de tipos -->
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span class="status"
                          [ngStyle]="{
                            backgroundColor: (passenger.checkedIn ? 'green' : 'red')
                          }"></span>
                    {{i}}: {{ passenger.fullname}}
                    <p>{{passenger | json}}</p>
                    <div class="date">
                        <!-- Check in date: {{ passenger.checkInDate | date: 'yMMMMd'}} -->
                        <!-- {{passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd') : 'Not Checked In' }} -->
                        {{passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not Checked In' }}
                    </div>
                    <br>
                    <!-- Safe navigation operador (agregar ? cuando es Nulleable la variable-->
                    <div class="children">
                        Children: {{ passenger.children?.length || 0}}
                    </div>
                </li>
            </ul>
        </div>
    `
})

export class AppComponent{
    passengers: Passenger[] = [{
        id:1,
        fullname:'Stephen',
        checkedIn:true,
        checkInDate: 1490472000000,
        children: null
    },
    {
        id:2,
        fullname:'Rose',
        checkedIn:false,
        checkInDate: null,
        children: [{name:'Ted', age:12},{name:'Chloe', age:7}]
    },
    {
        id:3,
        fullname:'James',
        checkedIn:true,
        checkInDate: 1491606000000,
        children: null
    },
    {
        id:4,
        fullname:'Louise',
        checkedIn:true,
        checkInDate: 1488412800000,
        children: [{name:'Jessica', age:1}]
    },
    {
        id:5,
        fullname:'Tina',
        checkedIn:false,
        checkInDate: null,
        children: null
    }
];
constructor(){

}
}