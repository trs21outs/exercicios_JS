function organizador(a,b){
    return (a-b)
  }

class SmallestIntegerFinder {
  
  findSmallestInt(args) {
   args.sort(organizador)
    return args[0]
    
  }
}