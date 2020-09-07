import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUserSelector } from '_/redux/selectors/shared/';
import { likedRecipeIdsSelector, isLoadingLikedRecipeIdsSelector } from '_/redux/selectors/userData';
import { likeRecipe, cancelLikeRecipe } from '_/redux/actions/recipe/likeRecipeAction';

function withLikeWrapper(LikeComponent) {
    class LikeWrapper extends Component {
        isLiked() {
            const { recipeId, likedRecipeIds } = this.props;
            return likedRecipeIds?.includes(recipeId);
        }

        isLoadingLiked() {
            return this.props.isLoadingLikedRecipeIds;
        }

        likeClickable() {
            return this.props.currentUser && !this.isLoadingLiked();
        }

        handleLike = () => {
            const { recipeId, likeRecipe, cancelLikeRecipe } = this.props;
            if (!this.isLiked())
                likeRecipe(recipeId);
            else
                cancelLikeRecipe(recipeId);
        }

        render() {
            const props = {
                isLiked: this.isLiked(),
                isLoadingLiked: this.isLoadingLiked(),
                likeClickable: this.likeClickable(),
                likes: this.props.likes,
                handleLike: this.handleLike,
            }
            return (
                <LikeComponent {...props} />
            );
        }
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
    return connect(mapStateToProps, mapDispatchToProps)(LikeWrapper);
}

export default withLikeWrapper;
