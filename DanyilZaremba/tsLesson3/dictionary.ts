class EngRusDef<Teng, Trus, Tdef> {
    private engWord: Teng;
    private rusWord: Trus;
    private Definition: Tdef;
    public set eng(word: Teng) {
        if (word == null || word == undefined) {
            throw new Error("Введите значение");
        }
        this.engWord = word;
    }

    public get eng(): Teng {
        return this.engWord;
    }

    public set rus(word: Trus) {
        if (word == null || word == undefined) {
            throw new Error("Введите значение");
        }
        this.rusWord = word;
    }

    public get rus(): Trus {
        return this.rusWord;
    }
    public set definition(definition: Tdef){
        if(definition == null || definition == undefined){
            throw new Error("Введите значение")
        }
        this.Definition = definition;
    }
    public get definition(){
        return this.Definition;
    }
}

class Dictionary<Teng, Trus, Tdef>{
    private dictionaryData:Array<EngRusDef<Teng, Trus, Tdef>> = [];
    public add(eng: Teng, rus: Trus, def: Tdef){
        let newItem = new EngRusDef<Teng, Trus, Tdef>();
        newItem.eng = eng;
        newItem.rus = rus;
        newItem.definition = def;
        this.dictionaryData.push(newItem);
    }
    public getInfo(word: Teng) : {rus: Trus, definition: Tdef} | null {
        for(let i = 0; i < this.dictionaryData.length; i ++) {
            if(this.dictionaryData[i].eng == word) {
                return {rus: this.dictionaryData[i].rus, definition: this.dictionaryData[i].definition }
            }
        }

        return null;
    }
}
let dictionaryItem1 = new Dictionary<string, string, string>();
dictionaryItem1.add('Generic', 'Обобщенный тип', 'специальный тип данных, который позволяет создавать компоненты, не привязываясь к конкретному типу данных, а указывая этот тип данных во время создания компонента');
console.log(dictionaryItem1.getInfo('Generic'));
let test1 = new EngRusDef<string, string, string>();
test1.eng = null;