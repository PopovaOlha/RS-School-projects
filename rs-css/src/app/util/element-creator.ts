export interface ElementsParams {
    tag: string;
    classNames: Array<string>;
    textContent: string;
    callback: unknown;
}
export default class ElementCreater {
    save() {
        throw new Error('Method not implemented.');
    }
    on(arg0: { arg0: string; arg1: (instance: any, changeObj: { text: string[]; update: (arg0: string, arg1: string, arg2: string[]) => void; from: string; to: string; }) => boolean; }) {
        throw new Error('Method not implemented.');
    }
    focus() {
        throw new Error('Method not implemented.');
    }
    element!: HTMLElement;
    constructor(param: {
        param:
            | ElementsParams
            | {
                  tag: string;
                  classNames: string[];
                  textContent: string;
                  callback: null;
              };
    }) {
        this.createsElement(param);
    }
    public createsElement({ param }: { param: ElementsParams }) {
        this.element = document.createElement(param.tag);
        this.setCssStyles(param.classNames);
        this.setTextContent(param.textContent);
        this.setCallback({ callback: param.callback });
    }
    public getElement() {
        return this.element;
    }
    public addInnerElement(element: HTMLElement | ElementCreater) {
        if (element instanceof ElementCreater) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }
    public setCssStyles(cssStyles: string[]) {
        cssStyles.map((className) => this.element.classList.add(className));
    }
    public setTextContent(text: string): void {
        this.element.textContent = text;
    }
    public setCallback({ callback }: { callback: unknown }) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }
    public addAttribute(attr: string, name: string): void {
        this.element.setAttribute(attr, name);
    }
}
