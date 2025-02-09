import { Component } from "../../component";
import { InfoComponent } from "../InfoComponent/InfoComponent";
import { LanguagesComponent } from "../LanguagesComponent/LanguagesComponent";
import template from "./MarginRowComponent.html"

export class MarginRowComponent extends Component {
  constructor() {
    super(document.getElementById('margin-row'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }

  public renderAfter(): Component[] {
    return [
      new InfoComponent(),
      new LanguagesComponent()
    ]
  }
}
