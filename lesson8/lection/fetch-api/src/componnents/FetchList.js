import React, { PureComponent } from 'react';

class PublicList extends PureComponent {
    state = {  
        publicGists: [],
    };

    componentDidMount(){
        fetch('https://api.github.com/gists/public')
        .then( response => {
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            return response.json();
        })
        .then(data => {
            this.setState({ publicGists: data});
        })
        .catch(error => {
            console.error('Ошибка при получении данных', error);
        });
        
    }
    render() { 
        const { publicGists } = this.state;

        return (  
            <div>
                <h1>Публичный Список Gists на GitHub</h1>
                <ul>
                    {publicGists.map(gist => (
                        <li key={gist.id}>
                            <a href={gist.html_url} target='_blank' rel='noopener noreferrer'>
                                {gist.description || 'Без описания'}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default PublicList;