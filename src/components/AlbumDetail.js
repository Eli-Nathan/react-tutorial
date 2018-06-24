import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    buttonContentStyle
  } = styles;

    return (
      <Card>
        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>

        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>

          <View style={buttonContentStyle}>
            <Button onPress={() => Linking.openURL(url)}>
              Buy now
              </Button>
          </View>

        </CardSection>
      </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 10
  },

  headerTextStyle: {
    fontSize: 18
  },

  buttonContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flex: 1
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};

export default AlbumDetail;
