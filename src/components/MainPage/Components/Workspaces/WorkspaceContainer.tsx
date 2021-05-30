import {FC} from 'react';
import styled from 'styled-components';

import SingleWorkspace from './SingleWorkspace';

import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const Containter = styled.div`
    max-width:1200px;
    min-width: 700px;
`;

const CustomSwiper = styled(Swiper)`
    height:225px;
`;

export const WorkspaceContainer: FC = () =>{
    return(
        <Containter>
            <CustomSwiper slidesPerView={4} spaceBetween={30}>  
                <SwiperSlide>
                    <SingleWorkspace 
                    title="Client contract"
                    path="clientcontract"
                    description="Contract"
                    bgImg="https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg"
                    userCount={150}
                    lastUpdateDays={27}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace 
                    title="Suplier contract"
                    path="supliercontract"
                    description="Contract"
                    bgImg="https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg"
                    userCount={25}
                    lastUpdateDays={2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace 
                    title="Corporate"
                    path="corporate"
                    description="corporate"
                    bgImg="https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg"
                    userCount={25}
                    lastUpdateDays={1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace 
                    title="Group norms"
                    path="groupnorms"
                    description="Norms"
                    bgImg="https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg"
                    userCount={25}
                    lastUpdateDays={1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace 
                    title="Real estate Contracts"
                    path="realestatecontracts"
                    description="Contract"
                    bgImg="https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg"
                    userCount={1}
                    lastUpdateDays={100}
                    />
                </SwiperSlide>
                
            </CustomSwiper>
        </Containter>
    );
}

export default WorkspaceContainer;