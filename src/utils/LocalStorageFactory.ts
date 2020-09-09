import { LocalStorage } from "./LocalStorage";
import { LocalStorageAst } from "./LocalStorageAst";
import { LocalStorageClsHooked } from "./LocalStorageClsHooked";

function isAstSupported(): boolean {
    const [nodeMajor, nodeMinor] = process.versions.node.split('.');

    const major = Number.parseInt(nodeMajor);
    const minor = Number.parseInt(nodeMinor);

    if (major === 12 && minor >= 17) {
        return true;
    }

    if (major === 13 && minor >= 10) {
        return true;
    }

    return major > 13;
}


export function MakeLocalStorage(): LocalStorage {
    if (isAstSupported()) {
        return new LocalStorageAst();
    } else {
        return new LocalStorageClsHooked();
    }
}