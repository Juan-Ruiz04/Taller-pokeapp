import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html } from 'lit-element';
import '@pokedex/poketaller/poketaller-ui.js';


class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'home-page';

  }

  static get properties() {
    return {
      title1: { type: String },
    };
  }


  render() {

return html`
  <div style="background: linear-gradient(#D1FEBA, rgb(184, 255, 195));">
    <cells-template-paper-drawer-panel mode="seamed" id="paperHeaderPanel" disable-swipe>
      <div slot="app_main">
        <h1 style="color: #234; font-size: 24px; text-align: center;">${this.t('title')}</h1>
        <poketaller-ui></poketaller-ui>
      </div>
    </cells-template-paper-drawer-panel>
  </div> 
`;
}
window.customElements.define(HomePage.is, HomePage);
