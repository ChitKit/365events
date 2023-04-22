import React, { useEffect, useState } from 'react'
import './Animators.scss'
import MainLayout from '../../Layout/MainLayout'

 const images = [
    {
      source: './imgTeam/1.jpg',
      name: 'Андрей',
      description: 'Талантливый и креативный аниматор, который всегда находит индивидуальный подход к каждому ребенку. Его занятия захватывают и вдохновляют маленьких гостей на творческое самовыражение. Андрей умеет создавать яркие и запоминающиеся персонажи, а его игры и конкурсы всегда вызывают улыбки на лицах детейю',
    },
    {
      source: '/imgTeam/2.png',
      name: 'Наташа',
      description: 'Энергичная и коммуникабельная аниматорша, которая обожает работать с детьми всех возрастов. Она умело подбирает музыку и создает веселую атмосферу, которая заставляет детей двигаться и танцевать. Наташа знает, как создать непередаваемый праздник и сделать его запоминающимся для каждого ребенка.',
    },
    {
      source: '/imgTeam/3.png',
      name: 'Михаил',
      description: 'Опытный аниматор, который умело справляется со своей работой в любой ситуации. Он знает, как заинтересовать детей и умело контролирует их поведение. Михаил умеет создавать из обычных игр и мероприятий настоящее шоу, которое никого не оставляет равнодушным.',
    },
    {
      source: '/imgTeam/4.png',
      name: 'Екатерина',
      description: 'Нежная и заботливая аниматорша, которая всегда подходит к детям с большой любовью и терпением. Она умеет наладить доверительные отношения с каждым ребенком и создать атмосферу домашнего уюта и тепла. Екатерина знает, как увлечь детей творчеством и помочь им раскрыть свой творческий потенциал.',
    }
  ]
export default function Animators({currentColorForImg, colorPuzzlePhoto}) {
  const arrayPuzzle = ['LT', 'LB', 'RT', 'RB']
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);
  const [pause, setPause] = useState(false);
  const [colorPuzzleForm, setColorPuzzleForm] = useState(undefined)
  console.log(colorPuzzleForm);
  useEffect(() => {
    if (!mousedOver) {
      if (!pause){
        const timer = setInterval(() => {
          setCount((prevCount) => (prevCount + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
      }
    }
  }, [mousedOver]);
  if (colorPuzzleForm === undefined) {
    setColorPuzzleForm(arrayPuzzle[Math.floor(Math.random() * 4)])
  }
  // //! Добавить MOBX в ПРОЕКТ !!! ( заменить состояние!!!!!)

  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Animators">
        <h1>Аниматоры</h1>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <div
              // just set mousedOver here instead of calling update/origCount
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              
            >
              <img style={{position:"absolute", width:'30em', height:'30em'}} src={`/puzzleFormForTeam/${colorPuzzleForm}${colorPuzzlePhoto}.png`} alt="puzzleForm" />
              <img style={{ width:'30em', height:'30em'}} src={images[count].source} alt={images.name} />
              
              <div className="title"><h2>{images[count].name}</h2></div>
              {/* <p>count is: {count}</p> */}
            </div>
          </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <h3 style={{position:'relative', top:'5em', boxShadow:'0 0 50px black', height:'10em', borderRadius:'2em', background:`rgba${currentColorForImg}, 0.6)`, padding:'1em'}}>{images[count].description}</h3>
              <div style={{display:'flex', flexDirection:'row'}}>
                {/* <button style={{width:'3em', height:'3em', margin:'0.5em'}} onClick={() => setPause(false)}>Play</button>
                <button style={{width:'4em', height:'3em', margin:'0.5em'}} onClick={() => setPause(true)}>Pause</button> */}
              </div>
            </div>
        </div>
      </div>
    </MainLayout>

  )
}
