// custom-table-row.component.ts
import {LitElement, html, css} from 'lit';
import {customElement, property} from "lit/decorators.js";

@customElement('custom-table-row')
export class CustomTableRowComponent extends LitElement {
  static override styles = css`
    :host {
      display: table-row;
    }

    td {
      display: table-cell;
      padding: 8px;
    }
  `;
  @property({type: Array}) items? = []

  override render() {
    return html`
    <tr>
      ${this.items?.map(item => html`<td>${item}</td>`)}
    </tr>
  `;
  }
}
