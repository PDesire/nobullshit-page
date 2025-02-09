import { Component } from "../../component";
import template from "./KnowledgeComponent.html"

export class KnowledgeComponent extends Component {
  constructor() {
    super(document.getElementById('knowledge'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }
}
