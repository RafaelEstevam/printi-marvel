import { useAppSelector, useAppDispatch } from '../../hooks';
import { decrement, increment } from '../../slices/counter/counter.slice'

const CountButtons = () => {

    const dispatch = useAppDispatch()

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    console.log('button');

    return (
        <div style={{display: 'flex'}}>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

const CountTest = () => {

    const count = useAppSelector(state => state.counter.value)

    console.log('count');

    return (
        <p>{count}</p>
    )
}

const Access = () => {

    console.log('access');

    return (
        <>
            <h1>Login</h1>

            <CountTest/>

            <CountButtons/>
        </>
    )
};

export default Access;