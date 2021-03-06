import { Component, Element, h, JSX, Listen, State } from '@stencil/core';
import { defaultColors } from './colors';

/**
 * @slot input - Required slot for input[type="color"]
 */
@Component({
  styleUrl: 'gux-input-color-select-beta.less',
  tag: 'gux-input-color-select-beta'
})
export class GuxInputColorSelectBeta {
  private input: HTMLInputElement;

  @Element()
  private root: HTMLElement;

  @State()
  private color: string;

  @Listen('colorSelect')
  onColorSelect(event: MouseEvent): void {
    const colorOptionElement = event.target as HTMLGuxInputColorOptionBetaElement;
    this.color = colorOptionElement.value;
    this.input.value = colorOptionElement.value;

    this.input.dispatchEvent(
      new Event('input', {
        bubbles: true,
        cancelable: true
      })
    );
    this.input.dispatchEvent(
      new Event('change', {
        bubbles: true
      })
    );
  }

  componentWillLoad(): void {
    this.input = this.root.querySelector('input[slot="input"]');
    this.color = this.input.value;
  }

  render(): JSX.Element {
    return [
      <div hidden>
        <slot name="input" />
      </div>,
      <div>
        <div class="gux-input-color-matrix">{this.renderDefaultTiles()}</div>
      </div>
    ];
  }

  private renderDefaultTiles(): HTMLGuxInputColorOptionBetaElement[] {
    return defaultColors.map((color, index) => (
      <gux-input-color-option-beta
        key={`${color}-${index}`}
        value={color}
        active={this.color.toLowerCase() === color.toLowerCase()}
      />
    ));
  }
}
