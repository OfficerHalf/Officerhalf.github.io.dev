import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { AwBeans, ContentEndpoint } from './ApiConstants';
import * as Types from '../types/GeneratorTypes';

export default class GeneratorApi {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: ContentEndpoint,
            params: {
                auth_token: AwBeans
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
