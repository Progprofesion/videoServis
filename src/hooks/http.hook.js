import { useState, useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {
        'accept': 'application/json',
        'X-API-KEY': '4TAA2GY-J584DF8-QB6E336-MBKTT11'
    }) => {


        setProcess('loading')

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();


            return data;
        } catch (e) {

            setProcess('error')
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return { request, clearError, process, setProcess }
}