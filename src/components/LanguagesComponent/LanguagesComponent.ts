import { Component } from "../../component";
import template from "./LanguagesComponent.html"

export class LanguagesComponent extends Component {
  constructor() {
    super(document.getElementById('languages'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }
}
