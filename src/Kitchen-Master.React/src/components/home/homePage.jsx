import React, { Component, Fragment } from 'react';
import withNavbar from '../navbar/withNavbar';
import { Grid, Image } from 'semantic-ui-react';
import { faLightbulb, faTasks, faShoppingBasket, faHamburger } from '@fortawesome/free-solid-svg-icons';
import InstructionCard from './instructionCard';
import styles from './homePage.module.scss';

class HomePage extends Component {
  render() {

    return (
      <Fragment>
        <div className={styles.homePageCover}>
          <Image src='/food-cover.jpg' fluid className={styles.foodPic} />
          <span className={styles.slogan}>Cook, Shop, Efficiently</span>
        </div>
        <Grid centered stackable>
          <Grid.Row columns={4}>
            <InstructionCard instruction={inspireInstruction} />
            <InstructionCard instruction={checklistInstruction} />
            <InstructionCard instruction={shoppingInstruction} />
            <InstructionCard instruction={cookingInstruction} />
          </Grid.Row>
        </Grid>

      </Fragment>
    );
  }
}

export default withNavbar(HomePage);

const inspireInstruction = {
  icon: faLightbulb,
  title: 'Inspire',
  description: 'Is it hard to decide what\'s on your menu? Get some inspiration and make your own menu.'
}
const checklistInstruction = {
  icon: faTasks,
  title: 'List',
  description: 'Generate your shopping list with all the ingredients needed in your menu.'
}
const shoppingInstruction = {
  icon: faShoppingBasket,
  title: 'Shopping',
  description: 'Go shopping with the shopping list.'
}
const cookingInstruction = {
  icon: faHamburger,
  title: 'Cooking',
  description: 'Follow the cooking instructions and cook like a chef.'
}
