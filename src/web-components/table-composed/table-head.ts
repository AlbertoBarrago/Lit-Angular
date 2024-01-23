import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-table-head')
export class TableHead extends LitElement {
  @property({ type: Array }) columns: string[] = [];

  static override styles = css`
    :host {
      display: contents;
      border: none;
    }
    th {
      padding: 16px;
      border: 1px solid #ddd;
      text-align: left;
    }
  `;

  override render() {
    return html`
      ${this.columns.map((column, index) => html`<th key=${index}>${column}</th>`)}
    `;
  }
}
