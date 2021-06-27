export interface Mesero {
    name: string
}
  
export interface Data {
tableNumber: number,
status: string,
orderNumber: string,
waiter: Mesero[],
availability: Boolean,
qr: string,
}