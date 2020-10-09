// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type typesAccepted = number | string;

function useState<S extends typesAccepted = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(s: S) {
        state = s;
    }

    return {getState, setState};
}

const newState = useState<string>();

newState.setState("123");
console.log(newState.getState());

newState.setState("123");
console.log(newState.getState());