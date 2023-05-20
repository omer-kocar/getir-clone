import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from "../../models";
import TypeFiltering from "../../components/TypeFiltering";
import ProductContainer from "../../components/ProductsContainer";

function index(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
}

export default index;
