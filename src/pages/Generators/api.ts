import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import * as Types from './types';

export default class GeneratorApi {
    // It's read only anyway. Why are you stealing this?
    private awBeans: string = '9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081';
    private endpoint: string = 'https://api.buttercms.com/v2/content/';
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: this.endpoint,
            params: {
                auth_token: this.awBeans
            }
        });
    }

    public GetLoot(): Promise<Types.Loot[]> {
        return this.api
            .get('', {
                params: {
                    keys: 'loot'
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseLoot>) => {
                return resp.data.data.loot;
            });
    }

    public GetAllLootByType(): Promise<Types.LootType[]> {
        return this.api
            .get('', {
                params: {
                    keys: 'loot_types'
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseLootType>) => {
                return resp.data.data.loot_types;
            });
    }

    public GetLootTypes(): Promise<Types.LootType[]> {
        return this.api
            .get('', {
                params: {
                    keys: 'loot_types',
                    levels: '1'
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseLootType>) => {
                return resp.data.data.loot_types;
            });
    }

    public GetLootForType(type: string): Promise<Types.Loot[]> {
        return this.api
            .get('', {
                params: {
                    keys: `loot_types[name=${type}]`
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseLootType>) => {
                return resp.data.data.loot_types[0].items;
            });
    }
}
