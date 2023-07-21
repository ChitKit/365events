import React, { useEffect, useState } from "react";
import "./Team.scss";
import Slider from "react-slick";

const images = [
    {
        source: "./imgTeam/Alex_animator1.jpg",
        name: "Александр",
        description: `Обаятельный и очень внимательный аниматор. Мастер проведения различных игровых программ, квестов, конкурсов и игр по типу мафии, денежного потока и т.д.`,
    },
    {
        source: "/imgTeam/Ulyana_animator1.jpg",
        name: "Ульяна",
        description: `Удивительная молодая аниматор! Начинающий педагог.  
      Поет, танцует и проводит мастер-классы. Умеет работать с подростками!`,
    },
    {
        source: "/imgTeam/Vladislav_animator1.jpg",
        name: "Владислав",
        description: `Ведущий свадеб, юбилеев, праздников, корпоративов и выпускных вечеров.
      Большой опыт в сфере детской анимации: может работать с аудиторией от 5 до 100+ человек. 
      Заставит смеяться и веселиться даже Царевну-Несмеяну!`,
    },
    {
        source: "/imgTeam/Elena_animator1.jpg",
        name: "Елена",
        description: `Потрясающая ведущая корпоративов и праздников, вдобавок аниматор.
      Обаятельная и привлекательная! С потрясающим чувством юмора и умением создать атмосферу теплоты, душевности и радости!`,
    },
    {
        source: "/imgTeam/Uriy_animator1.jpg",
        name: "Юрий",
        description: `Огромный багаж развлекательных игр и идей абсолютно для всех! Заведет кого угодно и заставит плакать от смеха! 
      – Актёр театра и кино; 
      –педагог актерского мастерства, постановщик спектаклей`,
    },
    {
        source: "/imgTeam/Sergey_illusionist1.jpg",
        name: "Сергей",
        description: `Иллюзионист 
      В моих руках не только платок исчезнет в руке и перчатки превратятся в шарф, а жвачка в кубик, но я покажу вам фокусы с шариками, картами, деньгами и многим многим другим. А еще к вам в гости придет мой друг - кролик Хвостик. Самое главное- эти фокусы мы будем делать с вами вместе!`,
    },
    {
        source: "/imgTeam/Daniil_animator1.jpg",
        name: "Даниил",
        description: `Ведущий на праздники, свадьбы, выпускные вечера, корпоративы и юбилеи.
      О себе: «Обожаю юмор и всё, что с ним связано. Тесно знаком с жанром импровизационной комедии. Очень добрый, чуткий и вообще завидный жених. До кучи я ещё и КВНщик... так что со мной точно не соскучишься 😃»`,
    },
    {
        source: "/imgTeam/Dilan_illusionist1.jpg",
        name: "Дилан",
        description: `В моем арсенале более 20 фокусов, среди них: фокусы с деньгами и картами, шариками и огнем… и многое многое другое! 
            Провожу представление как у детей, так и у взрослых, но с удовольствием проведу и совместное!`,
    },
    {
        source: "/imgTeam/Katya_MK1.jpg",
        name: "Катя",
        description:
            "Проводит Мастер-классы, специалист по аквагриму и Бьюти-бару",
    },
    {
        source: "/imgTeam/Alexandra_MK1.jpg",
        name: "Александра",
        description:
            "Проводит Мастер-классы, специалист по аквагриму и Бьюти-бару",
    },
    {
        source: "/imgTeam/Stella_MK1.jpg",
        name: "Стелла",
        description: `Стелла Проводит Мастер-классы из вторсырья
      "Есть настроение - ТВОРЮ! 🤩🎉 Нет настроения - вытворяю!😈😅"`,
    },
    {
        source: "/imgTeam/Victoriya_photograph1.jpg",
        name: "Виктория",
        description: "Фотограф",
    },
    {
        source: "/imgTeam/Sergey_video1.jpg",
        name: "Сергей",
        description: "Видеограф",
    },
];
export default function Team({ currentColorForImg, colorPuzzlePhoto }) {


    const arrayPuzzle = ["LT", "LB", "RT", "RB"];
    const [count, setCount] = useState(0);
    const [mousedOver, setMousedOver] = useState(false);
    const [pause, setPause] = useState(false);
    const [colorPuzzleForm, setColorPuzzleForm] = useState(undefined);
    console.log(colorPuzzleForm);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
            style={{ background: `rgba${currentColorForImg}, 0.7)` }}
            className="Team"
        >
            <h2 style={{ position: "absolute", top: "0" }}>Актёры</h2>
            <div className="Team-Carousel">
                <Slider {...settings}>
                {images.map((el) => (
                    <div className="Team-Carousel-Card" style={{ display:'flex', flexDirection:'row' }}>
                        <img style={{ width: "45%" }} alt={el.name} src={el.source} />
                        <div className="Team-Carousel-Card-Name_And_Description">
                            <h3>{el.name}</h3>
                            <h5>{el.description}</h5>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}
