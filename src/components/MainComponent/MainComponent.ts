import { Component } from "../../component";
import { ContentComponent } from "../ContentComponent/ContentComponent";
import { MarginRowComponent } from "../MarginRowComponent/MarginRowComponent";
import template from "./MainComponent.html"

export class MainComponent extends Component {
  constructor() {
    super(document.getElementById('app'));
  }

  public element(): HTMLElement {
    const html = this.createStubParent();

    html.innerHTML = template;

    return html;
  }

  public renderAfter(): Component[] {
    return [
      new ContentComponent(),
      new MarginRowComponent()
    ]
  }
}
