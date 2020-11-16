import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ancestry, Culture, Ref } from 'src/models/ancestry-and-culture';
import { AncestryAndCultureService } from './ancestry-and-culture.service';

@Component({
  selector: 'app-ancestry-and-culture',
  templateUrl: './ancestry-and-culture.component.html',
  styleUrls: ['./ancestry-and-culture.component.scss']
})
export class AncestryAndCultureComponent implements OnInit {
  form: FormGroup;
  ancestries: Ref[];
  cultures: Ref[];
  ancestry: Ancestry | null;
  culture: Culture | null;

  constructor(private readonly service: AncestryAndCultureService, private readonly formBuilder: FormBuilder) {
    this.ancestry = null;
    this.culture = null;
    this.form = this.formBuilder.group({
      ancestry: [null, [Validators.required]],
      culture: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.ancestries = this.service.getAncestryList();
    this.cultures = this.service.getCultureList();

    // Setup form subscriptions
    this.form.get('ancestry').valueChanges.subscribe((a: Ref) => {
      this.ancestry = this.service.getAncestry(a.id);
    });
    this.form.get('culture').valueChanges.subscribe((c: Ref) => {
      this.culture = this.service.getCulture(c.id);
    });
  }
}
