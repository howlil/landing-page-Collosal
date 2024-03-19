class KotakInput extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
            }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadow.innerHTML = `
        <label for="nama" class="text-white text-opacity-60 text-sm font-['Noto Sans']">Nama</label>
        <input id="nama" class="rounded-md border border-white border-opacity-10" type="text">
        `
    }
}
customElements.define("anjay", KotakInput)