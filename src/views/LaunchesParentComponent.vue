<template>
    <div class="p-16">
            <FilterComponent :filter-data="filterData"/>
        <div class="mt-10">
            <LaunchesListItem :launches-list="launchesList"/>
        </div>
    </div>
</template>
<script>
import LaunchesListItem from '../components/launches/LaunchesListItem.vue'
import FilterComponent from '../components/FilterComponent.vue'
export default{
    data(){
        return{
            launchesList:[],
            filterData:{
                searchValue:'',
                selectValue:null,
                loading:false,
                pageName:'Launches',
                selectOptions:[
                    {
                        code:null,
                        label:'All Launches'
                    },
                    {
                        code:'upcoming',
                        label:'Upcoming Launches'
                    },
                    {
                        code:'past',
                        label:'Past Launches'
                    }
                ],
                searchBar:true
            },
        }  
    },
    components:{
        LaunchesListItem,
        FilterComponent
    },
    mounted(){
        this.getList();
    },
    watch:{
        'filterData.selectValue'(data){
            this.filterData.searchValue = ''
            this.filterData.loading = true
            this.getList(data)
        },
        'filterData.searchValue'(){
            this.filterData.loading = true
            this.getList()
        }
    },
    methods:{
        getList() {
            !this.filterData.selectValue? this.filterData.selectValue = '': this.filterData.selectValue
            this.axios.get(`https://api.spacexdata.com/v3/launches/${this.filterData.selectValue}?rocket_name=${this.filterData.searchValue}`).then((response) => {
                console.log(response.data)
                this.launchesList = response.data
                this.filterData.loading = false
            })
        }
    }
}
</script>




