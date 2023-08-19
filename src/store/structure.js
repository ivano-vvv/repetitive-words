export class StoreStructure {
    constructor(initialState) {
        this._stack = initialState || [];
    }

    _stack = [];

    get root() {
        return Object.freeze([...this._stack])
    }

    insert(w) {
        this._stack.push(w);
    }

    findEarliest() {
        const res = this._stack[0];
        this._stack = this._stack.slice(1);

        return res;
    }
}
