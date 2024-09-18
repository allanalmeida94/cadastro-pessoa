export default class Person {
  #id: string
  #cpf: string
  #name: string
  #age: number
  #gender: string

  constructor(id:string = "", cpf: string, name: string, age: number, gender: string) {
    this.#id = id
    this.#cpf = cpf
    this.#name = name
    this.#age = age
    this.#gender = gender
  }

  static emptyObject(){
    return new Person('', '', '', 0, '')
  }

  get cpf() {
    return this.#cpf
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  get gender() {
    return this.#gender
  }
}
