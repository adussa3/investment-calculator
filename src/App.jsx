import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const INPUT_NAMES = ["initial-investment", "annual-investment", "expected-return", "duration"];

function App() {
    const [inputValues, setInputValues] = useState(() => {
        const initialValues = {};
        for (const name of INPUT_NAMES) {
            initialValues[name] = "0";
        }
        return initialValues;
    });

    const handleInputChange = (event, inputName) => {
        setInputValues((prevInputValues) => ({ ...prevInputValues, [inputName]: event.target.value }));
    };

    return (
        <>
            <Header />

            <div id="user-input" className="input-group">
                {INPUT_NAMES.map((name) => {
                    return <UserInput key={name} inputName={name} inputValues={inputValues} onChangeInput={handleInputChange} />;
                })}
            </div>

            <Result inputValues={inputValues} />
        </>
    );
}

export default App;
