import {CREATE} from "./types"

export default function caseAction(state, action) {
    switch (action.type) {
        case CREATE:
            const { path, newData } = action.value;

            function isObject(obj) {
                return obj && !Array.isArray(obj) && typeof obj === 'object';
            }

            function processingPath(path) {
                const parsedPath = []; //массив со всеми обработанными ключами пути.
                let tmpKey = ''; //кусочек ключа.

                function saveKey (type) {
                    if (tmpKey) {
                        parsedPath.push(
                            {
                                key: tmpKey,
                                type
                            });
                        tmpKey = '';
                    }
                }

                for (const symbol of path) {
                    if (symbol === '.') {
                        saveKey('object');
                        continue;
                    }

                    if (symbol === '[') {
                        const lastPathItem = parsedPath[parsedPath.length - 1];
                        saveKey(lastPathItem ? lastPathItem.type : 'array');
                        continue;
                    }

                    if (symbol === ']') {
                        saveKey('array');
                        continue;
                    }

                    tmpKey += symbol;
                }

                saveKey('object');

                return parsedPath;
            }

            function insertValue (state, path, value) {
                const paths = processingPath(path);
                let tmp = state;

                paths.map((item, index) => {
                    const { key } = item;
                    const nextPath = paths[index + 1];

                    if (nextPath) {
                        const oldVal = tmp[key];
                        const neededType = nextPath.type;

                        if (
                            !oldVal ||
                            neededType === 'object' && !isObject(oldVal) ||
                            neededType === 'array' && !Array.isArray(oldVal)
                        )
                        {
                            tmp[key] = neededType === 'object' ? {} : [];
                        }
                    }

                    return nextPath ? tmp = tmp[key] : tmp[key] = eval( '(' + value + ')' );
                });

                return state;
            }

            return {
                ...state,
                newState: insertValue(state, path, newData)
                //newState: state.dataContent[0].type = 'button',
                //{type: 'label', props: {caption: 'test', visible: false}}
            }

        default: return state
    }
}