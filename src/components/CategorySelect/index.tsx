import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import Category from '../Category';

type Props = {
  hasCheckBox?: boolean;
}

export default function CategorySelect({ hasCheckBox }: Props) {
  const [categoryItem, setCategoryItem] = useState('');

  function handleCategorySelect(categoryId: string) {
    if (categoryId === categoryItem) {
      setCategoryItem('');
    } else {
      setCategoryItem(categoryId);
    }
  }

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categoryItem}
            onPress={() => handleCategorySelect(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>
  );
}

CategorySelect.defaultProps = {
  hasCheckBox: false,
};
