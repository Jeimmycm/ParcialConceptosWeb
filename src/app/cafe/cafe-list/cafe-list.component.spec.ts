/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const cafe = new Cafe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
      );

      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create the component Cafes', () => {
    expect(component).toBeTruthy();
  });

  it('should have <headerId> tag with the symbol #', () => {
    debug.queryAll(By.css('#headerId')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain("#")
    });
  });

  it('should have <#headerNombre> tag with the word Nombre', () => {
    debug.queryAll(By.css('#headerNombre')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain("Nombre")
    });
  });

  it('should have <#headerTipo> tag with the word Nombre', () => {
    debug.queryAll(By.css('#headerTipo')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain("Tipo")
    });
  });

  it('should have <#headerRegion> tag with the word Nombre', () => {
    debug.queryAll(By.css('#headerRegion')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain("Región")
    });
  });

  it('should have 3 <.idCafe> elements', () => {
    expect(debug.queryAll(By.css('.idCafe'))).toHaveSize(3)
  });

  it('should have 3 <.nombreCafe> elements', () => {
    expect(debug.queryAll(By.css('.nombreCafe'))).toHaveSize(3)
  });

  it('should have 3 <.tipoCafe> elements', () => {
    expect(debug.queryAll(By.css('.tipoCafe'))).toHaveSize(3)
  });
  it('should have 3 <.regionCafe> elements', () => {
    expect(debug.queryAll(By.css('.regionCafe'))).toHaveSize(3)
  });

  it('should have <.idCafe> tag with the Cafe.id', () => {
    debug.queryAll(By.css('.idCafe')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain(component.cafes[i].id)
    });
  });
  it('should have <.nombreCafe> tag with the Cafe.nombre', () => {
    debug.queryAll(By.css('.nombreCafe')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain(component.cafes[i].nombre)
    });
  });

  it('should have <.tipoCafe> tag with the Cafe.tipo', () => {
    debug.queryAll(By.css('.tipoCafe')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain(component.cafes[i].tipo)
    });
  });

  it('should have <.regionCafe> tag with the Cafe.region', () => {
    debug.queryAll(By.css('.regionCafe')).forEach((p, i) => {
      expect(p.nativeElement.textContent).toContain(component.cafes[i].region)
    });
  });

});
