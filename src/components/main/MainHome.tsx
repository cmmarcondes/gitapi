import React, {useCallback, useEffect, useState} from 'react';
import RepoService from '../../services/RepoService';
import Container from '../contents/Container';
import debounce from 'lodash.debounce';
import Details from '../contents/Details';

interface IServices {
    value: any
}
interface IRepo {
    id: number,
    name: String,
    owner: {
        login: String,
    }
    html_url: String
}
const Home: React.FC = () => {
    const [value, setValue] = useState<IServices>();
    const [repo, setRepo] = useState<IRepo[]>();

    const get_repos = useCallback(async()=> {
        const repo_data = await RepoService.getRepo(null, value);
        setRepo(repo_data.data);
        console.log('fui chamado')
    }, [value]);

    useEffect(()=>{
        get_repos();
    }, [get_repos]);

    const input_handler = debounce(async(name) => {
        setValue(name);
        get_repos();
        }, 1500);

    const repo_control = repo?.map((element)=> {
        return <Details key={element.id} user_details={element} />
    })
    return (
        <div>
            <Container input_handler={input_handler}/>
            {repo_control}
        </div>
    );
}

export default Home;