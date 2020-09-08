import React from 'react';
import withLikeWrapper from '../../common/like/withLikeWrapper';
import { Button, Icon, Label } from 'semantic-ui-react';

const LikeButton = ({ likes, likeClickable, isLiked, isLoadingLiked, handleLike }) => {
    const color = isLiked ? 'red' : 'grey';
    return (
        <Button as='div' fluid labelPosition='right' disabled={!likeClickable || isLoadingLiked} onClick={handleLike} >
            <Button fluid color={color}>
                <Icon name='heart' />
                Like
            </Button>
            <Label as='a' basic color={color} pointing='left'>
                {likes}
            </Label>
        </Button>
    );
}

export default withLikeWrapper(LikeButton);
