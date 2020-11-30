import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableItemComponent } from './table-item.component';

describe('TableItemComponent', () => {
  let component: TableItemComponent;
  let fixture: ComponentFixture<TableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
