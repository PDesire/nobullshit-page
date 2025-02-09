export class Component {
  constructor(attachToElement: HTMLElement | null) {
    if (attachToElement) {
      this.attachTo = attachToElement;
    } else {
      throw Error("Element missing to attach");
    }
  }

  private readonly attachTo: HTMLElement;

  public element(): HTMLElement {
    throw Error("Element not implemented.");
  }
  public renderAfter(): Component[] | null {
    return null;
  }

  public createStubParent(): HTMLElement {
    const htmlElement = document.createElement('span');
    return htmlElement;
  }

  async _renderAfter(): Promise<void> {
    const afterComponents = this.renderAfter();

    if (afterComponents && afterComponents?.length > 0) {
      await Promise.all(afterComponents.map(component => component.render()));
    }
  }

  async render(): Promise<void> {
    this.attachTo.appendChild(this.element());

    await this._renderAfter();
  }
}
