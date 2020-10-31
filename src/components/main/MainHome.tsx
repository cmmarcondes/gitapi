import React, {useCallback, useEffect, useRef, useState} from 'react';
import RepoService from '../../services/RepoService';
import Container from '../contents/Container';
import debounce from 'lodash.debounce';
import RepoDetails from '../contents/RepoDetails';
import { ContainerSection, DetailsSection, AvatarSection, Wrapper } from '../../styles/globalstyle';
import AvatarDetails from '../contents/AvatarDetails';

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
    const myRef = useRef(null);
    const get_repos = useCallback(async()=> {
        const repo_data = await RepoService.getRepo(null, value);
        setRepo(repo_data.data);
    }, [value]);
    const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)
    const input_handler = debounce((name) => {
        setValue(name);
        get_repos();
        scrollToRef(myRef)
        }, 1000);
    
    useEffect(()=>{
        get_repos();
    }, [get_repos])
    const repo_control = repo?.map((element)=> {
        return <RepoDetails key={element.id} user_details={element} />
    })
    return (
        <Wrapper>
            <ContainerSection>
            <Container input_handler={input_handler}/>
            </ContainerSection>
            {repo ? <AvatarSection>
            <AvatarDetails user_details={repo}/>
            </AvatarSection> : false}
            
            <DetailsSection ref={myRef}>
            {repo_control}
            </DetailsSection>
        </Wrapper>
    );
}

export default Home;