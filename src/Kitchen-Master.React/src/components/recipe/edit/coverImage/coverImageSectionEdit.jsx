import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Icon, Button, Image, Dimmer } from 'semantic-ui-react';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { uploadCoverImageAction, setRecipeFieldAction } from '_/redux/actions/recipe/newRecipe';
import { getImageUrl } from '_/utils/recipeUtils';

class CoverImageSectionEdit extends Component {
    fileInputRef = createRef();
    state = {
        file: null,
        isUpoading: false,
        showDimmer: false
    }
    render() {
        const { newRecipe } = this.props;
        const { isUpoading, showDimmer } = this.state;
        return (
            <Fragment>
                <Header size='huge'>Cover Image</Header>
                {!newRecipe.coverImageId &&
                    <Segment placeholder loading={isUpoading}>
                        <Header icon>
                            <Icon name='file image outline' style={{ height: 'auto' }} />
                            No cover image for this recipe
                        </Header>
                        <Button primary onClick={() => this.fileInputRef.current.click()}>Add Image...</Button>
                    </Segment>}
                {newRecipe.coverImageId &&
                    <Dimmer.Dimmable as={Segment} placeholder loading={isUpoading}
                        onMouseEnter={() => this.setState({ showDimmer: true })}
                        onMouseLeave={() => this.setState({ showDimmer: false })}>
                        <Image src={getImageUrl(newRecipe.coverImageId)} fluid></Image>
                        <Dimmer active={showDimmer}>
                            <Header icon inverted>
                                <Icon name='refresh' rotated='clockwise' />
                                Change cover image for this recipe
                            </Header>
                            <Button color='grey' onClick={() => this.fileInputRef.current.click()}>Open...</Button>
                        </Dimmer>
                    </Dimmer.Dimmable>}
                <input ref={this.fileInputRef} type="file" hidden onChange={this.handleFileChange} />
            </Fragment>
        );
    }

    handleFileChange = event => {
        const image = event.target.files[0];
        if (image) {
            const { uploadCoverImage, setField } = this.props;
            this.setState({ isUpoading: true });
            uploadCoverImage(image)
                .then(response => {
                    setField('coverImageId', response.data);
                    this.setState({ isUpoading: false });
                })
                .catch(error => {
                    this.setState({ isUpoading: false });
                });

        }
    }

}

const mapStateToProps = state => {
    return {
        newRecipe: newRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    uploadCoverImage: uploadCoverImageAction,
    setField: setRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverImageSectionEdit);
