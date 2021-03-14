import {CREATE} from "./types"

export default function(state, action) {
    switch (action.type) {
        case CREATE:
            const { path, newData } = action.value;

            function useEval(patch, value) {
                if (typeof value === 'object') {
                    value = value.JSON.stringify(value)
                }

                eval(`state.${patch} = '${value}'`);
            }

            // function parserWay(way, value, object = state) {
            //     debugger;
            //     const parts =  way.split('.')
            //     let currentPosition = object;
            //
            //     function parsed(string) {
            //         debugger;
            //         const arrayName = string.match(/\w+/).pop();
            //         const arrayIndex = parseInt(string.match(/\[(.*)\]/).pop());
            //
            //         if (currentPosition[arrayName]) {
            //             arrayIndex >= currentPosition[arrayName].length
            //                 ? currentPosition[arrayName].push(value)
            //                 : currentPosition[arrayName][arrayIndex] = value
            //         }
            //     }
            //
            //     return parts.map((str, index) => {
            //         str.includes('[')
            //             ? parsed(str)
            //             : currentPosition[str] = index === parts.length - 1 ? value : {}
            //
            //         currentPosition = currentPosition[str]
            //     });
            // }

            return {
                ...state,
                newState: useEval(path, newData)

                //newState: state.dataContent[0].type = 'button',
            }

        default: return state
    }
}