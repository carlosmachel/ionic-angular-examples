import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IonicModule, Platform } from 'ionic-angular';

import { RepositoriesComponent } from './repositories.component';

describe('RepositoriesComponent', ()=>{
    let comp: RepositoriesComponent;
    let fixture: ComponentFixture<RepositoriesComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RepositoriesComponent],
            imports:[
                IonicModule.forRoot(RepositoriesComponent)
            ],
        });

        fixture = TestBed.createComponent(RepositoriesComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('ion-card-title'));        
    });

    it('should create component', () => expect(comp).toBeDefined());
});