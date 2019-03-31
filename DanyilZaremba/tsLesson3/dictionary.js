class EngRusDef {
    set eng(word) {
        if (word == null || word == undefined) {
            throw new Error("Введите значение");
        }
        this.engWord = word;
    }
    get eng() {
        return this.engWord;
    }
    set rus(word) {
        if (word == null || word == undefined) {
            throw new Error("Введите значение");
        }
        this.rusWord = word;
    }
    get rus() {
        return this.rusWord;
    }
    set definition(definition) {
        if (definition == null || definition == undefined) {
            throw new Error("Введите значение");
        }
        this.Definition = definition;
    }
    get definition() {
        return this.Definition;
    }
}
class Dictionary {
    constructor() {
        this.dictionaryData = [];
    }
    add(eng, rus, def) {
        let newItem = new EngRusDef();
        newItem.eng = eng;
        newItem.rus = rus;
        newItem.definition = def;
        this.dictionaryData.push(newItem);
    }
    getInfo(word) {
        for (let i = 0; i < this.dictionaryData.length; i++) {
            if (this.dictionaryData[i].eng == word) {
                return { rus: this.dictionaryData[i].rus, definition: this.dictionaryData[i].definition };
            }
        }
        return null;
    }
}
let dictionaryItem1 = new Dictionary();
dictionaryItem1.add('Generic', 'Обобщенный тип', 'специальный тип данных, который позволяет создавать компоненты, не привязываясь к конкретному типу данных, а указывая этот тип данных во время создания компонента');
console.log(dictionaryItem1.getInfo('Generic'));
let test1 = new EngRusDef();
test1.eng = null;
