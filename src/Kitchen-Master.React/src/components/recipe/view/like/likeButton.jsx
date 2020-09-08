import React from 'react';
import withLikeWrapper from '../../common/like/withLikeWrapper';
import { Button, Icon, Label, Popup } from 'semantic-ui-react';

const LikeButton = ({ likes, likeClickable, isLiked, isLoadingLiked, handleLike }) => {
    const color = isLiked ? 'red' : 'grey';
    const tooltip = isLiked ? 'Unlike' : 'I like this';
    return (
        <Popup
            trigger={
                <Button as='div' fluid labelPosition='right' disabled={!likeClickable || isLoadingLiked} onClick={handleLike} >
                    <Button fluid color={color}>
                        <Icon name='heart' /> Like
                    </Button>
                    <Label as='a' basic color={color} pointing='left'>
                        {likes}
                    </Label>
                </Button>
            }
            position='bottom center'>
            {tooltip}
        </Popup>
    );
}

export default withLikeWrapper(LikeButton);
