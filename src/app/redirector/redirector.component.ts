import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-redirector",
    template: "",
    standalone: true,
})
export class RedirectorComponent {
  constructor(route: ActivatedRoute) {
    window.location.href = route.snapshot.data["redirect"];
  }
}
