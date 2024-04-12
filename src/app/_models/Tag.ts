export class Tag{
  static readonly ANGULAR = new Tag('Angular','red');
  static readonly TYPESCRIPT = new Tag('TypeScript','Gray');
  static readonly PYHTON = new Tag('Python','MediumSeaGreen');
  static readonly JAVA = new Tag('Java','Orange');
  static readonly HTML = new Tag('HTML','SlateBlue');
  static readonly CSS = new Tag('Css','purple');
  static readonly BOOTSTRAP = new Tag('Bootstrap','Violet');
  static readonly JAVASCRIPT = new Tag('JavaScript','orange');
  static readonly MACHINELEARING = new Tag('MachineLearning','Tomato');





  private constructor(private readonly key:string, public readonly color:string)
  {

  }
  toString(){
    return this.key
  }
}
