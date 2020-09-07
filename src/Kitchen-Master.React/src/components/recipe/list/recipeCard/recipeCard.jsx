import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react'
import DifficultyLabel from '../../common/difficultyLabel/difficultyLabel';
import SpicyIcon from '../../common/spicyIcon/spicyIcon';
import LikeIcon from './likeIcon';
import { getImageUrl } from '_/utils/recipeUtils'
import styles from './recipeCard.module.scss';

const RecipeCard = ({ recipeAbstract }) => {
    return (
        <Card className={styles.card}>
            <Image src={getImageUrl(recipeAbstract.coverImageId)} wrapped ui={false}
                className={styles.coverImage} />
            <DifficultyLabel floating tag difficultyLevel={recipeAbstract.difficulty} />
            <Card.Content>
                <Card.Header as={Link} to={`/recipe/${recipeAbstract.id}`} className={styles.title}>
                    {recipeAbstract.name}
                </Card.Header>
                <Card.Meta as={Link} to={`/searchRecipes?a=${recipeAbstract.authorId}`} className={styles.author}>
                    <Icon name='user' />
                    {recipeAbstract.authorName}
                </Card.Meta>
            </Card.Content>
            <Card.Content extra className={styles.bottomBar}>
                <SpicyIcon spicyLevel={recipeAbstract.spicy} />
                <LikeIcon recipeId={recipeAbstract.id} likes={recipeAbstract.likes} />
            </Card.Content>
        </Card>
    );
}

export default RecipeCard;
