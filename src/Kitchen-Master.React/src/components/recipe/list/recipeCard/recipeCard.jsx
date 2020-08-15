import React from 'react';
import { Card, Grid, Image, Icon } from 'semantic-ui-react'
import DifficultyLabel from '../../common/difficultyLabel/difficultyLabel';
import SpicyIcon from '../../common/spicyIcon/spicyIcon';
import { getImageUrl } from '_/utils/recipeUtils'
import styles from './recipeCard.module.scss';

const RecipeCard = ({ recipeAbstract }) => {
    return (
        <Card className={styles.card}>
            <Image src={getImageUrl(recipeAbstract.coverImageId)} wrapped ui={false}
                className={styles.coverImage} />
            <DifficultyLabel floating tag difficultyLevel={recipeAbstract.difficulty} />
            <Card.Content>
                <Card.Header className={styles.title}>{recipeAbstract.name}</Card.Header>
                <Card.Meta as='a' className={styles.author}>
                    <Icon name='user' />
                    {recipeAbstract.authorName}
                </Card.Meta>
                {/* <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description> */}
            </Card.Content>
            <Card.Content extra className={styles.bottomBar}>
                <SpicyIcon spicyLevel={recipeAbstract.spicy} />
                <Icon name='heart' className={styles.favorite}></Icon>
            </Card.Content>
        </Card>
    );
}

export default RecipeCard;