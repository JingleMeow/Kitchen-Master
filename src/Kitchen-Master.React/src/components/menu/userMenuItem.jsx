import React, { Component } from 'react';
import { Grid, Image, Button, Header } from 'semantic-ui-react';
import { getImageUrl } from '../../utils/recipeUtils';
import styles from './userMenuItem.module.scss';
import { Link } from 'react-router-dom';

const UserMenuItem = ({ recipe, onRemove }) => {
    return (
        <div className={styles.row}>
            <Image bordered src={getImageUrl(recipe.coverImageId)} className={styles.recipeImage}></Image>
            <div className={styles.title}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </div>
            <Button color='red' className={styles.removeButton} size='huge'
                icon='trash alternate'
                onClick={() => onRemove(recipe.id)} />
        </div>
    );
}

export default UserMenuItem;
