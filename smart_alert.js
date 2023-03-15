/**
 * アラートを管理するクラスです
 * 
 * @property {String} title タイトル蘭に表示させる文字列です。
 * @property {String} msg 表示するメッセージ本文です。
 * @property {String} type 表示するアラートの種別です。
 * 指定できる値は下記４種類で、指定した値によってアラートのスタイルが変更されます。
 * 【指定できる値】
 * 1. info 緑ベースのスタイルになります。
 * 2. primary 青ベースのスタイルです。
 * 3. warning 黄色ベースのスタイルです。
 * 4. danger 赤ベースのスタイルです。
 * @property {String} position アラートを表示する位置を決めます。defaultはtop-rightです。
 * 下記４種類の中から指定します。
 * 1. top-left 画面の左上に表示します。
 * 2. top-right 画面右上に表示します。
 * 3. btm-left 画面左下に表示します。
 * 4. btm-right 画面右下に表示します。
 */

let alertsObj = {
    "top-left": [],
    "top-right": [],
    "btm-left": [],
    "btm-right": []
}

class SmartAlert {

    constructor(
        title = '',
        msg = '',
        type = 'info',
        position = 'top-right'
    ) {
        this.title = title;
        this.msg = msg;
        this.type = type;
        this.position = position;
        this.index = 0;
        this.createElement();
        this.setPosition();
    }

    /**
     * 表示するアラートの要素を作成する
     */
    createElement() {
        const baseElement = document.createElement('div');
        baseElement.classList.add('smartAlert');
        baseElement.classList.add(this.type);

        const titleElement = document.createElement('div');
        titleElement.classList.add('smartAlertTitle');
        const titleContents = document.createElement('p');
        titleContents.textContent = this.title;
        titleElement.appendChild(titleContents);

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('smartAlertDelBtn');
        titleElement.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', (e) => {
            const elm = e.currentTarget.parentNode.parentNode;
            elm.classList.remove('show');
            this.removeFromArray();
            elm.addEventListener('transitionend', (e) => {
                e.currentTarget.remove();


            });
        })

        const msgElement = document.createElement('div');
        msgElement.classList.add('smartAlertMsg');
        msgElement.innerText = this.msg;

        baseElement.appendChild(titleElement);
        baseElement.appendChild(msgElement);

        this.elm = baseElement;
    }

    /**
     * 要素のポジションを設定する
     */
    setPosition() {
        this.elm.classList.add(this.position);
    }

    /**
     * アラートの色を直接指定する
     * @param {String} bgColor 文字色
     * @param {String} textColor 文字色
     * @returns void
     */
    setColor(bgColor, textColor) {
        this.elm.style.backgroundColor = bgColor;
        this.elm.style.color = textColor;
    }

    pushAlertIntoArray() {
        alertsObj[this.position].push(this.elm);
        this.index = alertsObj[this.position].indexOf(this.elm);
    }

    removeFromArray() {
        const index = alertsObj[this.position].indexOf(this.elm);
        alertsObj[this.position].splice(index, 1);
        this.arrangeAlerts()
    }

    //moves every alert in the to their respective positions on the array
    arrangeAlerts() {
        for (alert of alertsObj[this.position]) {
            const index = alertsObj[this.position].indexOf(alert);
            if (this.position.includes("top")) alert.style.top = `${alert.offsetHeight * index}px`;
            else alert.style.bottom = `${alert.offsetHeight * index}px`;


        }
    }

    /**
     * アラートを表示する
     */
    async push() {
        const elm = await document.body.appendChild(this.elm);
        elm.classList.add('show');
        this.pushAlertIntoArray();
        this.arrangeAlerts();
    }

}




