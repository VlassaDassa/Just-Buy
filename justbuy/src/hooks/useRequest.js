import { useState, useEffect } from "react";





export default function (request, dependencies = []) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        request()
        .then(response => setData(response.data))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    }, dependencies)

    return [data, isLoading, error]
}