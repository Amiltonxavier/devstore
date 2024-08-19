import { z } from "zod";
import data from "../../data.json";

export async function GET(_: Request, {params}: {params: {id: number}}) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = z.number().parse(params.id)
    const product = data.products.filter((product) => product.id === id);
    
    if(!product){
     return Response.json({message: 'Product not found'}, {status: 404})
    }
    return Response.json(product);
  }
  