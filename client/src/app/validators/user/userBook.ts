import { BookCategory } from '../book/bookCategory'
export class UserBook {
  id: number
  name: string
  email: string
  cellphone: string
  books:BookCategory[]
}
