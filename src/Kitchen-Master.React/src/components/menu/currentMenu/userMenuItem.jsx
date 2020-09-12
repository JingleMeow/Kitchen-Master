import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getImageUrl } from '_/utils/recipeUtils';
import styles from './userMenuItem.module.scss';

const UserMenuItem = ({ recipe, onRemove }) => {
    return (
        <div className={styles.row}>
            <Image bordered src={getImageUrl(recipe.coverImageId)} className={styles.recipeImage}></Image>
            <div className={styles.textAndButton}>
                <div className={styles.title}>
                    <Link to={`/recipe/${recipe.id}`} >{recipe.name}</Link>
                </div>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}
                    as={Button} color='red' size='huge'
                    icon='trash alternate'
                    className={styles.removeButton}
                    onClick={() => onRemove(recipe.id)} />
                <Responsive maxWidth={Responsive.onlyMobile.maxWidth}
                    as={Button} color='red' size='small' fluid
                    icon='trash alternate'
                    content='Remove Recipe'
                    className={styles.removeButton}
                    onClick={() => onRemove(recipe.id)} />
            </div>
        </div >
    );
}

UserMenuItem.propTypes = {
    recipe: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default UserMenuItem;
