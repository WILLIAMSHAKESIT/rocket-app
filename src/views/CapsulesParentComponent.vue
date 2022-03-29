<template>
    <div class="p-16">
        <FilterComponent :filter-data="filterData"/>
        <div class="flex flex-wrap gap-10 mt-10">
            <div class="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg w-96"  v-for="capsule,index in capsuleList" :key="index">
                <h5 class="mb-2 text-xl font-medium leading-tight text-gray-900">{{capsule.capsule_serial}}</h5>
                <p class="mb-4 text-base text-gray-700">
                {{capsule.details}}
                </p>
                 <button @click="showDetails(capsule)" type="button" class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
            </div>
        </div>
       
        <ModalParentContainer 
            :modal-data-prop="modalDataProp" 
            :modal-title="'Capsule Details'" 
            :component-name="'CapsuleItemModal'" 
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
            capsuleList:[],
            filterData:{
                searchValue:'',
                selectValue:null,
                loading:false,
                pageName:'Capsules',
                selectOptions:[
                    {
                        code:null,
                        label:'All Capsules'
                    },
                    {
                        code:'upcoming',
                        label:'Upcoming Capsules'
                    },
                    {
                        code:'past',
                        label:'Past Capsules'
                    }
                ],
                searchBar:true
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
            this.axios.get(`https://api.spacexdata.com/v3/capsules/${this.filterData.selectValue}?capsule_id=${this.filterData.searchValue}`).then((response) => {
                console.log(response.data)
                this.capsuleList = response.data
                this.filterData.loading = false
            })
        }
    }
}
</script>




