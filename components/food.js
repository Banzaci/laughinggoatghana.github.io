import Title from './title'
import Paragraf from './paragraf'
import Container from './container'

const FoodBlock = ({title, items}) => (
  <div className="item">
    <h2>{title}</h2>
    <ul>
      {
        items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
    <style jsx>{`
      .item {
        text-align: center;
        width: 100%;
      }
      li {
        width: 100%;
        padding: 5px 0;
      }
      ul {
        padding-top: 10px;
        margin-bottom: 20px;
      }
      `}</style>
  </div>
)
const Food = () => (
    <Container>
      <Title content="Food & beverage" />
      <Paragraf bigger>Welcome to the only fully vegan restaurant in Busua Beach. Here we server our food with only fresh products.</Paragraf>
      <Paragraf>
        Breakfast serves between <strong>8am-10am</strong><br/>
        Lunch serves between <strong>11:30am-3pm</strong><br/>
        Dinner serves between <strong>5pm-8pm</strong><br/><br/>
      </Paragraf>
      <FoodBlock title="Breakfast" items={[
        'Avocado toast on hummus with mayonnaise. / $4',
        'Breakfast muesli. / ¢3',
        'Pancakes with banana. / ¢3'
      ]} />
      <FoodBlock title="Lunch / Dinner" items={[
        'Bean burger with fried potatoes. / $5',
        'Italian style pasta. / $4.5',
        'Mexican bean stew with fresh salad. / $4.5',
        "Laughing Goat's awsome indian lentils coconut stew with rice. / $4.5",
        'Pizza with vegetables (pre order). / $5',
      ]} />
      <FoodBlock title="Non alcoholic drinks" items={[
        'Fresh orange juice. / $1.5',
        'Fresh pineapple juice. / $2',
        'Banana & chocolate smoothie. / $3',
        'Coffee or tea. / $2'
      ]} />
      <FoodBlock title="Alcoholic drinks" items={[
        'Beer. / $2',
        'Laughing Goat drink. / $3',
        'Pina colada. / $4',
        'Whiskey & coke. / $3',
        'White wine & sprite. / $4',
        '... and much more.',
      ]} />
    </Container>
)

export default Food
