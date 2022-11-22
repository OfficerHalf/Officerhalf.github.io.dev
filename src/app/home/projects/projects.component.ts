import { Component } from "@angular/core";
import { Brand } from "../brand-badge/brand-badge.component";

@Component({
  selector: "app-projects",
  template: `
    <section id="projects">
      <h3 id="foundry">Foundry VTT</h3>
      <p>
        I am the author of the following content for
        <a href="https://foundryvtt.com/">Foundry VTT</a>.
      </p>
      <h4>Cryptomancer FVTT</h4>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://foundryvtt.com/packages/cryptomancer"
          [brand]="Brand.Foundry"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/cryptomancer-fvtt"
          [brand]="Brand.GitHub"
        ></app-brand-badge>
      </app-brand-badge-list>
      <p>
        An implementation of the Cryptomancer RPG system for Foundry Virtual
        Tabletop.
      </p>
      <h4>Go to Combatant</h4>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://foundryvtt.com/packages/go-to-combatant"
          [brand]="Brand.Foundry"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/foundryvtt-go-to-combatant"
          [brand]="Brand.GitHub"
        >
        </app-brand-badge>
      </app-brand-badge-list>
      <p>
        Patches the Foundry VTT combat tracker so that clicking on a combatant
        pans to that combatant - even if they are on another scene.
      </p>
      <h4>Insert Journal Page</h4>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://foundryvtt.com/packages/insert-journal-page"
          [brand]="Brand.Foundry"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/foundryvtt-insert-journal-page"
          [brand]="Brand.GitHub"
        >
        </app-brand-badge>
      </app-brand-badge-list>
      <p>
        Patches the Foundry VTT journal so that creating a new page in a journal
        entry places it after the currently viewed page, not at the end of the
        list.
      </p>
      <hr class="project-separator" />
      <h3 id="crypt-ui">Crypt UI</h3>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://www.crypt.nathan-smith.org/"
          [brand]="Brand.Storybook"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/crypt-ui"
          [brand]="Brand.GitHub"
        ></app-brand-badge>
      </app-brand-badge-list>
      <p>
        A sci-fi themed CSS component library, written mainly to support
        implementation of Cryptomancer FVTT.
      </p>
      <hr class="project-separator" />
      <h3 id="alloy">Alloy</h3>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"
          [brand]="Brand.VisualStudio"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/alloy-theme"
          [brand]="Brand.GitHub"
        ></app-brand-badge>
      </app-brand-badge-list>
      <p>
        Alloy is a color theme available for
        <a
          href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"
        >
          VS Code</a
        >,
        <a
          href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/prismjs"
        >
          Prismjs</a
        >,
        <a
          href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/windows-terminal"
        >
          Windows Terminal</a
        >, and
        <a
          href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/conemu"
        >
          ConEmu</a
        >.
      </p>
      <hr class="project-separator" />
      <h3 id="obsidian">Obsidian Plugins</h3>
      <p>
        I maintain the following plugins for
        <a href="https://obsidian.md/">Obsidian</a>.
      </p>
      <h4>Collapse All</h4>
      <app-brand-badge
        href="https://github.com/OfficerHalf/obsidian-collapse-all"
        [brand]="Brand.GitHub"
      ></app-brand-badge>
      <p>
        When your Obsidian file explorer is overloaded with open folders, close
        them all with a single click or command. Or, if you want to explore your
        folder tree, expand all folders.
      </p>
      <h4>Obsidian Trello</h4>
      <app-brand-badge
        href="https://github.com/OfficerHalf/obsidian-trello"
        [brand]="Brand.GitHub"
      ></app-brand-badge>
      <p>
        Connect your Trello cards with your Obsidian notes to see and update
        labels, comments, and checklists from within Obsidian.
      </p>
      <h4>Auto Class</h4>
      <app-brand-badge
        href="https://github.com/OfficerHalf/obsidian-auto-class"
        [brand]="Brand.GitHub"
      ></app-brand-badge>
      <p>
        Automatically apply CSS classes to the markdown based on a note's path
        and tags.
      </p>
      <hr class="project-separator" />
      <h3 id="homebrewery">Homebrewery VS Code</h3>
      <app-brand-badge-list>
        <app-brand-badge
          href="https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode"
          [brand]="Brand.VisualStudio"
        ></app-brand-badge>
        <app-brand-badge
          href="https://github.com/OfficerHalf/homebrewery-vscode"
          [brand]="Brand.GitHub"
        ></app-brand-badge>
      </app-brand-badge-list>
      <p>
        Homebrewery VS Code is a VS Code extension for rendering markdown in the
        style of the
        <a href="https://homebrewery.naturalcrit.com/">Homebrewery</a> for
        creating Dungeons and Dragons 5e homebrew content inside VS Code.
      </p>
    </section>
  `,
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  protected Brand = Brand;
}
