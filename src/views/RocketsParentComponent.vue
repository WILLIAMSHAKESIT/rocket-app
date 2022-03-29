<template>
    <div class="p-16">
        <FilterComponent :filter-data="filterData"/>
        <div class="flex flex-wrap gap-10 mt-10">
            <div v-for="rocket,index in rocketList" :key="index" class="flex justify-center">
                <div class="max-w-sm rounded-lg shadow-lg bg-zinc-900">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" :src="rocket.flickr_images[0]" alt=""/>
                    </a>
                    <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium text-slate-50">{{rocket.rocket_name}}</h5>
                    <p class="mb-4 text-base text-slate-50">
                        {{rocket.description}}
                    </p>
                    <button @click="showDetails(rocket)" type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <ModalParentContainer 
            :modal-data-prop="modalDataProp" 
            :modal-title="'Rocket Details'" 
            :component-name="'RocketItemModal'" 
            :show-modal="toggleModal"
        />
    </div>
</template>
<script>
import FilterComponent from '../components/FilterComponent.vue'
import ModalParentContainer from '../components/ModalParentContainer.vue'
export default{
    data(){
        return{
            modalDataProp:[],
            toggleModal:false,
            rocketList:[],
            filterData:{
                searchValue:'',
                selectValue:null,
                loading:false,
                pageName:'Rockets',
                selectOptions:[],
                searchBar:false
            },
        }  
    },
    components:{
        FilterComponent,
        ModalParentContainer
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
        showDetails(data){
            this.modalDataProp = data
            this.toggleModal = true
        },
        getList() {
            !this.filterData.selectValue? this.filterData.selectValue = '': this.filterData.selectValue
            this.axios.get(`https://api.spacexdata.com/v3/rockets`).then((response) => {
                console.log(response.data)
                this.rocketList = response.data
                this.filterData.loading = false
            })
        }
    }
}
</script>




