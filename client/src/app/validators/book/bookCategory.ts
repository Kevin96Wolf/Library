import { Category } from '../category/category'
import { User } from '../user/user'
export class BookCategory{
  id: number
  name:string
  author:string
  publishDate:string
  urlImage:string
  state:number
  category_id:number
  category:Category
  users:User[]
}
