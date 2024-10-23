import React from 'react';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';
import Wrapper from '../components/Wrapper';
import ShoppingBag from '../components/ShoppingBag';

const Bag: React.FC = () => {
    return (
        <PageCard>
            <Wrapper>
                <ShoppingBag />
            </Wrapper>
        </PageCard>
    );
};

export default Bag;
