import React from 'react';
import PageCard from '../components/PageCard';
import ShoppingBag from '../components/ShoppingBag';
import PageHeader from '../components/PageHeader';
import Wrapper from '../components/Wrapper';

const Bag: React.FC = () => {
    return (
        <PageCard>
            <Wrapper className='h-[15rem] w-[15rem]'>
            <PageHeader title='Your shopping bag'/>
            </Wrapper>
                <ShoppingBag />
                <img
        src='/images/munamiiLogo.png'
        alt='munamiiLogo'
        className="w-60 h-auto object-cover rounded-full mb-8  mx-auto"
      />
        </PageCard>
    );
};

export default Bag;
