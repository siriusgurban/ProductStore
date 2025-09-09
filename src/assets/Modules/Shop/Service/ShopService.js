import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async productList() {
    return await ShopProvider.getProducts().then((res) => {
      return res.data;
    });
  }
}
