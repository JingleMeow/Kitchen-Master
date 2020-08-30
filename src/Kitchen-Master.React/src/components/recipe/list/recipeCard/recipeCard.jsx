import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react'
import cn from 'classnames';
import DifficultyLabel from '../../common/difficultyLabel/difficultyLabel';
import SpicyIcon from '../../common/spicyIcon/spicyIcon';
import { getImageUrl } from '_/utils/recipeUtils'
import { currentUserSelector } from '_/redux/selectors/shared/';
import { likedRecipeIdsSelector, isLoadingLikedRecipeIdsSelector } from '_/redux/selectors/userData';
import { likeRecipe, cancelLikeRecipe } from '../../../../redux/actions/recipe/likeRecipeAction';
import styles from './recipeCard.module.scss';

const RecipeCard = ({
    recipeAbstract,
    currentUser,
    likedRecipeIds,
    isLoadingLikedRecipeIds,
    likeRecipe,
    cancelLikeRecipe }) => {
    const isLiked = likedRecipeIds?.includes(recipeAbstract.id);
    const isLoadingLiked = isLoadingLikedRecipeIds;
    const likeClickable = currentUser && !isLoadingLiked;
    const likeDivClassName = cn({
        [styles.like]: true,
        [styles.likeDisclickable]: !likeClickable,
        [styles.likeClickable]: likeClickable,
    });

    const handleLike = () => {
        if (!isLiked)
            likeRecipe(recipeAbstract.id);
        else
            cancelLikeRecipe(recipeAbstract.id);
        //console.log(isLiked);
    }
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
                <div className={likeDivClassName} onClick={handleLike}>
                    {isLoadingLiked && <Icon loading name='circle notch' />}
                    {!isLoadingLiked && <Icon name='heart' className={cn({ [styles.likeIconOn]: isLiked })}></Icon>}
                    <div className={styles.likeAmount}>
                        {recipeAbstract.likes} like{recipeAbstract.likes > 1 && 's'}
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        currentUser: currentUserSelector(state),
        likedRecipeIds: likedRecipeIdsSelector(state),
        isLoadingLikedRecipeIds: isLoadingLikedRecipeIdsSelector(state)
    }
}

const mapDispatchToProps = {
    likeRecipe: recipeId => likeRecipe(recipeId, true),
    cancelLikeRecipe: recipeId => cancelLikeRecipe(recipeId, true)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);