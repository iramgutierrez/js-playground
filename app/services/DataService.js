import moment from 'moment';

export default class DataService{
	constructor($http,$q){
		this.$http = $http;
		this.$q = $q;
		this.members = null;
	}

	getMembers(){

		if (this.members){
			return this.$q.resolve(this.members);
		}else{
			return this.$http.get('/data/team.json')
				.then((response)=>{
					this.members = response.data.members;

					return this.members;
				})
		}
		
	}

	getMember(id){
		return this.getMembers()
			.then((members)=>{
				for(let i in members){
					if (members[i].id == id){
						return members[i];
					}
				}
				return this.$q.reject(Error('Member id not found'));
			})
	}

	calcDays(date){
		return moment().diff(moment(date),'days')
	}
}