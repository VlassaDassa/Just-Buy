import { useState, useEffect } from "react";
import critical_error from "../store/critical_error";





export default function (request, dependencies = []) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        request()
        .then(response => {setData(response.data)})
        .catch(error => {setError(error); critical_error.toggleShow(true)})
        .finally(() => setIsLoading(false))
    }, dependencies)

    return [data, isLoading, error]
}