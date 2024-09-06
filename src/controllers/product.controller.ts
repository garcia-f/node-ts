import { Request, Response } from "express";
import ProductService from "../services/product.service";

class ProductController {

    constructor () {}

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductService.getAllProducts();

            if (!products || products.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se han encontrado productos!'
                })
            }

            res.status(200).json({ products });
        } catch (err) {
            console.error(err);
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el producto!'
                })
            }

            res.status(200).json({ product });
        } catch (err) {
            console.error(err);
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const data = req.body;
            const product = await ProductService.createProduct( data );

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido actualizar el producto!'
                })
            }
            
            res.status(200).json({ product })
        } catch (err) {
            console.error(err);
        }
    }


    async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;

            const product = await ProductService.updateProduct(id, data);

            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el producto"
                })
            } 

            res.status(200).send({ product });
        } catch (err) {
            console.error(err);
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await ProductService.deleteProduct(id);

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido eliminar el producto!'
                })
            }

            res.status(200).send({ product });
        } catch (err) {
            console.error(err);
        }
    }
}

export default new ProductController()