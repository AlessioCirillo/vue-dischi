
const app = new Vue({
    el: '#app',
    data:{
        discs:[],
        activeGender: 'all'
    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                // handle success
                console.log(result);

                this.discs = result.data.response
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    },

    methods:{
        filterGen(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                let newDiscsList = result.data.response;

                if(this.activeGender !== 'all'){
                    newDiscsList = newDiscsList.filter( cd => cd.genre.toLowerCase() === this.activeGender);
                }

                this.discs = newDiscsList;  

            })
            .catch(error => {
                console.log(error);
            })
        }

    }
});