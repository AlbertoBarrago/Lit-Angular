// custom-table.component.ts
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('custom-table')
export class CustomTableComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  `;
  @property({type: String}) override title: any = '';

  override render() {
    return html`
      ${this.title}
      <table>
        <thead>
            <slot name="th"></slot>
        </thead>
        <tbody>
            <slot name="tr"></slot>
        </tbody>
      </table>
    `;
  }
}
