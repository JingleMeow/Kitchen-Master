import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Icon, Button, Image, Dimmer } from 'semantic-ui-react';
import { currentRecipeSelector } from '_/redux/selectors/recipe';
import { uploadCoverImageAction, setCurrentRecipeFieldAction } from '_/redux/actions/recipe';

class CoverImageSectionEdit extends Component {
    fileInputRef = createRef();
    state = {
        file: null,
        isUpoading: false,
        showDimmer: false
    }
    render() {
        const { currentRecipe } = this.props;
        const { isUpoading, showDimmer } = this.state;
        return (
            <Fragment>
                <Header size='huge'>Cover Image</Header>
                {!currentRecipe.coverImageId &&
                    <Segment placeholder loading={isUpoading}>
                        <Header icon>
                            <Icon name='file image outline' style={{ height: 'auto' }} />
                            No cover image for this recipe
                        </Header>
                        <Button primary onClick={() => this.fileInputRef.current.click()}>Add Image...</Button>
                    </Segment>}
                {currentRecipe.coverImageId &&
                    <Dimmer.Dimmable as={Segment} placeholder loading={isUpoading}
                        onMouseEnter={() => this.setState({ showDimmer: true })}
                        onMouseLeave={() => this.setState({ showDimmer: false })}>
                        <Image src={`${process.env.API_IMAGE_URL}${currentRecipe.coverImageId}.jpg`} fluid></Image>
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
        currentRecipe: currentRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    uploadCoverImage: uploadCoverImageAction,
    setField: setCurrentRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverImageSectionEdit);
