import { Component } from "../../component";
import template from "./InfoComponent.html"

export class InfoComponent extends Component {
  constructor() {
    super(document.getElementById('info'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }
}
