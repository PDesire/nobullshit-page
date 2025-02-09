import { Component } from "../../component";
import { KnowledgeComponent } from "../KnowledgeComponent/KnowledgeComponent";
import template from "./ContentComponent.html"

export class ContentComponent extends Component {
  constructor() {
    super(document.getElementById('content'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }

  public renderAfter(): Component[] {
    return [
      new KnowledgeComponent()
    ]
  }
}
