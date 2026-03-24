import { Container } from './components/Container'
import Card from './components/Card'
import { TextBlock } from './components/Text'
import { Button } from './components/Button'
import { List } from './components/List'
import { Link } from './components/Link'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <Container>
        <div className="card">
        <Card
          title="Card title"
          imgSrc="#"
          imgAlt="Image cap"
        >
            <TextBlock text={`Some quick example text to build 
            on the card title and make up the bulk 
            of the card’s content.`}>
            </TextBlock>
            <Button text={`Go somewhere`}></Button>
          </Card>
        </div>

        <div className="card">
          <Card title="Special title treatment">
            <TextBlock text={`With supporting text below as a
            natural lead-in to additional content`}>
            </TextBlock>
            <Button text={`Go somewhere`}></Button>
          </Card>
        </div>

        <div className="card">
          <TextBlock text={`Пример карточки без изображения, содержащей только текстовое содержимое`}>
              </TextBlock>
        </div>

        <div className="card">
            <Card 
            title="Card title"
            imgSrc='#'
            imgAlt='Image cap'
            >
              <TextBlock text={`Some quick example text to build 
              on the card title and make up the bulk 
              of the card’s content.`}>
              </TextBlock>
              <List items={['An item', 'A second item', 'A third item']}></List>
              <div className='link-container'>
                <Link href="#">Card link</Link>
                <Link href="#">Another link</Link>
              </div>
            </Card>
        </div>

        <div className="card">
          <Card title="Особая карточка">
            <TextBlock text={`Карточка с заголовком и нижним колонтитулом.`}>
            </TextBlock>
            <Footer text={`2 дня назад`}></Footer>
          </Card>
        </div>



      </Container>
    </>
  )
}

export default App
