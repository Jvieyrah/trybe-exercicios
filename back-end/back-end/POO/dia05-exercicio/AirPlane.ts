import { IAirPlane} from "./interfaces";

export default class AirPlane implements IAirPlane {
    fly(): void { console.log('Flying a airplane'); }
}