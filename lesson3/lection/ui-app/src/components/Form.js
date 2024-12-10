import { useState , useEffect} from "react";

const InputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');


    useEffect(() => {
        console.log('Input value changed', inputValue);
    }, [inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    }
    

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>Submitted value: {submittedValue}</p>}
        </div>
    );
};

export default InputForm ;