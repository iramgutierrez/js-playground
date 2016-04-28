export default class ListController{
	constructor(DataService){
		DataService.getMembers()
			.then((members)=>{
				this.members = members;
			})
	}
}