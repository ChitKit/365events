import React, { useEffect, useState } from "react";
import "./Team.scss";

const images = [
    {
        source: "./imgTeam/Alex_animator1.jpg",
        role: 'Аниматор',
        name: "Александр",
        description: `Обаятельный и очень внимательный аниматор. Мастер проведения различных игровых программ, квестов, конкурсов и игр по типу мафии, денежного потока и т.д.`,
    },
    {
        source: "/imgTeam/Ulyana_animator1.jpg",
        role: 'Аниматор',
        name: "Ульяна",
        description: `Удивительная молодая аниматор! Начинающий педагог.  
      Поет, танцует и проводит мастер-классы. Умеет работать с подростками!`,
    },
    {
        source: "/imgTeam/Vladislav_animator1.jpg",
        role: 'Аниматор',
        name: "Владислав",
        description: `Ведущий свадеб, юбилеев, праздников, корпоративов и выпускных вечеров.
      Большой опыт в сфере детской анимации: может работать с аудиторией от 5 до 100+ человек. 
      Заставит смеяться и веселиться даже Царевну-Несмеяну!`,
    },
    {
        source: "/imgTeam/Elena_animator1.jpg",
        role: 'Аниматор',
        name: "Елена",
        description: `Потрясающая ведущая корпоративов и праздников, вдобавок аниматор.
      Обаятельная и привлекательная! С потрясающим чувством юмора и умением создать атмосферу теплоты, душевности и радости!`,
    },
    {
        source: "/imgTeam/Uriy_animator1.jpg",
        role: 'Аниматор',
        name: "Юрий",
        description: `Огромный багаж развлекательных игр и идей абсолютно для всех! Заведет кого угодно и заставит плакать от смеха! 
      – Актёр театра и кино; 
      –педагог актерского мастерства, постановщик спектаклей`,
    },
    {
        source: "/imgTeam/Sergey_illusionist1.jpg",
        role: 'Иллюзионист',
        name: "Сергей",
        description: `В моих руках не только платок исчезнет в руке и перчатки превратятся в шарф, а жвачка в кубик, но я покажу вам фокусы с шариками, картами, деньгами и многим многим другим. А еще к вам в гости придет мой друг - кролик Хвостик. Самое главное- эти фокусы мы будем делать с вами вместе!`,
    },
    {
        source: "/imgTeam/Max_illusionist.jpeg",
        role: 'Иллюзионист',
        name: "Максим",
        description: `Шоу приправлено юмором Микромагия (30 мин) на встрече гостей или welcome зоне Микромагия - это фокусы на расстоянии вытянутой руки с обычными предметами. Современные трюки, которые происходят прямо в руках у гостей.`,
    },
    {
        source: "/imgTeam/Daniil_animator1.jpg",
        role: 'Аниматор',
        name: "Даниил",
        description: `Ведущий на праздники, свадьбы, выпускные вечера, корпоративы и юбилеи.
        О себе: «Обожаю юмор и всё, что с ним связано. Тесно знаком с жанром импровизационной комедии. Очень добрый, чуткий и вообще завидный жених. До кучи я ещё и КВНщик... так что со мной точно не соскучишься 😃»`,
    },
    {
        source: "/imgTeam/Dilan_illusionist1.jpg",
        role: 'Иллюзионист',
        name: "Дилан",
        description: `В моем арсенале более 20 фокусов, среди них: фокусы с деньгами и картами, шариками и огнем… и многое многое другое! 
            Провожу представление как у детей, так и у взрослых, но с удовольствием проведу и совместное!`,
    },
    //! МАСТЕР КЛАССЫ
    {
        source: "/imgTeam/Katya_MK1.jpg",
        role: 'Мастер-класс',
        name: "Катя",
        description:
            "Проводит Мастер-классы, специалист по аквагриму и Бьюти-бару",
    },
    {
        source: "/imgTeam/Alexandra_MK1.jpg",
        role: 'Мастер-класс',
        name: "Александра",
        description:
            "Проводит Мастер-классы, специалист по аквагриму и Бьюти-бару",
    },
    {
        source: "/imgTeam/Stella_MK1.jpg",
        role: 'Мастер-класс',
        name: "Стелла",
        description: `Стелла Проводит Мастер-классы из вторсырья
      "Есть настроение - ТВОРЮ! 🤩🎉 Нет настроения - вытворяю!😈😅"`,
    },
    //! ФОТО-ВИДЕО
    {
        source: "/imgTeam/Victoriya_photograph1.jpg",
        role: 'Фотограф',
        name: "Виктория",
        description: "Фотограф",
    },
    {
        source: "/imgTeam/Sergey_video1.jpg",
        role: 'Видеограф',
        name: "Сергей",
        description: "Видеограф",
    },
];
export default function Team({ currentColorForImg }) {


    const arrayPuzzle = ["LT", "LB", "RT", "RB"];
    const [count, setCount] = useState(0);
    const [mousedOver, setMousedOver] = useState(false);
    const [pause, setPause] = useState(false);
    const [colorPuzzleForm, setColorPuzzleForm] = useState(undefined);
    const [personalCardData, setPersonalCardData] = useState(null);
    const [viewCard, setViewCard] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setViewCard(!viewCard)
        }, 200);
    }, [personalCardData])
    

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
      };

    useEffect(() => {
        if (!mousedOver) {
            if (!pause) {
                const timer = setInterval(() => {
                    setCount((prevCount) => (prevCount + 1) % images.length);
                }, 3000);
                return () => clearInterval(timer);
            }
        }
    }, [mousedOver]);
    if (colorPuzzleForm === undefined) {
        setColorPuzzleForm(arrayPuzzle[Math.floor(Math.random() * 4)]);
    }
    // //! Добавить MOBX в ПРОЕКТ !!! ( заменить состояние!!!!!)

    return (
        <div
            className="Team"
        >
            <h2 style={{position: "absolute", top: "0", fontSize:'var(--tittle_module_font_size)', marginBottom:'0'}}>
                Команда 365:events
            </h2>
            <div className="Team-Carousel">
                {images && 
                    images.map((el) => (
                        <div className="Team-Carousel-Card_Window"
                            onClick={() => {setPersonalCardData(el)}}
                        >
                            <img style={{width:'100%'}} alt={el.name} src={el.source} />
                            <div >
                                <h6>{el.role}</h6>
                            </div>
                        </div>
                    ))
                }
                {/* <Slider {...settings}>
                {images.map((el) => (
                    <div className="Team-Carousel-Card" style={{ display:'flex', flexDirection:'row', justifyContent:'center', width:'100%' }}>
                        <img className="Image-Carousel" alt={el.name} src={el.source} />
                        <div className="Team-Carousel-Card-Name_And_Description">
                            <h3 className="Team-Carousel-Card-Name_And_Description-H3">{el.name}</h3>
                            <h5 className="Team-Carousel-Card-Name_And_Description-H5">{el.description}</h5>
                        </div>
                    </div>
                ))}
                </Slider> */}
            </div>
            {personalCardData &&
                <div className="Team-Personal_Card">
                    <div onClick={() => {setPersonalCardData(null)}} className="Team-Personal_Card-Button_Close">X</div>
                    <img className="Team-Personal_Card-Image" src={personalCardData.source} alt={personalCardData.name} />
                    <div className="Team-Personal_Card-Info">
                        <p className="Team-Personal_Card-Info-Name">{personalCardData.name}</p>
                        <p className="Team-Personal_Card-Info-Description">{personalCardData.description}</p>
                    </div>
                </div>
            }
        </div>
    );
}
