import React from 'react';
import { Icon } from 'semantic-ui-react'
import cn from 'classnames';
import styles from './likeIcon.module.scss';
import withLikeWrapper from '../../common/like/withLikeWrapper';

const LikeIcon = ({ likes, likeClickable, isLiked, isLoadingLiked, handleLike }) => {
    const likeDivClassName = cn({
        [styles.like]: true,
        [styles.likeDisclickable]: !likeClickable,
        [styles.likeClickable]: likeClickable,
    });
    return (
        <div className={likeDivClassName} onClick={handleLike}>
            {isLoadingLiked && <Icon loading name='circle notch' />}
            {!isLoadingLiked && <Icon name='heart' className={cn({ [styles.likeIconOn]: isLiked })}></Icon>}
            <div className={styles.likeAmount}>
                {likes} like{likes > 1 && 's'}
            </div>
        </div>
    );
}

export default withLikeWrapper(LikeIcon);
