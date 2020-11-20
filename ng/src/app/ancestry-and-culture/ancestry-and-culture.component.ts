import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ancestry-and-culture',
  templateUrl: './ancestry-and-culture.component.html',
  styleUrls: ['./ancestry-and-culture.component.scss']
})
export class AncestryAndCultureComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  ancestry: FormGroup = this.formBuilder.group({ ancestry: [''] });
  culture: FormGroup = this.formBuilder.group({ culture: [''] });

  constructor(private breakpointObserver: BreakpointObserver, private readonly formBuilder: FormBuilder) {}
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Ancestry, Culture, Ref } from 'src/models/ancestry-and-culture';
// import { AncestryAndCultureService } from './ancestry-and-culture.service';

// @Component({
//   selector: 'app-ancestry-and-culture',
//   templateUrl: './ancestry-and-culture.component.html',
//   styleUrls: ['./ancestry-and-culture.component.scss']
// })
// export class AncestryAndCultureComponent implements OnInit {
//   form: FormGroup;
//   ancestry: FormControl;
//   culture: FormControl;
//   ancestries: Ref[];
//   cultures: Ref[];

//   constructor(private readonly service: AncestryAndCultureService, private readonly formBuilder: FormBuilder) {
//     this.ancestry = this.formBuilder.control(null);
//     this.culture = this.formBuilder.control(null);
//     this.form = this.formBuilder.group({ ancestry: this.ancestry, culture: this.culture });
//   }

//   ngOnInit(): void {
//     this.ancestries = this.service.getAncestryList();
//     this.cultures = this.service.getCultureList();
//   }

//   displayAncestry(ancestry: Ancestry): string {
//     return ancestry ? ancestry.name : '';
//   }
// }
