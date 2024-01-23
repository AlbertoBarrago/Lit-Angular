// custom-table-standard.component.ts
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('custom-table-standard')
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
  @property({type: Array}) columns: string[] = [];
  @property({type: Array}) items? = []

  override render() {
    return html`
      ${this.title}
      <table>
        <thead>
        ${this.columns.map((column, index) => html`
          <th key=${index}>${column}</th>`)}
        </thead>
        <tbody>
        <tr>
          ${this.items?.map(item => html`
            <td>${item}</td>`)}
        </tr>
        </tbody>
      </table>
    `;
  }
}
