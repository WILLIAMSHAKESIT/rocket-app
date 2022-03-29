<template>
    <ModalParentContainer 
        :modal-data-prop="modalDataProp" 
        :modal-title="'Launch Details'" 
        :component-name="'LaunchesItemModal'" 
        :show-modal="toggleModal"
    />
    <ol class="relative border-l border-gray-200 dark:border-gray-300">                  
        <li class="p-6 cursor-pointer hover:bg-zinc-900" v-for="item,index in launchesList" :key="index">
            <div class="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-300 dark:bg-gray-300"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">{{item.launch_year}}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{item.mission_name}}</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">{{item.details}}</p>
            <a href="javascript:void(0)" @click="showLaunchDetails(item)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
        </li>
    </ol>
</template>
<script>
import ModalParentContainer from '../ModalParentContainer.vue'
export default {
    props:['launchesList'],
    components:{
        ModalParentContainer
    },
    data(){
        return{
            toggleModal:false,
            modalDataProp:[]
        }
    },
    methods:{
        showLaunchDetails(data){
            this.toggleModal = !this.toggleModal
            this.modalDataProp = data
        }
    }
}
</script>