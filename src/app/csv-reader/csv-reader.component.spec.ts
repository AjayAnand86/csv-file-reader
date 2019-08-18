import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CSVReaderComponent } from './csv-reader.component';

describe('CSVReaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CSVReaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CSVReaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CSV-reader'`, () => {
    const fixture = TestBed.createComponent(CSVReaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CSV-reader');
  });

});
