import { useState } from "react";

type State = any;

const useForm = (initialstates: State) => {
    const [values, setValues] = useState(initialstates);

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.currentTarget.name]: e.target.value
        })
    }

    return [values, handleChange]
}

export default useForm