export class CellNote {
    public values: Set<number>;
    constructor() {
        this.values = new Set();
    }

    public update(value: number): void {
        if (this.values.has(value)) {
            this.values.delete(value);
        } else {
            this.values.add(value);
        }
    }

    public clear(): void {
        this.values = new Set();
    }

    public asArray(): number[] {
        return Array.from(this.values);
    }
}
