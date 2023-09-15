export class Bid {
	id?: string
	userId: string
	carId: string
	amount: number

	constructor (bid: Bid) {
		this.id = bid.id
		this.amount = bid.amount
		this.carId = bid.carId
		this.userId = bid.userId
	}
}