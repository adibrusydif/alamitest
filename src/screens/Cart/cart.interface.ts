import {ImageSourcePropType} from 'react-native';

export type DataCartInterface = dataCart[];

export interface dataCart {
  id: string;
  name: string;
  desc: string;
  price: number;
  image: ImageSourcePropType;
}

export interface ContentInterface {
  data: dataCart;
}
