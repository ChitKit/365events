import React, { useEffect, useState } from 'react'
import './NewYearAndSanta.scss'
import InteractiveShow from './Category/InteractiveShow';
import NY1 from './Category/NY1';
import NY2 from './Category/NY2';
import NY3 from './Category/NY3';
import NYOutdoor from './Category/NYOutdoor';
import NYinOrganization from './Category/NYinOrganization';

const categoryList = [
  'ИНТЕРАКТИВНЫЙ СПЕКТАКЛЬ', 'ДЕД МОРОЗ И СНЕГУРОЧКА на дом к ДЕТЯМ', 'ДЕД МОРОЗ И СНЕГУРОЧКА на дом к ВЗРОСЛЫМ', 
  'ДЕД МОРОЗ И СНЕГУРОЧКА на корпоратив', 'ДЕД МОРОЗ И СНЕГУРОЧКА на улице (30 минут)', 'ДЕД МОРОЗ И СНЕГУРОЧКА в учреждении (45 минут)'
      ]

export default function NewYearAndSanta() {


  const [serviceCardData, setServiceCardData] = useState(false);
  const [choiceNewYearAndSanta, setChoiceNewYearAndSanta] = useState();
  useEffect(() => {
    setChoiceNewYearAndSanta(categoryList[0])
      return () => {
          // setChoiceShow(shows[0]);
      };
  }, []);

  return (
      <div className="NewYearAndSanta" style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{fontSize:'var(--tittle_module_font_size)'}}>
                Новый год
            </h1>
          <p className="NewYearAndSanta-Main_description">
            Наши Дед Мороз и Снегурочка с радостью готовы прийти к Вам не только домой, 
            но и поиграть с детишками на улице, в детском саду, детском доме и центре 
            детского творчества, посетить ваших родных в больнице, пансионате для пожилых. 
            И, конечно, у нас есть уникальные и оригинальные программы для взрослых на 
            корпоратив. Наши Дед Мороз и Снегурочка придут в красивых «Боярских» нарядах, 
            с уникальным реквизитом ручной работы (посох, волшебное ведро) 
            и подарками/сувенирами из «Мастерской Деда Мороза».
          </p>
          <div
              style={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  flexWrap: 'wrap',
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              {categoryList.map((el) => {
                  return (
                      <div 
                        style={{
                            width: "30%",
                            height: "50%",
                        }}
                        onClick={() => {setChoiceNewYearAndSanta(el)}} 
                        className={choiceNewYearAndSanta === el ? "NewYearAndSanta_Active" : "NewYearAndSanta_Choice"} >
                          {/* <img
                              style={{ width: "25vh" }}
                              src={el.img}
                              alt=""
                          /> */}
                          <p>{el}</p>
                      </div>
                  );
              })}
          </div>
          {
              choiceNewYearAndSanta === 'Химическое шоу' ?
                    <InteractiveShow
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
                :
                choiceNewYearAndSanta === 'Шоу мыльных пузырей' ?
                    <NY1 
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
                :
                choiceNewYearAndSanta === 'Бумажное шоу' ?
                    <NY2 
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
                :
                choiceNewYearAndSanta === 'Шоу мыльных пузырей' ?
                    <NY3
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
                :
                choiceNewYearAndSanta === 'Бумажное шоу' ?
                    <NYOutdoor
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
                :
                choiceNewYearAndSanta === 'Бумажное шоу' &&
                    <NYinOrganization
                        serviceCardData={serviceCardData} 
                        setIsModalCard={setServiceCardData} 
                        data={choiceNewYearAndSanta}
                    />
          }
      </div>
  )
}