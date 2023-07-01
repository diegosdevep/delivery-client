import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../../../components/details/header/Header';
import { styles } from './detailsScreen.styles';
import Information from '../../../../components/details/information/Information';
import Ingredients from '../../../../components/details/ingredients/Ingredients';
import ExtraIngredients from '../../../../components/details/ingredients/extraIngredients/ExtraIngredients';
import Footer from '../../../../components/details/footer/Footer';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Information />
            <Ingredients />
            <ExtraIngredients />
          </View>
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
};

export default DetailsScreen;
