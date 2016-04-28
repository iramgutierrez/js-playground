export default class DetailController{
	constructor(DataService,$stateParams){
		this.member = null;
		this.days = null;

		DataService.getMember($stateParams.id)
			.then((member)=>{
				this.member = member;
				this.days = DataService.calcDays(member.entryDate);
			})
			.catch((err)=>{
				console.log(err);
			})
	}
}