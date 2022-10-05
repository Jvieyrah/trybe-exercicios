type Slices  = 4 | 6 | 8;

interface Pizza {
    flavor: string,
    slices: Slices //  <- isso é um type alias
  }

    export default Pizza;