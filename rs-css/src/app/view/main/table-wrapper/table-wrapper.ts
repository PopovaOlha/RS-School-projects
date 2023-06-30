import './table-wrapper.css';
import ElementCreater, { ElementsParams } from '../../../util/element-creator';
import View from '../../view';
import TableContentView from '../table-content/table-content';

const CssStyles = {
    GAME_WRAPPER: 'game-wrapper',
    KITHEN_IMAGE: 'kitchen-image',
    TABLE_WRAPPER: 'table-wrapper',
    TABLE_SURFACE: 'table-surface',
    NAMETAGS: 'nametags',
    TABLE: 'table',
    DANCE: 'dance',
    TABLE_ADGE: 'table-edge',
    TABLE_LEG: 'table-leg',
};
export default class TableView extends View {
    paramsGameWrapper!: ElementsParams | { tag: string; classNames: string[]; textContent: string; callback: null };
    creatorTable!: ElementCreater;
    constructor() {
        const paramsGameWrapper = {
            tag: 'div',
            classNames: [CssStyles.GAME_WRAPPER],
            textContent: '',
            callback: null,
        };
        super(paramsGameWrapper);
        this.configureView();
    }
    public configureView() {
        const paramsTableWrapper = {
            tag: 'div',
            classNames: [CssStyles.TABLE_WRAPPER],
            textContent: '',
            callback: null,
        };
        const creatorTableWrapper = new ElementCreater({ param: paramsTableWrapper });
        this.elementCreater.addInnerElement(creatorTableWrapper);

        const paramsTableSurface = {
            tag: 'div',
            classNames: [CssStyles.TABLE_SURFACE],
            textContent: '',
            callback: null,
        };
        const creatorTableSurface = new ElementCreater({ param: paramsTableSurface });
        creatorTableWrapper.addInnerElement(creatorTableSurface);

        const paramsNametags = {
            tag: 'div',
            classNames: [CssStyles.NAMETAGS],
            textContent: '',
            callback: null,
        };
        const creatorNametags = new ElementCreater({ param: paramsNametags });
        creatorTableWrapper.addInnerElement(creatorNametags);

        const paramsTable = {
            tag: 'div',
            classNames: [CssStyles.TABLE],
            textContent: '',
            callback: null,
        };
        this.creatorTable = new ElementCreater({ param: paramsTable });
        creatorTableWrapper.addInnerElement(this.creatorTable);
        const ContentOfTable = [
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
            },
            {
                className: [CssStyles.DANCE],
                tagName: 'plate',
            },
        ];
        ContentOfTable.forEach((item) => {
            const creatorPlats = new TableContentView(item.tagName, item.className);
            this.creatorTable.addInnerElement(creatorPlats.getHtmlDocument());
        });

        const paramsTableAdge = {
            tag: 'div',
            classNames: [CssStyles.TABLE_ADGE],
            textContent: '',
            callback: null,
        };
        const creatorTableAdge = new ElementCreater({ param: paramsTableAdge });
        this.elementCreater.addInnerElement(creatorTableAdge);

        const paramsTableLeg = {
            tag: 'div',
            classNames: [CssStyles.TABLE_LEG],
            textContent: '',
            callback: null,
        };
        const creatorLeftLeg = new ElementCreater({ param: paramsTableLeg });
        const creatorRightLeg = new ElementCreater({ param: paramsTableLeg });
        creatorTableAdge.addInnerElement(creatorLeftLeg);
        creatorTableAdge.addInnerElement(creatorRightLeg);
    }
    getTableContent() {
        return this.creatorTable.getElement();
    }
}
