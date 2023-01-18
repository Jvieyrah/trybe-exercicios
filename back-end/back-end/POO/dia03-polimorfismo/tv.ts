class tv {

 private _brand: string;
 private _size: number;
 private _resolution: string;
 private _connections: string[];
 private _connectedTo: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

turnOn() {
    console.log(` The TV ${this._brand} is on.`);
}

get connectedTo() {
    return this._connectedTo;
}

set connectedTo(device: string) {
    if (this._connections.includes(device)) {
        this._connectedTo = device;
        console.log(`The TV is connected to ${device}`);
    } 
}
}

const philips = new tv('Philips', 55, '4K', ['HDMI', 'USB', 'VGA']);
philips.turnOn();
philips.connectedTo = 'HDMI';
