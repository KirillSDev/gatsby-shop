import { Character } from "@interfaces/Product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProduct
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Pick<Character, "name" | "image">;
  price: string;
}
