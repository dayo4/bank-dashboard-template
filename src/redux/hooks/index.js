import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
} from 'react-redux'


export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
