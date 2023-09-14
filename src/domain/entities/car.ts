export class Car {
	id?: string; 
	brand: string; 
	model: string; 
	year: number; 
	startingPrice: number; 
	// currentBid: number; 
	// auctionEndTime: Date;
	isAuctionClosed: boolean; 
	winnerUserId?: string; // ID do usuário vencedor do leilão (opcional, definido quando o leilão é encerrado)

	constructor(props: Car) {
		this.id = props.id;
		this.brand = props.brand;
		this.model = props.model;
		this.year = props.year;
		this.startingPrice = props.startingPrice;
		// this.currentBid = props.currentBid;
		// this.auctionEndTime = props.auctionEndTime;
		this.isAuctionClosed = props.isAuctionClosed;
		this.winnerUserId = props.winnerUserId;
	}
}
