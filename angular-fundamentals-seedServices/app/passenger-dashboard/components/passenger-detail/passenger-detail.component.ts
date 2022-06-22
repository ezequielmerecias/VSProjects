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
        <div class="children">
            Children: {{ detail.children?.length || 0}}
        </div>
        <button (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
        </button>
        <button (click)="onRemove()">
            Remove
        </button>
    </div>
    `
})

export class PassengerDetailComponent implements OnChanges, OnInit{
    
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

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