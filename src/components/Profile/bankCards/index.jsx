import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import MobileBankCards from '../mobileBankCards';
import DesktopBankCards from '../desktopBankCards';
import Title from './../../General/title';
import NoBankCards from '../noBankCards';
import LinkBankCard from '../linkBankCard';

import useRequest from '../../../hooks/useRequest';
import { getUserBankCards } from '../../../api/profileAPI';

import './index.scss';





const BankCards = observer(() => {
    const [cards, setCards] = useState([])
    const [mainCard, setMainCard] = useState(false)
    const [newCardLoading, setNewCardLoading] = useState(false)
    const [scheduleRender, setScheduleRender] = useState(false)
    const [data, loading, error] = useRequest(() => getUserBankCards(localStorage.getItem('user_id')), [scheduleRender])

    useEffect(() => {
        if (data && !loading) {
            setCards(data)

            data.map((item) => {
                if (item.main_card === true) {
                    setMainCard(item.id)
                }
            })
        }
    }, [data, loading])


    return (
        <section className="bank_cards">
            <Title title="Банковские карты" />


            <LinkBankCard 
                scheduleRender={scheduleRender} 
                setScheduleRender={setScheduleRender}
                setNewCardLoading={setNewCardLoading}
            />

            {
                cards && cards.length > 0 ?
                    <>
                        <MobileBankCards 
                            cards={cards} 
                            setCards={setCards}
                            newCardLoading={newCardLoading}
                            mainCard={mainCard}
                            setMainCard={setMainCard}
                        />
                        
                        <DesktopBankCards
                            cards={cards}
                            setCards={setCards}
                            newCardLoading={newCardLoading}
                            mainCard={mainCard}
                            setMainCard={setMainCard}
                        />
                    </>
                :
                    <NoBankCards />
            }
            
            
        </section>
    )
})

export default BankCards;
