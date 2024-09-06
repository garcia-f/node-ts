import { ID, IntProduct } from "../interfaces/user.interface";
import ProductModel from "../models/product.model";



class ProductService {

    constructor () {}

    async getAllProducts() {
        const products = await ProductModel.findAll();
        return products;
    }

    async getProductById( id: ID ) {
        const product = await ProductModel.findByPk(id);
        return product;
    }

    async getProductByName(name: string) {
        const product = await ProductModel.findOne({ where: { name } });
        return product;
    }

    //TODO: preguntar a eric
    async createProduct(data: IntProduct) {
        const product = await ProductModel.create();
        return product;
    }

    async updateProduct(id: ID, data) {
        const product = await ProductModel.update(data, { where: { id } });
        return product;
    }

    async deleteProduct( id: ID ) {
        const product = await ProductModel.destroy({ where: { id } });
        return product;
    }

}

export default new ProductService()