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
      <Paragraf>At Laughing Goat we serve fresh plant based food. Guests recevies 10% off on all food items on the menu.</Paragraf>
      <Paragraf>
        Breakfast serves between <strong>8am-10am</strong><br/>
        Lunch serves between <strong>11am-15pm</strong><br/>
        Dinner serves between <strong>17pm-20pm</strong><br/><br/>
      </Paragraf>
      <FoodBlock title="Breakfast" items={[
        'Avocado toast on hummus with mayonnaise. / ¢18',
        'Muesli with "milk". / ¢14'
      ]} />
      <FoodBlock title="Lunch / Dinner" items={[
        'Bean burger with fried potatoes. / ¢22',
        'Surfers italian pasta with a touch of pepper. / ¢19',
        "Laughing Goat's awsome lentils coconut stew with rice. / ¢19"
      ]} />
      <FoodBlock title="Non alcoholic drinks" items={[
        'Fresh orange juice. / ¢8',
        'Fresh pineapple juice. / ¢8',
        'Banana & chocolate smoothie. / ¢14',
        'Coffee or tea. / ¢8'
      ]} />
      <FoodBlock title="Alcoholic drinks" items={[
        'Beer. / ¢8',
        'Laughing Goat drink. / ¢15',
        'Pina colada. / ¢15',
        'Whiskey & coke. / ¢15',
        'White wine & sprite. / ¢12',
        'Smirnoff ice. / ¢7',
      ]} />
    </Container>
)

export default Food
