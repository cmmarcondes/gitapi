import React from 'react';
import { Links, LinksWrapper, NavBar } from '../../styles/navstyle';

interface Props {
    user_details: any
}
const Details: React.FC<Props> = () => {
    return (
        <NavBar>
            <LinksWrapper>
                <Links>Welcome fulano</Links>
            </LinksWrapper>
        </NavBar>
    );
}

export default Details;