export default function UserInput({ inputName, inputValues, onChangeInput }) {
    return (
        <div>
            <label htmlFor={inputName}>{inputName.replace("-", " ")}</label>
            <input
                type="number"
                name={inputName}
                id={inputName}
                value={inputValues[inputName]}
                onChange={(event) => onChangeInput(event, inputName)}
                min="0"
            />
        </div>
    );
}
