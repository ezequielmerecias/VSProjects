import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector:'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template:`
    <div>
        <span class="status" [class.checked-in]="detail.checkedIn"></span>
        <div *ngIf="editing">
            <input type="text" [value]="detail.fullname"
                    [value]="detail.fullname"
                    (input)="onNameChange(name.value)"
                    #name>
        </div>
        <div *ngIf="!editing">
            {{ detail.fullname }}
        </div>
        <div class="date">
            CheckIn date:
            {{detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not Checked In' }}
        </div>
        <button (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
        </button>
        <button (click)="onRemove()">
            Remove
        </button>
        <button (click)="goToPassenger()">
            View
        </button>
    </div>
    `
})

export class PassengerDetailComponent implements OnChanges, OnInit{
    
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger> ();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger> ();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger> ();

    editing: boolean = false;
    constructor(){}

    ngOnChanges(changes): void {
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log(changes);
        console.log('change');
    }

    ngOnInit(){
        console.log('ngOnInit');
    }

    onNameChange(value:string){
        this.detail.fullname = value;
    }

    goToPassenger(){
        this.view.emit(this.detail);
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove(){
        this.remove.emit(this.detail);
    }
}