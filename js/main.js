
const app = new Vue({
    el: '#app',
    data:{
        discs:[]
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

    }
});