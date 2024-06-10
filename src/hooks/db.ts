import Dexie, { Table } from 'dexie';

export interface Request {
    id?: number;
    url: string;
    method: string;
    response: Response;
}

export class MySubClassedDexie extends Dexie {
    requests!: Table<Request>;

    constructor() {
        super('request_cache');
        this.version(1).stores({
            requests: '++id, url, method, response',
        });
    }
}

export const db = new MySubClassedDexie();