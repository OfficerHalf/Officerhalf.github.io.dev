import packageJson from '../package.json';

interface StorageItem {
    value: string;
    timestamp: number;
    expiration: number;
}

export function setString(
    value: string,
    key: string,
    expiration: number = 3600000
) {
    const item: StorageItem = {
        expiration,
        timestamp: Date.now(),
        value
    };
    localStorage.setItem(getVersionedKey(key), JSON.stringify(item));
}

export function getString(key: string): string | null {
    const realKey = getVersionedKey(key);
    const itemString = localStorage.getItem(realKey);
    if (itemString !== null) {
        const item: StorageItem = JSON.parse(itemString);
        if (
            item.expiration === 0 ||
            Date.now() - item.timestamp < item.expiration
        ) {
            return item.value;
        }
        localStorage.removeItem(realKey);
    }
    return null;
}

function getVersionedKey(key: string): string {
    return `${key}:${packageJson.version}`;
}
