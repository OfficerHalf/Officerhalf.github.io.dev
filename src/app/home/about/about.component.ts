import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <section id="about">
      <h2 id="bio">Hi, I'm Nathan Smith</h2>
      <p>
        I'm a full-time software developer and work on open source projects in
        my free time.
      </p>
      <h3 id="contact">Contact</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/nathan-r-smith/">LinkedIn</a>
        </li>
        <li>
          <a href="https://forms.gle/tPE3m8AZNriveMCC8">Contact Form</a>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {}
