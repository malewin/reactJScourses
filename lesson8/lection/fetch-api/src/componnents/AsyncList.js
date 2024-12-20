import { useCallback, useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';


const AsyncFetchList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const URL_FOR_FETCH = 'https://api.github.com/gists/public';

    const requestGists = async () => {
        try {
            setLoading(true);
            const response = await fetch(URL_FOR_FETCH);
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(true);
           console.warn(error);
        } finally {
            setLoading(false);
            console.log('Запрос завершился');
        }
        
    };
    //Вызываем запрос при монтировании компонента
    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'Без описания'}</li>, []
    );

    if (loading) return <CircularProgress />;
    if (error) return (
        <>
            <h3>Error</h3>
            <button onClick={requestGists}>Retry</button>
        </>
    );
    if (data.length === 0) return <p>No gists available</p>;

    return (
        <div>
            <h2>Профи реализация запроса списка</h2>
            <ul>{data.map(renderGist)}</ul>
        </div>
    );
};

export default AsyncFetchList;